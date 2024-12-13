import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const MAX = 'max';

/**
 * Checks if the first number is less than or equal to the second.
 */
export function max(num: unknown, max: number): boolean {
  return typeof num === 'number' && typeof max === 'number' && num <= max;
}

/**
 * Checks if the value is less than or equal to the allowed maximum value.
 */
export function Max(maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: MAX,
      constraints: [maxValue],
      validator: {
        validate: (value, args): boolean => max(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'max-each' : 'max')
      },
    },
    validationOptions
  );
}
