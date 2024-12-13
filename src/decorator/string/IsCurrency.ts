import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isCurrencyValidator from 'validator/lib/isCurrency';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_CURRENCY = 'isCurrency';

/**
 * Checks if the string is a valid currency amount.
 * If given value is not a string, then it returns false.
 */
export function isCurrency(value: unknown, options?: ValidatorJS.IsCurrencyOptions): boolean {
  return typeof value === 'string' && isCurrencyValidator(value, options);
}

/**
 * Checks if the string is a valid currency amount.
 * If given value is not a string, then it returns false.
 */
export function IsCurrency(
  options?: ValidatorJS.IsCurrencyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_CURRENCY,
      constraints: [options],
      validator: {
        validate: (value, args): boolean => isCurrency(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-currency-each' : 'is-currency'),
      },
    },
    validationOptions
  );
}
