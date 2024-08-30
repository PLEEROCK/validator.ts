import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';

export const IS_LUHN = 'isLuhn';

/**
 * Verify the card number using the Luhn algorithm.
 * The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers,
 * such as credit card numbers.
 */
export function isLuhn(value: unknown): boolean {
    if(typeof value != 'string') return false;
    if(value.length == 0) return false;
    let nCheck = 0;
    if (/[0-9-\s]+/.test(value)) {
        value = value.replace(/\D/g, '');

        (value as string).split('').forEach((v, n) => {
            let nDigit = parseInt(v, 10);

            if (!(((value as string).length + n) % 2) && (nDigit *= 2) > 9) {
                nDigit -= 9;
            }

            nCheck += nDigit;
        });
    }


    return (nCheck % 10) === 0;
}

/**
 * Verify the card number using the Luhn algorithm.
 * */
export function IsLuhn(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_LUHN,
      validator: {
        validate: (value, args): boolean => isLuhn(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property must be a valid card number', validationOptions),
      },
    },
    validationOptions
  );
}

