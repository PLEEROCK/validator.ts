import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isAlphanumericValidator from 'validator/lib/isAlphanumeric';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_ALPHANUMERIC = 'isAlphanumeric';

/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
export function isAlphanumeric(value: unknown, locale?: ValidatorJS.AlphanumericLocale): boolean {
  return typeof value === 'string' && isAlphanumericValidator(value, locale);
}

/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
export function IsAlphanumeric(
  locale?: ValidatorJS.AlphanumericLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ALPHANUMERIC,
      constraints: [locale],
      validator: {
        validate: (value, args): boolean => isAlphanumeric(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-alphanumeric-each' : 'is-alphanumeric'),
      },
    },
    validationOptions
  );
}
