import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const EQUALS = 'equals';

/**
 * Checks if value matches ("===") the comparison.
 */
export function equals(value: unknown, comparison: unknown): boolean {
  return value === comparison;
}

/**
 * Checks if value matches ("===") the comparison.
 */
export function Equals(comparison: any, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: EQUALS,
      constraints: [comparison],
      validator: {
        validate: (value, args): boolean => equals(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'equals-each' : 'equals')
      },
    },
    validationOptions
  );
}
