import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isBtcAddressValidator from 'validator/lib/isBtcAddress';

export const IS_BTC_ADDRESS = 'isBtcAddress';

/**
 * Check if the string is a valid BTC address.
 * If given value is not a string, then it returns false.
 */
export function isBtcAddress(value: unknown): boolean {
  return typeof value === 'string' && isBtcAddressValidator(value);
}

/**
 * Check if the string is a valid BTC address.
 * If given value is not a string, then it returns false.
 */
export function IsBtcAddress(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_BTC_ADDRESS,
      validator: {
        validate: (value, args): boolean => isBtcAddress(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-btc-address-each' : 'is-btc-address'),
      },
    },
    validationOptions
  );
}
