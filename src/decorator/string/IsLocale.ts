import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isLocaleValidator from 'validator/lib/isLocale';

export const IS_LOCALE = 'isLocale';

/**
 * Check if the string is a locale.
 * If given value is not a string, then it returns false.
 */
export function isLocale(value: unknown): boolean {
  return typeof value === 'string' && isLocaleValidator(value);
}

/**
 * Check if the string is a locale.
 * If given value is not a string, then it returns false.
 */
export function IsLocale(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_LOCALE,
      validator: {
        validate: (value, args): boolean => isLocale(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-locale-each' : 'is-locale'),
      },
    },
    validationOptions
  );
}
