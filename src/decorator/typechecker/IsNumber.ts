import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';

export const IS_NUMBER = 'isNumber';

/**
 * Options to be passed to IsNumber decorator.
 */
export interface IsNumberOptions {
  allowNaN?: boolean;
  allowInfinity?: boolean;
  maxDecimalPlaces?: number;
}

/**
 * Checks if a given value is a number.
 */
export function isNumber(value: unknown, options: IsNumberOptions = {}): value is number {
  if (typeof value !== 'number') {
    return false;
  }

  if (value === Infinity || value === -Infinity) {
    return !!options.allowInfinity;
  }

  if (Number.isNaN(value)) {
    return !!options.allowNaN;
  }

  if (options.maxDecimalPlaces !== undefined) {
    let decimalPlaces = 0;
    if (value % 1 !== 0) {
      decimalPlaces = value.toString().split('.')[1].length;
    }
    if (decimalPlaces > options.maxDecimalPlaces) {
      return false;
    }
  }

  return Number.isFinite(value);
}

/**
 * Checks if a value is a number.
 */
export function IsNumber(options: IsNumberOptions = {}, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_NUMBER,
      constraints: [options],
      validator: {
        validate: (value, args): boolean => isNumber(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-number-each' : 'is-number')
      },
    },
    validationOptions
  );
}
