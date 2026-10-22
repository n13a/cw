/* Numbers of Letters of Numbers
https://www.codewars.com/kata/599febdc3f64cd21d8000117/solutions/javascript?filter=all&sort=newest&invalids=false

If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
Examples

numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
numbersOfLetters(1) --> ["one", "three", "five", "four"]
 */
const DIGITS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
]

function spellOut(integer) {
    return String(integer).split("")
        .map(x => DIGITS[x]).join("")
}

function numbersOfLetters(integer) {
    let word = spellOut(integer)
    let res = []

    do {
        word = spellOut(integer)
        res.push(word)
        integer = word.length
    } while (word !== "four") {
        return res
    }
}
