// Maximum subarray sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


// * Brute force
var maxSequence = function (arr) {
    if (arr.every(x => x > 0)) return arr.reduce((a, c) => a + c, 0)
    else if (arr.every(x => x < 0)) return 0
    else {
        var sum = 0
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j <= arr.length; j++) {
                const curSum = arr.slice(i, j + 1).reduce((a, c) => a + c, 0)
                if (curSum > sum) {
                    sum = curSum
                }
            }
        }
    }
    return sum
}



// * Kadane's algorithm
function maxSequence(arr) {
    let maxSum = 0
    let currentSum = 0

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum
        }

        if (currentSum < 0) {
            currentSum = 0
        }
    }

    return maxSum
}
// It's beautiful