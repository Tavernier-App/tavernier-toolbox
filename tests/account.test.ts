import * as assert from 'assert';
import {
    generateIdentifier,
    generateRandomFourDigitNumber,
    generateRandomPassword
} from '../src/modules/account';
import { isPasswordValid } from '../src/modules/check';

const lastName = "Dupont";
const shortLastName = "Blanc"
const firstName = "Jean";

const isCorrespondingNumber = (number: string): boolean => {
    return !isNaN(parseInt(number)) && !isNaN(parseFloat(number)) && (number.length === 4);
}

const isCorrespondingCompleteIdentifier = (identifier: string): boolean => {
    const loginPart = identifier.substring(0, 8);
    const numberPart = identifier.substr(identifier.length - 4);
    return (loginPart.valueOf() === "Dupont_J") && (isCorrespondingNumber(numberPart))
}

const isCorrespondingShortIdentifier = (identifier: string): boolean => {
    const loginPart = identifier.substring(0, 7);
    const numberPart = identifier.substr(identifier.length - 4);
    return (loginPart.valueOf() === "Blanc_J") && (isCorrespondingNumber(numberPart))
}

describe("Account Module Tests", () => {
    describe("generateRandomFourDigitNumber Tests", () => {
        it("Should return true if the generated number has a 4 digit numbers lenght.", () => {
            assert.equal(isCorrespondingNumber(generateRandomFourDigitNumber()), true);
        });
    });
    describe("generateRandomPassword Tests", () => {
        it("Should return true if the generated password is valid.", () => {
            assert.equal(isPasswordValid(generateRandomPassword()), true);
        });
    });
    describe("generateIdentifier Tests", () => {
        it("Should return true if the generated identifier is valid.", () => {
            assert.equal(isCorrespondingCompleteIdentifier(generateIdentifier(firstName, lastName)), true);
        });
        it("Should return true if the generated identifier is valid.", () => {
            assert.equal(isCorrespondingShortIdentifier(generateIdentifier(firstName, shortLastName)), true);
        });
    });
});