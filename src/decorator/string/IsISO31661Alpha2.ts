import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isISO31661Alpha2Validator from 'validator/lib/isISO31661Alpha2';

export const IS_ISO31661_ALPHA_2 = 'isISO31661Alpha2';

/**
 * Check if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code.
 */
export function isISO31661Alpha2(value: unknown): boolean {
  return typeof value === 'string' && isISO31661Alpha2Validator(value);
}

/**
 * Check if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code.
 */
export function IsISO31661Alpha2(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ISO31661_ALPHA_2,
      validator: {
        validate: (value, args): boolean => isISO31661Alpha2(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-iso31661-alpha2-each' : 'is-iso31661-alpha2'),
      },
    },
    validationOptions
  );
}
