import { generate } from 'generate-password';

/**
 * Returns a generated password with lowcase letters, uppercase letters and numbers with a lenght of 10 characters.
 * @returns string
 */
export const generateRandomPassword = (): string => {
    return generate({
        length: 10,
        numbers: true
    });
}

/**
 * Returns a random four digit number.
 * @returns string
 */
export const generateRandomFourDigitNumber = (): string => {
    return Math.floor(1000 + Math.random() * 9000) + "";
}

/**
 * Return an identifier from user first name and last name with a generated random four digit number (e.g. Dupont_J4242 from Dupont Jean).
 * @param firstName user first name as a string
 * @param lastName user last name as a string
 * @returns string
 */
export const generateIdentifier = (firstName: string, lastName: string): string => {
    if (lastName.replace(/\s/g, '').length < 6) {
        return lastName.replace(/\s/g, '') +
        '_' + firstName.replace(/\s/g, '').substring(0) +
        generateRandomFourDigitNumber();
    } else {
        return lastName.replace(/\s/g, '').substring(0, 6) +
        '_' + firstName.replace(/\s/g, '').substring(0) +
        generateRandomFourDigitNumber();
    }
}