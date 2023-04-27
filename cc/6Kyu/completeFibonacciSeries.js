// Complete Fibonacci Series
// https://www.codewars.com/kata/5239f06d20eeab9deb00049b/train/javascript


// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

// Example:

// fibonacci(4) // should return  [0,1,1,2]
// fibonacci(-1) // should return []


function fibonacci(n) {
    if (n <= 0) return []
    const ar = [0, 1]
    for (let i = 1; i < n - 1; ++i) {
        const fibo = ar[i - 1] + ar[i]
        ar.push(fibo)
    }
    return ar
}