import * as assert from 'assert';
import { checkEmailFormat } from "../src/modules/check";

const emailAddressWellFormatted = "dev@tavernier.com";
const emailAddressNotWellFormatted = "devtavenier.com"

describe("Check Module Tests", () => {
    describe("checkEmailFormat Tests", () => {
        it("Should return true if the email is correctly formated.", () => {
            assert.equal(checkEmailFormat(emailAddressWellFormatted), true);
        });
        it("Should return false if the email is not correctly formated.", () => {
            assert.equal(checkEmailFormat(emailAddressNotWellFormatted), false);
        });
    });
})