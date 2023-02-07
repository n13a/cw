// The reject() function


// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]


const reject = (array, predicate) => array.filter(x => !predicate(x))