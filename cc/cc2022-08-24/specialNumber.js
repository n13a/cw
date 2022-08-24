// Special Number 


// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

// The number passed will be positive (N > 0) .

// All single-digit numbers within the interval [1:5] are considered as special number.

// Input >> Output Examples
// specialNumber(2) ==> return "Special!!"
// Explanation:
// It's a single-digit number within the interval [1:5] .

// specialNumber(9) ==> return "NOT!!"
// Explanation:
// Although, it's a single-digit number but Outside the interval [1:5] .

// specialNumber(23) ==> return "Special!!"
// Explanation:
// All the number's digits formed from the interval [0:5] digits .

// specialNumber(39) ==> return "NOT!!"
// Explanation:
// Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

// specialNumber(59) ==> return "NOT!!"
// Explanation:
// Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

// specialNumber(513) ==> return "Special!!"
// specialNumber(709) ==> return "NOT!!"


const specialNumber = n => `${n}`.split('')
  .every(x=> x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5) 
  ? 'Special!!' : 'NOT!!'


// Time: 665ms Passed: 50 Failed: 0
// Test Results:
// Basic tests
// Test Passed: Value == 'Special!!'
// Test Passed: Value == 'Special!!'
// Test Passed: Value == 'NOT!!'
// Test Passed: Value == 'NOT!!'
// Test Passed: Value == 'Special!!'
// Test Passed: Value == 'Special!!'
// Test Passed: Value == 'NOT!!'
// Test Passed: Value == 'NOT!!'
// Test Passed: Value == 'Special!!'
// Test Passed: Value == 'NOT!!'
// Completed in 4ms
// Random tests
// Testing for 1261783924
// Testing for 30305442101
// Testing for 338471
// Testing for 1542
// Testing for 1024052455
// Testing for 222640547341649
// Testing for 5922350258772
// Testing for 221050
// Testing for 22134140
// Testing for 2390816301
// Testing for 14501030230
// Testing for 5
// Testing for 13150111
// Testing for 743887584732
// Testing for 312
// Testing for 3443
// Testing for 45120212
// Testing for 23233530
// Testing for 86012334209
// Testing for 72324246761166
// Testing for 967138375666856
// Testing for 54063055521711
// Testing for 20
// Testing for 224
// Testing for 598787905615
// Testing for 54200
// Testing for 5
// Testing for 4
// Testing for 314
// Testing for 658258
// Testing for 741273615
// Testing for 4586084672220
// Testing for 1212
// Testing for 413
// Testing for 253303355444
// Testing for 44103729697
// Testing for 253525
// Testing for 7570324297
// Testing for 2332510542
// Testing for 211151103432
// Completed in 8ms
// You have passed all of the tests! :)