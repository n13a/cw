// N smallest elements in original order
// https://www.codewars.com/kata/5aec1ed7de4c7f3517000079/solutions/javascript

/* Your task is to write a function that does just what the title suggests 
(so, fair warning, be aware that you are not getting out of it just throwing
a lame bas sorting method there) with a list of integers and the expected
number n of smallest elements to return.

Also:

    the number of elements to be returned cannot be higher than the list length;
    elements can be duplicated;
    in case of duplicates, just return them according to the original order
    (see third example for more clarity).

Same examples and more in the test cases:

Array            	N 	Expected
[1, 2, 3, 4, 5]  	3 	[1, 2, 3]
[5, 4, 3, 2, 1]  	3 	[3, 2, 1]
[1, 2, 3, 4, 1]  	3 	[1, 2, 1]
[1, 2, 3, -4, 0] 	3 	[1, -4, 0]
[1, 2, 3, 4, 5]  	0 	[]
*/

const firstNSmallest = (array, n) => {
  if (n === 0) return []

  const res = []
  const sortedArray = [...array].sort((a, b) => a - b)
  const smallestNums = sortedArray.slice(0, n)

  const countMap = new Map()
  for (const num of smallestNums) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }

  for (const item of array) {
    if (n === res.length) {
      break
    }
    if (countMap.get(item)) {
      res.push(item)
      countMap.set(item, countMap.get(item) - 1)
      countMap[item]--
    }
  }

  return res
}
