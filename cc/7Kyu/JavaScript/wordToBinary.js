/* Word to binary
https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript

Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]
*/


const wordToBin = str => [...str].map(x => x.charCodeAt().toString(2).padStart(8, '0'))
