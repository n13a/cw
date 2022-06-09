// Most Digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.



const findLongest = a => a.sort((a,b)=> b.toString().length - a.toString().length)[0]