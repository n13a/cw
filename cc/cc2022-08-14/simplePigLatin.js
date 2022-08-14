// Simple Pig Latin


// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = str => str.split(' ').map(x=> x == '!' || x == '?' ? x : x.slice(1) + x[0] + 'ay').join(' ')

// Output 

// Time: 790ms Passed: 1 Failed: 0
// Test Results:
// Tests
// test
// Test Passed
// Completed in 3ms
// Completed in 5ms
// You have passed all of the tests! :)