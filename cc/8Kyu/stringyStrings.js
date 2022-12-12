// Stringy Strings

// write a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


const stringy = size => {
    let str = ''
    for (let i = 0, s = true; i < size; i++) {
        if (s) {
            str += '1'
            s = false
            continue
        }
        str += '0'
        s = true
    }
    return str
}