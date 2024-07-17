/* Only Duplicates
https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

const onlyDuplicates = str => {
  const m = new Map()
  for (let char of str) {
    m.set(char, (m.get(char) || 0) + 1)
  }
  return str.split('').filter(c => m.get(c) > 1).join('')
}
