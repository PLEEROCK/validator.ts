import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const IS_STRING = 'isString';

/**
 * Checks if a given value is a real string.
 */
export function isString(value: unknown): value is string {
  return value instanceof String || typeof value === 'string';
}

/**
 * Checks if a given value is a real string.
 */
export function IsString(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_STRING,
      validator: {
        validate: (value, args): boolean => isString(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-string-each' : 'is-string')
      },
    },
    validationOptions
  );
}
