import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from './ValidateBy';
import { ValidationTypes } from '../../validation/ValidationTypes';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

// isDefined is (yet) a special case
export const IS_DEFINED = ValidationTypes.IS_DEFINED;

/**
 * Checks if value is defined (!== undefined, !== null).
 */
export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

/**
 * Checks if value is defined (!== undefined, !== null).
 */
export function IsDefined(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_DEFINED,
      validator: {
        validate: (value): boolean => isDefined(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-defined-each' : 'is-defined')
      },
    },
    validationOptions
  );
}
