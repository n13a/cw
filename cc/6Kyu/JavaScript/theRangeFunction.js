/* The range() function
https://www.codewars.com/kata/5298961d9ce954d77b0003a6/train/javascript

Let's implement the range function:

range([start], stop, [step])

range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

range(1, 4, 0); // /!\ note that the step is 0
=> [1, 1, 1]

range(0);
=> []

range(10, 0); // /!\ note that the end is before the start
=> []

range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]

start, if omitted, defaults to 0; step defaults to 1.

Returns a list of integers from start to stop, incremented by step, exclusive.

Note that ranges that stop before they start are considered to be zero-length instead of negative. */

function range(start, stop, step = 1) {
  if (step === 0) {
    return Array.from(new Array(stop - start), () => start)
  }

  const res = new Array()
  if (arguments.length === 1) {
    stop = start
    start = 0
  }

  for (let i = start; i < stop; i += step) {
    res.push(i)
  }

  return res
}


console.log(range(0, 30, 5))
console.log(range(10))
console.log(range(10, 0))
console.log(range(0))
console.log(range(1, 11))
console.log(range(1, 4, 0))
