/* Alphabetized
https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript



Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
*/


function alphabetized(s) {
  const array = s.match(/[A-Za-z]/g)
  return array ? array.sort((a, b) => (a.toLowerCase()).localeCompare(b.toLowerCase())).join('') : ''
}
