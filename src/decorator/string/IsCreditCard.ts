import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isCreditCardValidator from 'validator/lib/isCreditCard';

export const IS_CREDIT_CARD = 'isCreditCard';

/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 */
export function isCreditCard(value: unknown): boolean {
  return typeof value === 'string' && isCreditCardValidator(value);
}

/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 */
export function IsCreditCard(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_CREDIT_CARD,
      validator: {
        validate: (value, args): boolean => isCreditCard(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-credit-card-each' : 'is-credit-card'),
      },
    },
    validationOptions
  );
}
