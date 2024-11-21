/* Rotate an array matrix
https://www.codewars.com/kata/525a566985a9a47bc8000670/train/javascript

Write a function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.

The function accepts two parameters: a matrix, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".
Examples

For matrix:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Clockwise rotation:

[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]

Counter-clockwise rotation:

[
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7]
] */

/* const length = matrix.length
    const newMatrix = Array.from({ length: Math.max(matrix[0].length, matrix.length) }, () => new Array(length).fill(0)); */

function rotate(matrix, direction) {
    const row = matrix.length
    const column = matrix[0].length
    const newMatrix = Array.from({ length: column }, () => [])

    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < column; ++j) {
            if (direction === 'clockwise') {
                newMatrix[j][row - 1 - i] = matrix[i][j]
            } else {
                newMatrix[column - 1 - j][i] = matrix[i][j]
            }
        }
    }
    return newMatrix
}


const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]
console.log(rotate(matrix1, "clockwise"))
console.log(rotate(matrix2, "counter-clockwise"),)
