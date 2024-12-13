import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isAlphaValidator from 'validator/lib/isAlpha';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_ALPHA = 'isAlpha';

/**
 * Checks if the string contains only letters (a-zA-Z).
 * If given value is not a string, then it returns false.
 */
export function isAlpha(value: unknown, locale?: ValidatorJS.AlphaLocale): boolean {
  return typeof value === 'string' && isAlphaValidator(value, locale);
}

/**
 * Checks if the string contains only letters (a-zA-Z).
 * If given value is not a string, then it returns false.
 */
export function IsAlpha(locale?: ValidatorJS.AlphaLocale, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ALPHA,
      constraints: [locale],
      validator: {
        validate: (value, args): boolean => isAlpha(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-alpha' : 'is-alpha'),
      },
    },
    validationOptions
  );
}
