// Encrypt This!

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


const encryptThis = text => text.split(' ').map(x=> x.length == 1 ?
    x.charCodeAt() : x.length == 2 ? 
   `${x.charCodeAt(0)}${x.slice(1)}` : 
   `${x.charCodeAt(0)}${x[x.length - 1]}${x.slice(2, x.length - 1)}${x[1]}`)
   .join(' ')