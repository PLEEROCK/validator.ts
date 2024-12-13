import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const MAX_DATE = 'maxDate';

/**
 * Checks if the value is a date that's before the specified date.
 */
export function maxDate(date: unknown, maxDate: Date | (() => Date)): boolean {
  return date instanceof Date && date.getTime() <= (maxDate instanceof Date ? maxDate : maxDate()).getTime();
}

/**
 * Checks if the value is a date that's before the specified date.
 */
export function MaxDate(date: Date | (() => Date), validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: MAX_DATE,
      constraints: [date],
      validator: {
        validate: (value, args): boolean => maxDate(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'max-date-each' : 'max-date')
      },
    },
    validationOptions
  );
}
