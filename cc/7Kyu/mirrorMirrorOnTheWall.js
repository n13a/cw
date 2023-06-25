// Mirror, mirror, on the wall
// https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript



// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.
// Examples

// []  -->  []
// [1]  -->  [1]
// [2, 1]  -->  [1, 2, 1]
// [1, 3, 2]  -->  [1, 2, 3, 2, 1]
// [-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
// [-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]
// [-5, 10, 8, 10, 2, -3, 10] --> [-5, -3, 2, 8, 10, 10, 10, 10, 10, 8, 2, -3, -5]

// Good luck!

function mirror(data) {
  const a = data.slice().sort((a, b) => a - b)
  a.pop()
  const d = data.slice().sort((a, b) => b - a)
  return a.concat(d)
}