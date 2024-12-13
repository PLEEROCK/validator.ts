import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isIPValidator from 'validator/lib/isIP';

export type IsIpVersion = '4' | '6' | 4 | 6;

export const IS_IP = 'isIp';

/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 */
export function isIP(value: unknown, version?: IsIpVersion): boolean {
  /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */
  const versionStr = version ? (`${version}` as '4' | '6') : undefined;
  return typeof value === 'string' && isIPValidator(value, versionStr);
}

/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 */
export function IsIP(version?: IsIpVersion, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_IP,
      constraints: [version],
      validator: {
        validate: (value, args): boolean => isIP(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-ip-each' : 'is-ip'),
      },
    },
    validationOptions
  );
}
