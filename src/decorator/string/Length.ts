import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isLengthValidator from 'validator/lib/isLength';

export const IS_LENGTH = 'isLength';

/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function length(value: unknown, min: number, max?: number): boolean {
  return typeof value === 'string' && isLengthValidator(value, { min, max });
}

/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function Length(min: number, max?: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_LENGTH,
      constraints: [min, max],
      validator: {
        validate: (value, args): boolean => length(value, args?.constraints[0], args?.constraints[1]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => {
          const isMinLength = args?.constraints[0] !== null && args?.constraints[0] !== undefined;
          const isMaxLength = args?.constraints[1] !== null && args?.constraints[1] !== undefined;
          if (isMinLength && (!args.value || args.value.length < args?.constraints[0])) {
            return translate(validationOptions?.each ? 'is-min-length-each' : 'is-min-length');
          } else if (isMaxLength && args.value.length > args?.constraints[1]) {
            return translate(validationOptions?.each ? 'is-max-length-each' : 'is-max-length');
          }
          return translate(validationOptions?.each ? 'length-each' : 'length');
        },
      },
    },
    validationOptions
  );
}
