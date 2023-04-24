// Exclamation marks series 
https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript

// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples

// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"



const remove = string => string.split(' ').filter(word => {
    const ex = word.match(/!/g)
    return !(ex && ex.length == 1)
}).join(' ') || ''