// Palindrome for your Dome
// https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript

// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

// Our goal is to determine whether or not a given string is a valid palindrome or not.

// Like the above examples, here are a few test cases which are also populated:

// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid

// You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

// Notes:

// The empty string "" can be read forward or backward the same, it's a palindrome in our case.



function palindrome(string) {
    if (string == '') return true
    const alphanum = string.toLowerCase().match(/[^\W_]/g)
    if (!alphanum) return false
    return alphanum.join('').split('').reverse().join('') == alphanum.join('')
}