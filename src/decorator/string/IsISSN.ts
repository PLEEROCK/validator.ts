import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isISSNValidator from 'validator/lib/isISSN';
import * as ValidatorJS from 'validator';
import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';

export const IS_ISSN = 'isISSN';

/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
export function isISSN(value: unknown, options?: ValidatorJS.IsISSNOptions): boolean {
  return typeof value === 'string' && isISSNValidator(value, options);
}

/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
export function IsISSN(options?: ValidatorJS.IsISSNOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ISSN,
      constraints: [options],
      validator: {
        validate: (value, args): boolean => isISSN(value, args?.constraints[0]),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-issn-each' : 'is-issn'),
      },
    },
    validationOptions
  );
}
