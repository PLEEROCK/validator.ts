import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const ARRAY_NOT_EMPTY = 'arrayNotEmpty';

/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
export function arrayNotEmpty(array: unknown): boolean {
  return Array.isArray(array) && array.length > 0;
}

/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
export function ArrayNotEmpty(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: ARRAY_NOT_EMPTY,
      validator: {
        validate: (value, args): boolean => arrayNotEmpty(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'array-not-empty-each' : 'array-not-empty'),
      },
    },
    validationOptions
  );
}
