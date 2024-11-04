/* Count Repeats

Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2 */


function countRepeats(str) {
  let res = 0

  for (let i = 0; i < str.length - 1; ++i) {
    if (str[i] === str[i + 1]) {
      res++
    }
  }

  console.log(`str length: ${str.length}`)

  console.log(res)
}


console.log(countRepeats('AABCCD'), 2);
console.log(countRepeats('AABCCDA'), 2)
console.log(countRepeats('AaBBCCC'), 3);
