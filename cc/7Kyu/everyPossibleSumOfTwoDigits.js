// Every possible sum of two digits
// https://www.codewars.com/kata/5b4e474305f04bea11000148/

// Given a long number, return all the possible sum of two digits of it.

// For example, 12345: all possible sum of two digits from that number are:

// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]

// Therefore the result must be:

// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]


function digits(num) {
  const ar = []
  const n = num.toString()
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      ar.push(+n[i] + +n[j])
    }
  }
  return ar
}