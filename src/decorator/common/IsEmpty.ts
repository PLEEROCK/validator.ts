import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const IS_EMPTY = 'isEmpty';

/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
export function isEmpty(value: unknown): boolean {
  return value === '' || value === null || value === undefined;
}

/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
export function IsEmpty(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_EMPTY,
      validator: {
        validate: (value, args): boolean => isEmpty(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-empty-each' : 'is-empty')
      },
    },
    validationOptions
  );
}
