import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const IS_OBJECT = 'isObject';

/**
 * Checks if the value is valid Object.
 * Returns false if the value is not an object.
 */
export function isObject<T = object>(value: unknown): value is T {
  return value != null && (typeof value === 'object' || typeof value === 'function') && !Array.isArray(value);
}

/**
 * Checks if the value is valid Object.
 * Returns false if the value is not an object.
 */
export function IsObject(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_OBJECT,
      validator: {
        validate: (value, args): boolean => isObject(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-object-each' : 'is-object')
      },
    },
    validationOptions
  );
}
