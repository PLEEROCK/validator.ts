import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isISRCValidator from 'validator/lib/isISRC';

export const IS_ISRC = 'isISRC';

/**
 * Check if the string is a ISRC.
 * If given value is not a string, then it returns false.
 */
export function isISRC(value: unknown): boolean {
  return typeof value === 'string' && isISRCValidator(value);
}

/**
 * Check if the string is a ISRC.
 * If given value is not a string, then it returns false.
 */
export function IsISRC(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ISRC,
      validator: {
        validate: (value, args): boolean => isISRC(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-isrc-each' : 'is-isrc'),
      },
    },
    validationOptions
  );
}
