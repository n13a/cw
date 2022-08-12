// Narcissitic Numbers

// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

const isNarcissistic = n=> n == `${n}`.split('').map(x=> Math.pow(x, `${n}`.length)).reduce((a,c)=> a+ +c)

// Time: 849ms Passed: 2 Failed: 0
// Test Results:
// Narcissistic Numbers
// example tests
// random tests
// Completed in 5ms
// You have passed all of the tests! :)