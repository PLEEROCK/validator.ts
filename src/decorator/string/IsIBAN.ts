import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isIBANValidator from 'validator/lib/isIBAN';

export const IS_IBAN = 'isIBAN';

/**
 * Check if a string is a IBAN (International Bank Account Number).
 * If given value is not a string, then it returns false.
 */
export function isIBAN(value: unknown): boolean {
  return typeof value === 'string' && isIBANValidator(value);
}

/**
 * Check if a string is a IBAN (International Bank Account Number).
 * If given value is not a string, then it returns false.
 */
export function IsIBAN(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_IBAN,
      validator: {
        validate: (value, args): boolean => isIBAN(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-iban-each' : 'is-iban'),
      },
    },
    validationOptions
  );
}
