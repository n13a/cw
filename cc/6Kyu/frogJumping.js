/* Frog jumping
https://www.codewars.com/kata/536950ffc8a5ca9982001371/train/javascript


Help the frog to find a way to freedom

You have an array of integers and have a frog at the first position

[Frog, int, int, int, ..., int]

The integer itself may tell you the length and the direction of the jump

For instance:
 2 = jump two indices to the right
-3 = jump three indices to the left
 0 = stay at the same position

Your objective is to find how many jumps are needed to jump out of the array.

Return -1 if Frog can't jump out of the array

Example:
array = [1, 2, 1, 5]; 
jumps = 3  (1 -> 2 -> 5 -> <jump out>)

All tests for this Kata are randomly generated.
*/


function solution(a) {
  const length = a.length
  for (let i = 0, jumps = 0, j = 0; j < a.length; j++) {
    jumps++
    i += a[i]
    if (i >= length) {
      return jumps
    } else if (i < 0) {
      return jumps
    }
  }
  return -1
}
