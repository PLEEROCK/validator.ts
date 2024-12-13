import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isEthereumAddressValidator from 'validator/lib/isEthereumAddress';

export const IS_ETHEREUM_ADDRESS = 'isEthereumAddress';

/**
 * Check if the string is an Ethereum address using basic regex. Does not validate address checksums.
 * If given value is not a string, then it returns false.
 */
export function isEthereumAddress(value: unknown): boolean {
  return typeof value === 'string' && isEthereumAddressValidator(value);
}

/**
 * Check if the string is an Ethereum address using basic regex. Does not validate address checksums.
 * If given value is not a string, then it returns false.
 */
export function IsEthereumAddress(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ETHEREUM_ADDRESS,
      validator: {
        validate: (value, args): boolean => isEthereumAddress(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-ethereum-address-each' : 'is-ethereum-address'),
      },
    },
    validationOptions
  );
}
