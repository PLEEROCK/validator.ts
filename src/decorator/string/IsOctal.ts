import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isOctalValidator from 'validator/lib/isOctal';

export const IS_OCTAL = 'isOctal';

/**
 * Check if the string is a valid octal number.
 * If given value is not a string, then it returns false.
 */
export function isOctal(value: unknown): boolean {
  return typeof value === 'string' && isOctalValidator(value);
}

/**
 * Check if the string is a valid octal number.
 * If given value is not a string, then it returns false.
 */
export function IsOctal(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_OCTAL,
      validator: {
        validate: (value, args): boolean => isOctal(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-octal-each' : 'is-octal'),
      },
    },
    validationOptions
  );
}
