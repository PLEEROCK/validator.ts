import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isDivisibleByValidator from 'validator/lib/isDivisibleBy';

export const IS_DIVISIBLE_BY = 'isDivisibleBy';

/**
 * Checks if value is a number that's divisible by another.
 */
export function isDivisibleBy(value: unknown, num: number): boolean {
  return typeof value === 'number' && typeof num === 'number' && isDivisibleByValidator(String(value), num);
}

/**
 * Checks if value is a number that's divisible by another.
 */
export function IsDivisibleBy(num: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_DIVISIBLE_BY,
      constraints: [num],
      validator: {
        validate: (value, args): boolean => isDivisibleBy(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-divisible-by-each' : 'is-divisible-by')
      },
    },
    validationOptions
  );
}
