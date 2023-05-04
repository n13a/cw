// Complete The Pattern
// https://www.codewars.com/kata/55736129f78b30311300010f/train/javascript


// You have to write a function pattern which creates the following pattern upto n number of rows. If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
// Examples:

// pattern(4):

// 1234
// 234
// 34
// 4

// pattern(6):

// 123456
// 23456
// 3456
// 456
// 56
// 6

// Note: There are no blank spaces

// Hint: Use \n in string to jump to next line


function pattern(n) {
    if (n <= 0) return ''
    let str = Array.from([... new Array(n).keys()], x => x + 1)
    let res = []

    for (let i = 0; i < str.length; ++i) {
        res.push(str.slice(i).join(''))
    }
    return res.join('\n')
}