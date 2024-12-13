import { TranslatorDriver } from '../Translator';

type I18nService = {
  translate(key: string, options?: TranslateOptions): string;
}

export type TranslateOptions = {
    lang?: string;
};

export class NestI18nDriver implements TranslatorDriver {
  constructor(private readonly i18nService: I18nService) { }

  translate(key: string, language?: string | null): string {
    const options: TranslateOptions = {};
    if (language != null) {
        options.lang = language;
    }
    return this.i18nService.translate(key, options);
  }
}
