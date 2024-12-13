import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from './ValidateBy';
import isLatLongValidator from 'validator/lib/isLatLong';

export const IS_LATLONG = 'isLatLong';

/**
 * Checks if a value is string in format a "latitude,longitude".
 */
export function isLatLong(value: string): boolean {
  return typeof value === 'string' && isLatLongValidator(value);
}

/**
 * Checks if a value is string in format a "latitude,longitude".
 */
export function IsLatLong(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_LATLONG,
      validator: {
        validate: (value, args): boolean => isLatLong(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-lat-long-each' : 'is-lat-long')
      },
    },
    validationOptions
  );
}
