import { TranslatorDriver } from '../Translator';

type I18n = {
  __(phraseOrOptions: string | TranslateOptions): string;
}

type TranslateOptions  = {
    phrase: string;
    locale?: string | undefined;
};

export class I18nDriver implements TranslatorDriver {
  constructor(private readonly i18n: I18n) { }

  translate(key: string, locale?: string | null): string {
    if (locale != null) {
      return this.i18n.__({
        phrase: key,
        locale
      });
    }
    return this.i18n.__(key);
  }
}
