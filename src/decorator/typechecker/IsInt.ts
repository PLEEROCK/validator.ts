import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const IS_INT = 'isInt';

/**
 * Checks if value is an integer.
 */
export function isInt(val: unknown): val is Number {
  return typeof val === 'number' && Number.isInteger(val);
}

/**
 * Checks if value is an integer.
 */
export function IsInt(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_INT,
      validator: {
        validate: (value, args): boolean => isInt(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-int-each' : 'is-int')
      },
    },
    validationOptions
  );
}
