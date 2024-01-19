// Delete a Digit
// https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript

// Task

// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
// Example

// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.
// Input/Output

//     [input] integer n

//     Constraints: 10 ≤ n ≤ 1000000.

//     [output] an integer


const deleteDigit = n => {
    const arr = n.toString()
    return +arr.toString().split('').reduce((a, c, i) => {
        const x = Number(arr.substr(0, i) + arr.substr(i + 1))
        if (x > a) return x
        return a
    }, arr[0])
}