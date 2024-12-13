import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const NOT_EQUALS = 'notEquals';

/**
 * Checks if value does not match ("!==") the comparison.
 */
export function notEquals(value: unknown, comparison: unknown): boolean {
  return value !== comparison;
}

/**
 * Checks if value does not match ("!==") the comparison.
 */
export function NotEquals(comparison: any, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: NOT_EQUALS,
      constraints: [comparison],
      validator: {
        validate: (value, args): boolean => notEquals(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'not-equals-each' : 'not-equals')
      },
    },
    validationOptions
  );
}
