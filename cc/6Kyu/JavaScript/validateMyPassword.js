// Validate my Password
// https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript


// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.


const validPass = p => p.length > 3 && p.length < 20 &&
    /[a-zA-Z]/.test(p) && /\d/.test(p) && !/\W/.test(p) ? 'VALID' : 'INVALID'