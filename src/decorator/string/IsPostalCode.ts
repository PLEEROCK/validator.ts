import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isPostalCodeValidator from 'validator/lib/isPostalCode';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_POSTAL_CODE = 'isPostalCode';

/**
 * Check if the string is a postal code, in the specified locale.
 * If given value is not a string, then it returns false.
 */
export function isPostalCode(value: unknown, locale: 'any' | ValidatorJS.PostalCodeLocale): boolean {
  return typeof value === 'string' && isPostalCodeValidator(value, locale);
}

/**
 * Check if the string is a postal code, in the specified locale.
 * If given value is not a string, then it returns false.
 */
export function IsPostalCode(
  locale?: 'any' | ValidatorJS.PostalCodeLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_POSTAL_CODE,
      constraints: [locale],
      validator: {
        validate: (value, args): boolean => isPostalCode(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-postal-code-each' : 'is-postal-code'),
      },
    },
    validationOptions
  );
}
