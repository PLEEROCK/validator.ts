import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isHalfWidthValidator from 'validator/lib/isHalfWidth';

export const IS_HALF_WIDTH = 'isHalfWidth';

/**
 * Checks if the string contains any half-width chars.
 * If given value is not a string, then it returns false.
 */
export function isHalfWidth(value: unknown): boolean {
  return typeof value === 'string' && isHalfWidthValidator(value);
}

/**
 * Checks if the string contains any half-width chars.
 * If given value is not a string, then it returns false.
 */
export function IsHalfWidth(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_HALF_WIDTH,
      validator: {
        validate: (value, args): boolean => isHalfWidth(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-half-width-each' : 'is-half-width'),
      },
    },
    validationOptions
  );
}
