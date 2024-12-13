import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isJwtValidator from 'validator/lib/isJWT';

export const IS_JWT = 'isJwt';

/**
 * Checks if the string is valid JWT token.
 * If given value is not a string, then it returns false.
 */
export function isJWT(value: unknown): boolean {
  return typeof value === 'string' && isJwtValidator(value);
}

/**
 * Checks if the string is valid JWT token.
 * If given value is not a string, then it returns false.
 */
export function IsJWT(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_JWT,
      validator: {
        validate: (value, args): boolean => isJWT(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-jwt-each' : 'is-jwt'),
      },
    },
    validationOptions
  );
}
