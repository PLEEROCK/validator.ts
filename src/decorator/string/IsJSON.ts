import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isJSONValidator from 'validator/lib/isJSON';

export const IS_JSON = 'isJson';

/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 * If given value is not a string, then it returns false.
 */
export function isJSON(value: unknown): boolean {
  return typeof value === 'string' && isJSONValidator(value);
}

/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 * If given value is not a string, then it returns false.
 */
export function IsJSON(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_JSON,
      validator: {
        validate: (value, args): boolean => isJSON(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-json-each' : 'is-json'),
      },
    },
    validationOptions
  );
}
