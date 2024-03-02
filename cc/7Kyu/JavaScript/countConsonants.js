// Count consonants

// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


const consonantCount = str => str.replace(/[aeiou\s\W\d_]/gi, '').length