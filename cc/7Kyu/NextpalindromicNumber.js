// Next Palindromic Number
// https://www.codewars.com/kata/56a6ce697c05fb4667000029/train/javascript


// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552

// You will be receiving values higher than 10, all valid.


const palindrome = x => x.toString().split('').reverse().join('') == x
function nextPal(val) {
    let num = 1
    while (true) {
        if (palindrome(val + num)) {
            return val + num
        }
        num++
    }
}