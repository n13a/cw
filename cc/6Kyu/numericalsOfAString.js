// Numericals of a String
// https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/train/javascripthttps://www.codewars.com/kata/5b4070144d7d8bbfe7000001/train/javascript


// You are given an input string.

// For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

// There might be some non-ascii characters in the string.

// Take note of performance


function numericals(s) {
    let obj = {}
    return s.split('').reduce((a, c) => {
        if (!obj[c]) {
            obj[c] = 0
        }
        obj[c]++
        a += obj[c]
        return a
    }, '')
}