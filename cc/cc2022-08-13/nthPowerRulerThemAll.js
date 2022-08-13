// Nth power rules them all!


// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

// Examples
// {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
// {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30

const modifiedSum = (a, n)=> a.map(x=> Math.pow(x, n)).reduce((a,c)=> a+ +c) - a.reduce((a,c)=> a+ +c)



// Time: 864ms Passed: 4Failed: 0
// Test Results:
// Your "modifiedSum" function
// should work for the examples provided in the Description
// should work for another basic fixed assertion
// should work for some advanced fixed assertions as well
// should work for 100 randomly generated assertions
// Completed in 12ms
// You have passed all of the tests! :)