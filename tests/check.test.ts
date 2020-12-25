import * as assert from 'assert';
import { isEmail, isPasswordValid } from "../src/modules/check";

const emailAddressWellFormatted = "dev@tavernier.com";
const emailAddressNotWellFormatted = "devtavenier.com";
const validPassword = "Password123";
const numberLessPassword = "PasswordTEST";
const tooShortPassword = "Bo2";
const lowerCaseLessPassword = "PASSWORD123";
const upperCaseLessPassword = "password123";

describe("Check Module Tests", () => {
    describe("checkEmailFormat Tests", () => {
        it("Should return true if the email is correctly formated.", () => {
            assert.equal(isEmail(emailAddressWellFormatted), true);
        });
        it("Should return false if the email is not correctly formated.", () => {
            assert.equal(isEmail(emailAddressNotWellFormatted), false);
        });
    });
    describe("isPasswordValid Tests", () => {
        it("Should return true if the password is valid.", () => {
            assert.equal(isPasswordValid(validPassword), true);
        });
        it("Should return false if the password is too short.", () => {
            assert.equal(isPasswordValid(tooShortPassword), false);
        });
        it("Should return false if the password doest not have lower case letters.", () => {
            assert.equal(isPasswordValid(lowerCaseLessPassword), false);
        });
        it("Should return false if the password doest not have upper case letters.", () => {
            assert.equal(isPasswordValid(upperCaseLessPassword), false);
        });
        it("Should return false if the password doest not have numbers.", () => {
            assert.equal(isPasswordValid(numberLessPassword), false);
        });
    });
})