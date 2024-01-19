// Backwards Read Primes

// Task

// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.
// Examples (in general form):

// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

// See "Sample Tests" for your language.
// Notes

//     Forth Return only the first backwards-read prime between start and end or 0 if you don't find any
//     Ruby Don't use Ruby Prime class, it's disabled.


const range = (start, stop) => {
    const arr = [];
    for (let i = start; i <= stop; i++) {
        arr.push(i);
    }
    return arr;
}
const prime = x => {
    if (x === 2) return true;
    if (x < 2 || x % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(x); i += 2) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

const backwardsPrime = (start, stop) => range(start, stop).reduce((a, c) => {
    if (prime(c)) {
        const rev = c.toString().split('').reverse().join('')
        if (prime(rev) && rev != c) a.push(c)
    }
    return a
}, [])
