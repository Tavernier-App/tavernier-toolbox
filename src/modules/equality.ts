/**
 * Returns true if the value sent is null.
 * @param value value of any type to be checked
 * @returns boolean
 */
export const isNull = (value: any): boolean => value === null;

/**
 * Returns true if the value is undefined.
 * @param value value of any type to be checked
 * @returns boolean
 */
export const isUndefined = (value: any): boolean => value === undefined;

/**
 * Returns true if the value is null or undefined.
 * @param value value of any type to be checked
 * @returns boolean
 */
export const isNullOrUndefined = (value: any): boolean => value === null || value === undefined;

/**
 * Returns true if the value is an non-null object.
 * @param value value of any type to be checked
 * @returns boolean
 */
export const isObject = (value: any): boolean => typeof value === 'object' && value !== null;
