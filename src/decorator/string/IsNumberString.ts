import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isNumericValidator from 'validator/lib/isNumeric';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_NUMBER_STRING = 'isNumberString';

/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
export function isNumberString(value: unknown, options?: ValidatorJS.IsNumericOptions): boolean {
  return typeof value === 'string' && isNumericValidator(value, options);
}

/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
export function IsNumberString(
  options?: ValidatorJS.IsNumericOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_NUMBER_STRING,
      constraints: [options],
      validator: {
        validate: (value, args): boolean => isNumberString(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-number-string-each' : 'is-number-string'),
      },
    },
    validationOptions
  );
}
