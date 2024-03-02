// draw me a chessboard
// https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript


// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

// Making a digital chessboard I think is an interesting way of visualising how loops can work together.

// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

// So chessBoard(6,4) should return an array like this:

// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]

// And chessBoard(3,7) should return this:

// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]

// The white spaces should be represented by an: 'O'

// and the black an: 'X'

// The first row should always start with a white space 'O'


function chessBoard(rows, columns) {
  const res = []
  for (let i = 0; i < rows; i++) {
    const c = []
    let f = true
    for (let j = 0; j < columns; j++) {
      c.push((i + j) % 2 === 0 ? 'O' : 'X')
    }
    res.push(c)
  }
  return res
}