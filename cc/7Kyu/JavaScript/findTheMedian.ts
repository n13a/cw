// Find the median
// https://www.codewars.com/kata/5864eb8039c5ab9cd400005c/train/typescript

// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

// Write a function that takes an array of integers as an argument and returns the median of those integers.

// Notes:

//     The sorting step is vital.
//     Input arrays are non-empty.

// Examples

// Median of [33,99,100,30,29,50] is 41.5.
// Median of [3,2,1] is 2.

export function median(n: number[]): number {
    n.sort((a, b) => a - b);
    const len = n.length;
    if (n.length % 2 === 0) {
        const med = (n[len / 2 - 1] + n[len / 2]) / 2;
        return med;
    } else {
        return n[Math.floor(len / 2)];
    }
}
