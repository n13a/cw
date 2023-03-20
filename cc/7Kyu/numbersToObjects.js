// Numbers to Objects
// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript


// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.


const numObj = s => s.reduce((a, c) => {
    const object = {}
    object[c.toString()] = String.fromCharCode(c);
    a.push(object)
    return a
}, [])