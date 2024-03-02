// Maximum Triplet Sum 


// Task

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// Notes :

//     Array/list size is at least 3 .

//     Array/list numbers could be a mixture of positives , negatives and zeros .

//     Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
//     Input >> Output Examples

// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)

maxTriSum = numbers => [...new Set(numbers)].sort((a, b) => b - a).slice(0, 3).reduce((a, c) => a + +c)
