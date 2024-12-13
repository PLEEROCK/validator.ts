import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isDataURIValidator from 'validator/lib/isDataURI';

export const IS_DATA_URI = 'isDataURI';

/**
 * Check if the string is a data uri format.
 * If given value is not a string, then it returns false.
 */
export function isDataURI(value: unknown): boolean {
  return typeof value === 'string' && isDataURIValidator(value);
}

/**
 * Check if the string is a data uri format.
 * If given value is not a string, then it returns false.
 */
export function IsDataURI(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_DATA_URI,
      validator: {
        validate: (value, args): boolean => isDataURI(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-data-uri-each' : 'is-data-uri'),
      },
    },
    validationOptions
  );
}
