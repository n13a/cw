// Array comparator
// https://www.codewars.com/kata/561046a9f629a8aac000001d/train/javascript


// You have two arrays in this kata, every array contains unique elements only.Your task is to calculate number of elements in the first array which are also present in the second array.


const matchArrays = (v, r) => r.filter(x => v.includes(x)).length