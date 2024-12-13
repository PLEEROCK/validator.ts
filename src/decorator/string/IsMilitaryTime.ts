import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import matchesValidator from 'validator/lib/matches';

export const IS_MILITARY_TIME = 'isMilitaryTime';

/**
 * Checks if the string represents a time without a given timezone in the format HH:MM (military)
 * If the given value does not match the pattern HH:MM, then it returns false.
 */
export function isMilitaryTime(value: unknown): boolean {
  const militaryTimeRegex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
  return typeof value === 'string' && matchesValidator(value, militaryTimeRegex);
}

/**
 * Checks if the string represents a time without a given timezone in the format HH:MM (military)
 * If the given value does not match the pattern HH:MM, then it returns false.
 */
export function IsMilitaryTime(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_MILITARY_TIME,
      validator: {
        validate: (value, args): boolean => isMilitaryTime(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-military-time-each' : 'is-military-time'),
      },
    },
    validationOptions
  );
}
