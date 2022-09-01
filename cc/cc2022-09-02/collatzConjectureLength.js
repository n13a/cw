// Collatz Conjecture Length

// The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.

// For example, if n = 20, the resulting sequence will be:

// [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the length of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.

const collatz = n => {
    const arr = [n]
    while(n != 1){
      if(n % 2 == 0){
        arr.push(n / 2)
        n = n / 2
      } else {
        arr.push(n * 3 + 1)
        n = n * 3 + 1
      }
    }
    return arr.length  
  }