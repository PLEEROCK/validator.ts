import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const ARRAY_NOT_CONTAINS = 'arrayNotContains';

/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
export function arrayNotContains(array: unknown, values: any[]): boolean {
  if (!Array.isArray(array)) return false;

  return values.every(value => array.indexOf(value) === -1);
}

/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
export function ArrayNotContains(values: any[], validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: ARRAY_NOT_CONTAINS,
      constraints: [values],
      validator: {
        validate: (value, args): boolean => arrayNotContains(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'array-not-contains-each' : 'array-not-contains'),
      },
    },
    validationOptions
  );
}
