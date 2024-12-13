import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isPortValidator from 'validator/lib/isPort';

export const IS_PORT = 'isPort';

/**
 * Check if the string is a valid port number.
 */
export function isPort(value: unknown): boolean {
  return typeof value === 'string' && isPortValidator(value);
}

/**
 * Check if the string is a valid port number.
 */
export function IsPort(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_PORT,
      validator: {
        validate: (value, args): boolean => isPort(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-port-each' : 'is-port'),
      },
    },
    validationOptions
  );
}
