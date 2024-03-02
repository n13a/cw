// Fibonacci number
// https://www.codewars.com/kata/569512b7707bc1b88200002f/train/javascript

// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

// f(n) = f(n-1) + f(n-2)

// with seed values

// f(1) = 1 and f(2) = 1

// #Your task

// You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.



const fibonacci = n => n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)