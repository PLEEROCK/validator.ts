import { ValidationArguments } from '../../validation/ValidationArguments';
import { TranslateFunction } from '../../validation/ValidationExecutor';
import { ValidationOptions } from '../ValidationOptions';
import { ValidateBy } from '../common/ValidateBy';
import isMongoIdValidator from 'validator/lib/isMongoId';

export const IS_MONGO_ID = 'isMongoId';

/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 */
export function isMongoId(value: unknown): boolean {
  return typeof value === 'string' && isMongoIdValidator(value);
}

/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 */
export function IsMongoId(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_MONGO_ID,
      validator: {
        validate: (value, args): boolean => isMongoId(value),
        defaultMessage: (args: ValidationArguments, translate: TranslateFunction) => translate(validationOptions?.each ? 'is-mongo-id-each' : 'is-mongo-id'),
      },
    },
    validationOptions
  );
}
