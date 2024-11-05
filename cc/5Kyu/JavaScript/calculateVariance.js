/* Calculate Variance
https://www.codewars.com/kata/5266fba01283974e720000fa/train/javascript
Write a function which will accept a sequence of numbers and calculate the
variance for the sequence.

The variance for a set of numbers is found by subtracting the mean from every value,
squaring the results, adding them all up and dividing by the number of elements.

For example, in pseudo code, to calculate the variance for [1, 2, 2, 3].

mean = (1 + 2 + 2 + 3) / 4
=> 2

variance = ((1 - 2)^2 + (2 - 2)^2 + (2-2)^2 + (3 - 2)^2)  /  4
=> 0.5

The results are tested after being rounded to 4 decimal places using Javascript's toFixed method. */




// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
var variance = function(numbers) {
    const mean = numbers.reduce((a, c) => a + c, 0) / numbers.length

    return numbers.reduce((a, c) => {
        return a + (c - mean) ** 2
    }, 0) / numbers.length
};


var numbers1 = [-10, 0, 10, 20, 30];
var numbers2 = [8, 9, 10, 11, 12];
var numbers3 = [1.5, 2.5, 4, 2, 1, 1];

console.log(variance(numbers2))
console.log(variance(numbers2))
console.log(variance(numbers3))

