import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import containsValidator from 'validator/lib/contains';

export const NOT_CONTAINS = 'notContains';

/**
 * Checks if the string does not contain the seed.
 * If given value is not a string, then it returns false.
 */
export function notContains(value: unknown, seed: string): boolean {
  return typeof value === 'string' && !containsValidator(value, seed);
}

/**
 * Checks if the string does not contain the seed.
 * If given value is not a string, then it returns false.
 */
export function NotContains(seed: string, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: NOT_CONTAINS,
      constraints: [seed],
      validator: {
        validate: (value, args): boolean => notContains(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'not-contains-each' : 'not-contains'),
      },
    },
    validationOptions
  );
}
