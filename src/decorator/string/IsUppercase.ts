import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isUppercaseValidator from 'validator/lib/isUppercase';

export const IS_UPPERCASE = 'isUppercase';

/**
 * Checks if the string is uppercase.
 * If given value is not a string, then it returns false.
 */
export function isUppercase(value: unknown): boolean {
  return typeof value === 'string' && isUppercaseValidator(value);
}

/**
 * Checks if the string is uppercase.
 * If given value is not a string, then it returns false.
 */
export function IsUppercase(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_UPPERCASE,
      validator: {
        validate: (value, args): boolean => isUppercase(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-uppercase-each' : 'is-uppercase'),
      },
    },
    validationOptions
  );
}
