// Duplicate Arguments
// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascripthttps://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript


// Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

// The array values passed in will only be strings or numbers. The only valid return values are true and false.

// Examples:

// solution(1, 2, 3)             -->  false
// solution(1, 2, 3, 2)          -->  true
// solution('1', '2', '3', '2')  -->  true


const solution = (...args) => args.some(x => args.indexOf(x) !== args.lastIndexOf(x))