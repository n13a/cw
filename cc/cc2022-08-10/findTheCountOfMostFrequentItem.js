// Find Count of Most Frequent Item in an Array

// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.


function mostFrequentItemCount(collection) {
    return collection.length > 0 ? Math.max(...Object.values(collection.reduce((o,i)=> {
      if(!o[i]) o[i] = 0
      o[i]++
      return o
    }, {}))) : 0
}

// Time: 828ms Passed: 2 Failed: 0
// Test Results:
// mostFrequentItemCount
// works for some examples
// works for random arrays
// Completed in 8ms
// You have passed all of the tests! :)

