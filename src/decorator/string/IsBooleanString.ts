import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isBooleanValidator from 'validator/lib/isBoolean';

export const IS_BOOLEAN_STRING = 'isBooleanString';

/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 */
export function isBooleanString(value: unknown): boolean {
  return typeof value === 'string' && isBooleanValidator(value);
}

/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 */
export function IsBooleanString(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_BOOLEAN_STRING,
      validator: {
        validate: (value, args): boolean => isBooleanString(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-boolean-string-each' : 'is-boolean-string'),
      },
    },
    validationOptions
  );
}
