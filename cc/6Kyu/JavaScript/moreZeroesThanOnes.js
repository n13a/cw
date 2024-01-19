/* More Zeros than Ones
https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript


Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']

All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/


const moreZeros = s => {
  const res = [...s].filter(char => {
    const bin = char.charCodeAt().toString(2)
    return bin.match(/0/g)?.length > bin.match(/1/g)?.length
  })
  return [... new Set(res)]
}

console.log(moreZeros('DIGEST'),['D','I','E','T'])
