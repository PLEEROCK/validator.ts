import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isIdentityCardValidator from 'validator/lib/isIdentityCard';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_IDENTITY_CARD = 'isIdentityCard';

/**
 * Check if the string is a valid identity card code.
 * locale is one of ['ES', 'zh-TW', 'he-IL', 'ar-TN'] OR 'any'. If 'any' is used, function will check if any of the locals match.
 * Defaults to 'any'.
 * If given value is not a string, then it returns false.
 */
export function isIdentityCard(value: unknown, locale: ValidatorJS.IdentityCardLocale): boolean {
  return typeof value === 'string' && isIdentityCardValidator(value, locale);
}

/**
 * Check if the string is a valid identity card code.
 * locale is one of ['ES', 'zh-TW', 'he-IL', 'ar-TN'] OR 'any'. If 'any' is used, function will check if any of the locals match.
 * Defaults to 'any'.
 * If given value is not a string, then it returns false.
 */
export function IsIdentityCard(
  locale?: ValidatorJS.IdentityCardLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_IDENTITY_CARD,
      constraints: [locale],
      validator: {
        validate: (value, args): boolean => isIdentityCard(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-identity-card-each' : 'is-identity-card'),
      },
    },
    validationOptions
  );
}
