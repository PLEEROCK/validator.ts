import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { TranslatorDriver } from '../Translator';

export type DefaultDriverOptions = {
  defaultLanguage?: string
}

type Translations = {
  [key: string]: string
}

export class DefaultDriver implements TranslatorDriver {
  constructor(protected readonly options: DefaultDriverOptions = {}) {}

  translate(key: string, language?: string | null): string {
    const translations = this.getTranslations(language ?? this.getDefaultLanguage());
    return translations && translations[key] ? translations[key] : key;
  }

  protected getDefaultLanguage(): string {
    return this.options.defaultLanguage ?? 'en';
  }

  protected getTranslations(language: string): Translations | null {
    const fileContent = this.getContentFromLocaleFile(language);
    return fileContent ? JSON.parse(fileContent) : null;
  }

  protected getContentFromLocaleFile(locale: string): string | null {
    const basePath = join(__dirname, '..', '..', '..', 'locales');
    const filePath = join(basePath, `${locale}.json`);
    if (dirname(filePath) !== basePath) {
      return null;
    }
    if (!existsSync(filePath)) {
      return null;
    }
    const fileContent = readFileSync(filePath);
    return fileContent ? fileContent.toString() : null;
  }
}
