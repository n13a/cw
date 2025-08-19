// Converting integer to currency format
// https://www.codewars.com/kata/54e9554c92ad5650fe00022b/train/javascript

// Write a function that takes an integer in input and outputs a string with currency format.

// Integer in currency format is expressed by a string of number where every three characters are separated by comma.

// For example:

// 123456 --> "123,456"

// Input will always be an positive integer, so don't worry about type checking or negative/float values.


const toCurrency = price => {
    const ar = [...price.toString()]
    for (let i = ar.length - 3; i > 0; i -= 3) {
        ar.splice(i, 0, ',')
    }
    return ar.join('')
}
