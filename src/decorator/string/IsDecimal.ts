import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isDecimalValidator from 'validator/lib/isDecimal';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_DECIMAL = 'isDecimal';

/**
 * Checks if the string is a valid decimal.
 * If given value is not a string, then it returns false.
 */
export function isDecimal(value: unknown, options?: ValidatorJS.IsDecimalOptions): boolean {
  return typeof value === 'string' && isDecimalValidator(value, options);
}

/**
 * Checks if the string is a valid decimal.
 * If given value is not a string, then it returns false.
 */
export function IsDecimal(
  options?: ValidatorJS.IsDecimalOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_DECIMAL,
      constraints: [options],
      validator: {
        validate: (value, args): boolean => isDecimal(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-decimal-each' : 'is-decimal'),
      },
    },
    validationOptions
  );
}
