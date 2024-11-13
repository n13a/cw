/* Zero - plentiful Array
https://www.codewars.com/kata/59e270da7997cba3d3000041/train/javascript

An array is called zero - plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero - plentiful, oherwise 0.
Examples

[0, 0, 0, 0, 0, 1]-- > 1
# 1 group of 5 zeros(>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]-- > 2
# 2 group of 4 zeros(>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]-- > 0 
# 1 group of 4 zeros and 1 group of 1 zero(< 4)
# _every_ sequence of zeros must be at least 4 long, thus the result is 0

[0, 0, 0, 1, 0, 0]-- > 0
# 1 group of 3 zeros(< 4) and 1 group of 2 zeros(< 4)

[1, 2, 3, 4, 5]-- > 0
# no zeros

[]-- > 0
# no zeros */


/**
 @param {Array} arr 
 @returns number
*/
function zeroPlentiful(arr) {
  let sequence = 0, zeros = 0;
  for (let i = 0; i < arr.length; ++i) {
    const num = arr[i];
    if (num === 0) {
      zeros++;
    } else {
      if (zeros < 4 && zeros > 0) {
        return 0;
      }
      if (zeros >= 4) {
        sequence++;
      }
      zeros = 0;
    }
  }
  if (zeros >= 4) {
    sequence++;
  }
  if (zeros < 4 && zeros > 0) {
    return 0;
  }

  return sequence;
}

console.log(zeroPlentiful([0, 0, 0, 0, 0, 1]), 1)
console.log(zeroPlentiful([0, 0, 0, 0, 1, 0, 0, 0, 0]), 2)
console.log(zeroPlentiful([0, 0, 0, 0, 1, 0]), 0)
console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0]), 0)
