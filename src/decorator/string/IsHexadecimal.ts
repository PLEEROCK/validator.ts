import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isHexadecimalValidator from 'validator/lib/isHexadecimal';

export const IS_HEXADECIMAL = 'isHexadecimal';

/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 */
export function isHexadecimal(value: unknown): boolean {
  return typeof value === 'string' && isHexadecimalValidator(value);
}

/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 */
export function IsHexadecimal(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_HEXADECIMAL,
      validator: {
        validate: (value, args): boolean => isHexadecimal(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-hexadecimal-each' : 'is-hexadecimal'),
      },
    },
    validationOptions
  );
}
