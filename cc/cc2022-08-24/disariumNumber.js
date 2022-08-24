// Disarium Number


// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .


const disariumNumber = n=> `${n}`.split('')
  .map((x, i)=> Math.pow(x, i+1))
  .reduce((a,c)=> a + +c) == n ? 'Disarium !!' : 'Not !!'



// Time: 577ms Passed: 45 Failed: 0
// Test Results:
// Basic tests
// Test Passed: Value == 'Disarium !!'
// Test Passed: Value == 'Not !!'
// Test Passed: Value == 'Not !!'
// Test Passed: Value == 'Disarium !!'
// Test Passed: Value == 'Not !!'
// Completed in 3ms
// Random tests
// Testing for 46
// Testing for 2435
// Testing for 60
// Testing for 2
// Testing for 6
// Testing for 7318
// Testing for 0
// Testing for 775
// Testing for 692
// Testing for 534
// Testing for 8885
// Testing for 6
// Testing for 2646798
// Testing for 10
// Testing for 74834
// Testing for 321398
// Testing for 453
// Testing for 888869
// Testing for 20
// Testing for 572581
// Testing for 2427
// Testing for 15691
// Testing for 518
// Testing for 17
// Testing for 8
// Testing for 2
// Testing for 8205
// Testing for 732
// Testing for 5581
// Testing for 1676
// Testing for 598
// Testing for 38880
// Testing for 89
// Testing for 6
// Testing for 1
// Testing for 798193
// Testing for 25
// Testing for 175
// Testing for 4753
// Testing for 523
// Completed in 6ms
// You have passed all of the tests! :)