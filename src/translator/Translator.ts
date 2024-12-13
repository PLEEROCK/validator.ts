import { getGlobal } from '../utils';
import { DefaultDriver } from './drivers/DefaultDriver';

export function setTranslatorDriver(driver: TranslatorDriver) {
  const global = getGlobal();
  global.classValidatorTranslatorDriver = driver;
}

export function translate(key: string, language: string | null = null): string {
  const translatorDriver = getTranslatorDriver();
  return translatorDriver.translate(`class-validator.${key}`, language);
}

export function getTranslatorDriver(): TranslatorDriver {
  const global = getGlobal();
  if (!global.classValidatorTranslatorDriver) {
    global.classValidatorTranslatorDriver = new DefaultDriver();
  }
  return global.classValidatorTranslatorDriver;
}

export interface TranslatorDriver {
  translate(key: string, language?: string | null): string
}
