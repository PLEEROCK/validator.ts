import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isISO4217Validator from 'validator/lib/isISO4217';

export const IS_ISO4217_CURRENCY_CODE = 'isISO4217CurrencyCode';

/**
 * Check if the string is a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) officially assigned currency code.
 */
export function isISO4217CurrencyCode(value: unknown): boolean {
  return typeof value === 'string' && isISO4217Validator(value);
}

/**
 * Check if the string is a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) officially assigned currency code.
 */
export function IsISO4217CurrencyCode(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ISO4217_CURRENCY_CODE,
      validator: {
        validate: (value, args): boolean => isISO4217CurrencyCode(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-iso4217-currency-code-each' : 'is-iso4217-currency-code'),
      },
    },
    validationOptions
  );
}
