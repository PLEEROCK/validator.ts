import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const IS_BOOLEAN = 'isBoolean';

/**
 * Checks if a given value is a boolean.
 */
export function isBoolean(value: unknown): value is boolean {
  return value instanceof Boolean || typeof value === 'boolean';
}

/**
 * Checks if a value is a boolean.
 */
export function IsBoolean(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_BOOLEAN,
      validator: {
        validate: (value, args): boolean => isBoolean(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-boolean-each' : 'is-boolean')
      },
    },
    validationOptions
  );
}
