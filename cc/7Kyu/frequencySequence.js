// Frequency sequence

// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"


const freqSeq = (str, sep) => {
    const ar = [...str]
    const obj = ar.reduce((a, c) => {
        if (!a[c]) a[c] = 0
        a[c]++
        return a
    }, {})
    return ar.map(x => obj[x]).join(sep)
}