import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from './ValidateBy';
import { isLatLong } from './IsLatLong';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_LONGITUDE = 'isLongitude';

/**
 * Checks if a given value is a longitude.
 */
export function isLongitude(value: string): boolean {
  return (typeof value === 'number' || typeof value === 'string') && isLatLong(`0,${value}`);
}

/**
 * Checks if a given value is a longitude.
 */
export function IsLongitude(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_LONGITUDE,
      validator: {
        validate: (value, args): boolean => isLongitude(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-longitude-each' : 'is-longitude')
      },
    },
    validationOptions
  );
}
