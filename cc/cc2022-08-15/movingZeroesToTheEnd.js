// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = arr => arr.filter(x=> x!==0).concat(arr.filter(x=> x===0))


// Time: 749ms Passed: 2 Failed: 0
// Test Results:
// Tests
// Fixed tests
// Random tests
// Completed in 9ms
// You have passed all of the tests! :)