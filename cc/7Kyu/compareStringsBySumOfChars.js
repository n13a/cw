// Compare Strings by Sum of chars


// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.
// Examples:

// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

const func = ar => [...ar].map(x => x.charCodeAt()).reduce((a, c) => a + c, 0)
const compare = (s1, s2) => {
    s1 = (s1 || "").toUpperCase()
    s2 = (s2 || "").toUpperCase()
    const s1Value = !/^[A-Z]+$/.test(s1) ? 0 : func(s1),
        s2Value = !/^[A-Z]+$/.test(s2) ? 0 : func(s2)
    return s1Value === s2Value
}