import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isVariableWidthValidator from 'validator/lib/isVariableWidth';

export const IS_VARIABLE_WIDTH = 'isVariableWidth';

/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 */
export function isVariableWidth(value: unknown): boolean {
  return typeof value === 'string' && isVariableWidthValidator(value);
}

/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 */
export function IsVariableWidth(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_VARIABLE_WIDTH,
      validator: {
        validate: (value, args): boolean => isVariableWidth(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-variable-width-each' : 'is-variable-width'),
      },
    },
    validationOptions
  );
}
