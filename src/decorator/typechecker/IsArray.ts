import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const IS_ARRAY = 'isArray';

/**
 * Checks if a given value is an array
 */
export function isArray<T = any>(value: unknown): value is Array<T> {
  return Array.isArray(value);
}

/**
 * Checks if a given value is an array
 */
export function IsArray(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ARRAY,
      validator: {
        validate: (value, args): boolean => isArray(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-array-each' : 'is-array')
      },
    },
    validationOptions
  );
}
