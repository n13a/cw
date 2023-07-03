// Largest product in a series
// https://www.codewars.com/kata/529872bdd0f550a06b00026e/train/javascript


// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240

// The input string always has more than five digits.

// Adapted from Project Euler.


function greatestProduct(input) {
  const ar = input.split('')
  let res = ar.slice(0, 5).reduce((a, c) => a * +c, 1)
  for (let i = 0; i < input.length - 4; ++i) {
    const cur5 = ar.slice(i, i + 5).reduce((a, c) => a * +c, 1)
    if (cur5 > res) {
      res = cur5
    }
  }
  return res
}