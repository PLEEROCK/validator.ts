import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const ARRAY_MAX_SIZE = 'arrayMaxSize';

/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function arrayMaxSize(array: unknown, max: number): boolean {
  return Array.isArray(array) && array.length <= max;
}

/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function ArrayMaxSize(max: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: ARRAY_MAX_SIZE,
      constraints: [max],
      validator: {
        validate: (value, args): boolean => arrayMaxSize(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'array-max-size-each' : 'array-max-size'),
      },
    },
    validationOptions
  );
}
