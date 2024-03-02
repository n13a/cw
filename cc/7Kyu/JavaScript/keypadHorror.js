// Keypad horror
// https://www.codewars.com/kata/5572392fee5b0180480001ae/train/javascript


// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only


const k = {
    9: 3,
    8: 2,
    7: 1,
    1: 7,
    2: 8,
    3: 9
}
function computerToPhone(numbers) {
    let s = ''
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] in k) {
            s += k[numbers[i]]
        } else {
            s += numbers[i]
        }
    }
    return s
}