// Base64 Encoding
// https://www.codewars.com/kata/5270f22f862516c686000161/train/typescript


// Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.
// Example (input -> output):

// 'this is a string!!' -> 'dGhpcyBpcyBhIHN0cmluZyEh'

// You can learn more about Base64 encoding and decoding here.

// Note: This kata uses the non-padding version ("=" is not added to the end).


export const toBase64 = (str: string): string => btoa(str)

export const fromBase64 = (str: string): string => atob(str)