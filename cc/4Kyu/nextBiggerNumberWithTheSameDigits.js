// Next bigger number with the same digits
// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071

// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1


const nextBigger = n => {
  const l = [...n.toString()]
  let pivot = -1

  for (var i = l.length - 1; i > 0; i--) {
    if (+l[i] > +l[i - 1]) {
      pivot = i - 1
      break
    }
  }
  if (pivot == -1) return pivot

  const right = l.splice(pivot), pivotNum = right.shift()

  let nextBiggestNum, nBNIndex

  for (let i = 0; i < right.length; i++) {
    if (pivotNum < right[i]) {
      nextBiggestNum = right[i]
      nBNIndex = i
    }
  }

  l.push(nextBiggestNum)
  right[nBNIndex] = pivotNum
  return +(l.join('') + right.sort().join(''))
}
