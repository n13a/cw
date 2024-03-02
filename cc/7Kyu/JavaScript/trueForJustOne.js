// True for Just One
// https://www.codewars.com/kata/54599705cbae2aa60b0011a4/train/javascript

// Task

// Create a function called one that accepts two params:

//     a sequence
//     a function

// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
// Example

// one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
// one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
// one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false


function one(arr, fun) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) count++
        if (count > 1) break
    }
    return count == 1
}