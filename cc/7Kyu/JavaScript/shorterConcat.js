// shorter concat [reverse longer]
// https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b



function shorter_reverse_longer(a, b) {
    let shortest = a, longest = b
    if (b.length <= a.length) {
        shortest = b
        longest = a
    }
    return shortest + longest.split('').reverse().join('') + shortest
}