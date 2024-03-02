// Sum a list but ignore any duplicates
// https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript

// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.



const sumNoDuplicates = n => n.reduce((a, c) => n.indexOf(c) === n.lastIndexOf(c) ? a + c : a, 0)