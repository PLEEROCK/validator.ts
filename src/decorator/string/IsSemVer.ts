import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isSemVerValidator from 'validator/lib/isSemVer';

export const IS_SEM_VER = 'isSemVer';

/**
 * Check if the string is a Semantic Versioning Specification (SemVer).
 * If given value is not a string, then it returns false.
 */
export function isSemVer(value: unknown): boolean {
  return typeof value === 'string' && isSemVerValidator(value);
}

/**
 * Check if the string is a Semantic Versioning Specification (SemVer).
 * If given value is not a string, then it returns false.
 */
export function IsSemVer(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_SEM_VER,
      validator: {
        validate: (value, args): boolean => isSemVer(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-sem-ver-each' : 'is-sem-ver'),
      },
    },
    validationOptions
  );
}
