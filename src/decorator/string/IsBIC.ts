import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isBICValidator from 'validator/lib/isBIC';

export const IS_BIC = 'isBIC';

/**
 * Check if a string is a BIC (Bank Identification Code) or SWIFT code.
 * If given value is not a string, then it returns false.
 */
export function isBIC(value: unknown): boolean {
  return typeof value === 'string' && isBICValidator(value);
}

/**
 * Check if a string is a BIC (Bank Identification Code) or SWIFT code.
 * If given value is not a string, then it returns false.
 */
export function IsBIC(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_BIC,
      validator: {
        validate: (value, args): boolean => isBIC(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-bic-each' : 'is-bic'),
      },
    },
    validationOptions
  );
}
