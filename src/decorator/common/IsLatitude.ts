import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from './ValidateBy';
import { isLatLong } from './IsLatLong';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_LATITUDE = 'isLatitude';

/**
 * Checks if a given value is a latitude.
 */
export function isLatitude(value: string): boolean {
  return (typeof value === 'number' || typeof value === 'string') && isLatLong(`${value},0`);
}

/**
 * Checks if a given value is a latitude.
 */
export function IsLatitude(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_LATITUDE,
      validator: {
        validate: (value, args): boolean => isLatitude(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-latitude-each' : 'is-latitude')
      },
    },
    validationOptions
  );
}
