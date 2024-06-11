/* Working with arrays I (and why your code fails in some katas)
https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e/train/javascript

In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.

*/

const withoutLast = arr => {
  const copy = [...arr]
  copy.pop()
  return copy
}
