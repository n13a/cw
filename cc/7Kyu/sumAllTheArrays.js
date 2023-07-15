// Sum ALL the arrays
// https://www.codewars.com/kata/5594463eaf1701909c0000d4/train/javascript



// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.


const arraySum = arr => {
  let sum = 0
  arr.forEach(x => {
    if (Array.isArray(x)) {
      sum += arraySum(x)
    } else if (typeof x === 'number') {
      sum += x
    }
  })
  return sum
}