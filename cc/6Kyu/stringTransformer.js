// String transformer

// Given a string, return a new string that has transformed based on the input:

//     Change case of every character, ie. lower case to upper case, upper case to lower case.
//     Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

// You may assume the input only contain English alphabet and spaces.


const stringTransformer = str => [...str].reduce((a, c) => {
    if (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) a.push(c.toLowerCase())
    else a.push(c.toUpperCase())
    return a
}, []).join('').split(' ').reverse().join(' ')