import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isPassportNumberValidator from 'validator/lib/isPassportNumber';

export const IS_PASSPORT_NUMBER = 'isPassportNumber';

/**
 * Check if the string is a valid passport number relative to a specific country code.
 * If given value is not a string, then it returns false.
 */
export function isPassportNumber(value: unknown, countryCode: string): boolean {
  return typeof value === 'string' && isPassportNumberValidator(value, countryCode);
}

/**
 * Check if the string is a valid passport number relative to a specific country code.
 * If given value is not a string, then it returns false.
 */
export function IsPassportNumber(countryCode: string, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_PASSPORT_NUMBER,
      constraints: [countryCode],
      validator: {
        validate: (value, args): boolean => isPassportNumber(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-passport-number-each' : 'is-passport-number'),
      },
    },
    validationOptions
  );
}
