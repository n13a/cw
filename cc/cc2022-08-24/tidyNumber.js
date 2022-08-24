// Tidy Number


// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// Notes
// Number passed is always Positive .

// Return the result as a Boolean

// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

// tidyNumber (32) ==> return (false)
// Explanation:
// The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

// tidyNumber (1024) ==> return (false)
// Explanation:
// The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

// tidyNumber (13579) ==> return (true)
// Explanation:
// The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

// tidyNumber (2335) ==> return (true)
// Explanation:
// The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3


const tidyNumber = n => `${n}`.split('').sort((a,b)=> a-b).join('') == n



// Time: 807ms Passed: 45 Failed: 0
// Test Results:
// Basic tests
// Test Passed: Value == true
// Test Passed: Value == false
// Test Passed: Value == false
// Test Passed: Value == true
// Test Passed: Value == true
// Completed in 6ms
// Random tests
// Testing for 3
// Testing for 357
// Testing for 16777
// Testing for 251
// Testing for 13
// Testing for 6689
// Testing for 28
// Testing for 35
// Testing for 9
// Testing for 9
// Testing for 184252458
// Testing for 2778
// Testing for 511221635
// Testing for 849026
// Testing for 7
// Testing for 9
// Testing for 4445579
// Testing for 4900
// Testing for 456845917
// Testing for 76656415
// Testing for 37778
// Testing for 3
// Testing for 7
// Testing for 1
// Testing for 11269
// Testing for 99
// Testing for 196492620
// Testing for 6
// Testing for 66257335
// Testing for 213488179
// Testing for 113378
// Testing for 29634521
// Testing for 46789
// Testing for 9626450
// Testing for 1394
// Testing for 1125
// Testing for 13
// Testing for 29
// Testing for 11123359
// Testing for 7563454
// Completed in 15ms
// You have passed all of the tests! :)