// Sum even numbers


// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0


const sumEvenNumbers = input => input.filter(x=> x%2 == 0).reduce((a,c)=> a+ +c)

// Output 


// Time: 652ms Passed: 54 Failed: 0
// Test Results:
// Solution
// Check if the function make the sum of the even numbers
//  (4 of 4 Assertions)
// Random tests
//  (50 of 50 Assertions)
// Completed in 24ms
// You have passed all of the tests! :)