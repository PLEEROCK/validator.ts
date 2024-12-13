import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isMagnetURIValidator from 'validator/lib/isMagnetURI';

export const IS_MAGNET_URI = 'isMagnetURI';

/**
 * Check if the string is a magnet uri format.
 * If given value is not a string, then it returns false.
 */
export function isMagnetURI(value: unknown): boolean {
  return typeof value === 'string' && isMagnetURIValidator(value);
}

/**
 * Check if the string is a magnet uri format.
 * If given value is not a string, then it returns false.
 */
export function IsMagnetURI(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_MAGNET_URI,
      validator: {
        validate: (value, args): boolean => isMagnetURI(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-magnet-uri-each' : 'is-magnet-uri'),
      },
    },
    validationOptions
  );
}
