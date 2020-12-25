/**
 * Returns true if the email passed as parameter has a correct email format.
 * @param email string to be checked
 * @returns boolean
 */
export const isEmail = (email: string): boolean => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};

/**
 * Returns true if the given password as parameter respect passwords rules.
 * @param password string to be checked
 * @returns boolean
 */
export const isPasswordValid = (password: string): boolean => {
    if (password.length < 6)
        return false;
    const regexNumber = /[0-9]/;
    if(!regexNumber.test(String(password)))
        return false
    const regexLowercase = /[a-z]/;
    if(!regexLowercase.test(String(password)))
        return false
    const regexUppercase = /[A-Z]/;
    if(!regexUppercase.test(String(password)))
        return false
    return true
}