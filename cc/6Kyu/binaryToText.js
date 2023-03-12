// Binary to Text 
// https://www.codewars.com/kata/5583d268479559400d000064/train/javascript

// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.



const binaryToString = binary => {
    let str = ''
    for (let i = 0; i < binary.length; i += 8) {
      str += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2))
    }
    return str
}