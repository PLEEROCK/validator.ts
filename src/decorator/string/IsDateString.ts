import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import * as ValidatorJS from 'validator';
import { isISO8601 } from './IsISO8601';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_DATE_STRING = 'isDateString';

/**
 * Alias for IsISO8601 validator
 */
export function isDateString(value: unknown, options?: ValidatorJS.IsISO8601Options): boolean {
  return isISO8601(value, options);
}

/**
 * Alias for IsISO8601 validator
 */
export function IsDateString(
  options?: ValidatorJS.IsISO8601Options,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_DATE_STRING,
      constraints: [options],
      validator: {
        validate: (value): boolean => isDateString(value, options),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-date-string-each' : 'is-date-string'),
      },
    },
    validationOptions
  );
}
