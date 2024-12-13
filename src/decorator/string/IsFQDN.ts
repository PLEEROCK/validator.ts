import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isFqdnValidator from 'validator/lib/isFQDN';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_FQDN = 'isFqdn';

/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 * If given value is not a string, then it returns false.
 */
export function isFQDN(value: unknown, options?: ValidatorJS.IsFQDNOptions): boolean {
  return typeof value === 'string' && isFqdnValidator(value, options);
}

/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 * If given value is not a string, then it returns false.
 */
export function IsFQDN(options?: ValidatorJS.IsFQDNOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_FQDN,
      constraints: [options],
      validator: {
        validate: (value, args): boolean => isFQDN(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-fqdn-each' : 'is-fqdn'),
      },
    },
    validationOptions
  );
}
