import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isFullWidthValidator from 'validator/lib/isFullWidth';

export const IS_FULL_WIDTH = 'isFullWidth';

/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
export function isFullWidth(value: unknown): boolean {
  return typeof value === 'string' && isFullWidthValidator(value);
}

/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
export function IsFullWidth(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_FULL_WIDTH,
      validator: {
        validate: (value, args): boolean => isFullWidth(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-full-width-each' : 'is-full-width'),
      },
    },
    validationOptions
  );
}
