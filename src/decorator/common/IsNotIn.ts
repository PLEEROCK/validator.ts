import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const IS_NOT_IN = 'isNotIn';

/**
 * Checks if given value not in a array of allowed values.
 */
export function isNotIn(value: unknown, possibleValues: readonly unknown[]): boolean {
  return !Array.isArray(possibleValues) || !possibleValues.some(possibleValue => possibleValue === value);
}

/**
 * Checks if given value not in a array of allowed values.
 */
export function IsNotIn(values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_NOT_IN,
      constraints: [values],
      validator: {
        validate: (value, args): boolean => isNotIn(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-not-in-each' : 'is-not-in')
      },
    },
    validationOptions
  );
}
