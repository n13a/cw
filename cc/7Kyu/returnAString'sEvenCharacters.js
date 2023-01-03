// Return a string's even characters

// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"


const evenChars = str => str.length > 100 || str.length < 2 ?
    'invalid string' :
    [...str].filter((x, i) => (i + 1) % 2 == 0)