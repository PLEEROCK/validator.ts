import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isLengthValidator from 'validator/lib/isLength';

export const MAX_LENGTH = 'maxLength';

/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function maxLength(value: unknown, max: number): boolean {
  return typeof value === 'string' && isLengthValidator(value, { min: 0, max });
}

/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function MaxLength(max: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: MAX_LENGTH,
      constraints: [max],
      validator: {
        validate: (value, args): boolean => maxLength(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'max-length-each' : 'max-length'),
      },
    },
    validationOptions
  );
}
