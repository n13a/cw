// String incrementer

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

const incrementString = s => {
    if(s.match(/\d/g) == null){ return s + 1 } 
    const n = s.match(/\d/g).join('')
    return s.replace(n, '') + String(Number(n) + 1).padStart(n.length, 0)
}


// Time: 921ms Passed: 1Failed: 0
// Test Results:
// Tests
// test
// Completed in 5ms
// You have passed all of the tests! :)