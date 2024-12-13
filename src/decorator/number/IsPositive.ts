import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const IS_POSITIVE = 'isPositive';

/**
 * Checks if the value is a positive number greater than zero.
 */
export function isPositive(value: unknown): boolean {
  return typeof value === 'number' && value > 0;
}

/**
 * Checks if the value is a positive number greater than zero.
 */
export function IsPositive(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_POSITIVE,
      validator: {
        validate: (value, args): boolean => isPositive(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-positive-each' : 'is-positive')
      },
    },
    validationOptions
  );
}
