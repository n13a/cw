// Powers of i

// i is the imaginary unit, it is defined by i²=−1i² = -1i²=−1, therefore it is a solution to x²+1=0x² + 1 = 0x²+1=0.
// Your Task

// Complete the function pofi that returns i to the power of a given non-negative integer in its simplest form, as a string (answer may contain i).


const pofi = n => n === 0 ? '1' :
    n % 4 === 1 ? "i" :
        n % 4 === 2 ? "-1" :
            n % 4 === 3 ? "-i" :
                "1"
