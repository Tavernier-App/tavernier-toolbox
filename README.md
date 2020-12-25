# Tavernier-toolbox
![badge1](https://img.shields.io/badge/language-TypeScript-blue) ![badge2](https://img.shields.io/badge/license-ISC-brightgreen)

> A collection of useful TypeScript utilities used on Tavernier-App. Tested with Jest.

| Statements | Branches | Functions | Lines |
| -----------|----------|-----------|-------|
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg "Make me better!") | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg "Make me better!") | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg "Make me better!") | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg "Make me better!") |

## Changelog

-   1.2.0

    -   Adding Account Module & Updating Jest Coverage

-   1.1.1

    -   Configuring Github Package

-   1.1.0

    -   Adding Jest Coverage

-   1.0.0

    -   Adding Check Module & Equality Module

## Functions

<dl>
<dt><a href="#generateRandomPassword">generateRandomPassword()</a> ⇒</dt>
<dd><p>Returns a generated password with lowcase letters, uppercase letters and numbers with a lenght of 10 characters.</p>
</dd>
<dt><a href="#generateRandomFourDigitNumber">generateRandomFourDigitNumber()</a> ⇒</dt>
<dd><p>Returns a random four digit number.</p>
</dd>
<dt><a href="#generateIdentifier">generateIdentifier(firstName, lastName)</a> ⇒</dt>
<dd><p>Return an identifier from user first name and last name with a generated random four digit number (e.g. Dupont_J4242 from Dupont Jean).</p>
</dd>
<dt><a href="#isEmail">isEmail(email)</a> ⇒</dt>
<dd><p>Returns true if the email passed as parameter has a correct email format.</p>
</dd>
<dt><a href="#isPasswordValid">isPasswordValid(password)</a> ⇒</dt>
<dd><p>Returns true if the given password as parameter respect passwords rules.</p>
</dd>
<dt><a href="#isNull">isNull(value)</a> ⇒</dt>
<dd><p>Returns true if the value sent is null.</p>
</dd>
<dt><a href="#isUndefined">isUndefined(value)</a> ⇒</dt>
<dd><p>Returns true if the value is undefined.</p>
</dd>
<dt><a href="#isNullOrUndefined">isNullOrUndefined(value)</a> ⇒</dt>
<dd><p>Returns true if the value is null or undefined.</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒</dt>
<dd><p>Returns true if the value is an non-null object.</p>
</dd>
</dl>

<a name="generateRandomPassword"></a>

## generateRandomPassword() ⇒
Returns a generated password with lowcase letters, uppercase letters and numbers with a lenght of 10 characters.

**Kind**: global function  
**Returns**: string  
<a name="generateRandomFourDigitNumber"></a>

## generateRandomFourDigitNumber() ⇒
Returns a random four digit number.

**Kind**: global function  
**Returns**: string  
<a name="generateIdentifier"></a>

## generateIdentifier(firstName, lastName) ⇒
Return an identifier from user first name and last name with a generated random four digit number (e.g. Dupont_J4242 from Dupont Jean).

**Kind**: global function  
**Returns**: string  

| Param | Description |
| --- | --- |
| firstName | user first name as a string |
| lastName | user last name as a string |

<a name="isEmail"></a>

## isEmail(email) ⇒
Returns true if the email passed as parameter has a correct email format.

**Kind**: global function  
**Returns**: boolean  

| Param | Description |
| --- | --- |
| email | string to be checked |

<a name="isPasswordValid"></a>

## isPasswordValid(password) ⇒
Returns true if the given password as parameter respect passwords rules.

**Kind**: global function  
**Returns**: boolean  

| Param | Description |
| --- | --- |
| password | string to be checked |

<a name="isNull"></a>

## isNull(value) ⇒
Returns true if the value sent is null.

**Kind**: global function  
**Returns**: boolean  

| Param | Description |
| --- | --- |
| value | value of any type to be checked |

<a name="isUndefined"></a>

## isUndefined(value) ⇒
Returns true if the value is undefined.

**Kind**: global function  
**Returns**: boolean  

| Param | Description |
| --- | --- |
| value | value of any type to be checked |

<a name="isNullOrUndefined"></a>

## isNullOrUndefined(value) ⇒
Returns true if the value is null or undefined.

**Kind**: global function  
**Returns**: boolean  

| Param | Description |
| --- | --- |
| value | value of any type to be checked |

<a name="isObject"></a>

## isObject(value) ⇒
Returns true if the value is an non-null object.

**Kind**: global function  
**Returns**: boolean  

| Param | Description |
| --- | --- |
| value | value of any type to be checked |

