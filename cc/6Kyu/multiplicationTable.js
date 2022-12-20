// Multiplication table

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


const multiplicationTable = size => {
    let res = []
    for (let i = 0, mul = 1; i < size; i++, mul++) {
        let array = []
        for (let j = 1; j <= size; j++) {
            array.push(j * mul)
        }
        res.push(array)
    }
    return res
}