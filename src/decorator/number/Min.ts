import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const MIN = 'min';

/**
 * Checks if the first number is greater than or equal to the second.
 */
export function min(num: unknown, min: number): boolean {
  return typeof num === 'number' && typeof min === 'number' && num >= min;
}

/**
 * Checks if the value is greater than or equal to the allowed minimum value.
 */
export function Min(minValue: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: MIN,
      constraints: [minValue],
      validator: {
        validate: (value, args): boolean => min(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'min-each' : 'min')
      },
    },
    validationOptions
  );
}
