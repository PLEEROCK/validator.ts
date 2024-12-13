import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isSurrogatePairValidator from 'validator/lib/isSurrogatePair';

export const IS_SURROGATE_PAIR = 'isSurrogatePair';

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export function isSurrogatePair(value: unknown): boolean {
  return typeof value === 'string' && isSurrogatePairValidator(value);
}

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export function IsSurrogatePair(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_SURROGATE_PAIR,
      validator: {
        validate: (value, args): boolean => isSurrogatePair(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-surrogate-pair-each' : 'is-surrogate-pair'),
      },
    },
    validationOptions
  );
}
