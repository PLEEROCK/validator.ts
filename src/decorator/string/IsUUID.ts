import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isUuidValidator from 'validator/lib/isUUID';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_UUID = 'isUuid';

/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
export function isUUID(value: unknown, version?: ValidatorJS.UUIDVersion): boolean {
  return typeof value === 'string' && isUuidValidator(value, version);
}

/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
export function IsUUID(version?: ValidatorJS.UUIDVersion, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_UUID,
      constraints: [version],
      validator: {
        validate: (value, args): boolean => isUUID(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-uuid-each' : 'is-uuid'),
      },
    },
    validationOptions
  );
}
