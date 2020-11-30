import * as assert from 'assert';
import { isNull, isUndefined, isNullOrUndefined, isObject } from '../src/modules/equality';

const variableNull = null;
const variableNotNullNotUndefined = 2;
const variableUndefined = undefined;
const variableObject = {
    "test": 1
} as Object;

describe("Equality Module Tests", () => {
    describe("isNull Tests", () => {
        it("Should return true if the value sent is null.", () => {
            assert.equal(isNull(variableNull), true);
        });
        it("Should return false if the value sent is not null.", () => {
            assert.equal(isNull(variableNotNullNotUndefined), false);
        });
    });
    describe("isUndefined Tests", () => {
        it("Should return true if the value sent is undefined.", () => {
            assert.equal(isUndefined(variableUndefined), true);
        });
        it("Should return false if the value sent is not undefined.", () => {
            assert.equal(isUndefined(variableNotNullNotUndefined), false);
        });
    });
    describe("isNullOrUndefined Tests", () => {
        it("Should return true if the value sent is null or undefined.", () => {
            assert.equal(isNullOrUndefined(variableNull), true);
        });
        it("Should return false if the value sent is neither null nor undefined.", () => {
            assert.equal(isNullOrUndefined(variableNotNullNotUndefined), false);
        });
    });
    describe("isObject Tests", () => {
        it("Should return true if the value sent is an non-null Object.", () => {
            assert.equal(isObject(variableObject), true);
        });
        it("Should return false if the value sent is not an Object.", () => {
            assert.equal(isObject(variableNotNullNotUndefined), false);
        });
    });
});