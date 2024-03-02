/* Is every value in the array an array?
https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript


This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/
const arrCheck = value => value.every(x => Array.isArray(x))
