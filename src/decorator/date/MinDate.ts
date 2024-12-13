import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const MIN_DATE = 'minDate';

/**
 * Checks if the value is a date that's after the specified date.
 */
export function minDate(date: unknown, minDate: Date | (() => Date)): boolean {
  return date instanceof Date && date.getTime() >= (minDate instanceof Date ? minDate : minDate()).getTime();
}

/**
 * Checks if the value is a date that's after the specified date.
 */
export function MinDate(date: Date | (() => Date), validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: MIN_DATE,
      constraints: [date],
      validator: {
        validate: (value, args): boolean => minDate(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'min-date-each' : 'min-date')
      },
    },
    validationOptions
  );
}
