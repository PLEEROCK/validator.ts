import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isBase32Validator from 'validator/lib/isBase32';

export const IS_BASE32 = 'isBase32';

/**
 * Checks if a string is base32 encoded.
 * If given value is not a string, then it returns false.
 */
export function isBase32(value: unknown): boolean {
  return typeof value === 'string' && isBase32Validator(value);
}

/**
 * Check if a string is base32 encoded.
 * If given value is not a string, then it returns false.
 */
export function IsBase32(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_BASE32,
      validator: {
        validate: (value, args): boolean => isBase32(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-base32-each' : 'is-base32'),
      },
    },
    validationOptions
  );
}
