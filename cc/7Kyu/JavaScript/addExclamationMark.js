/* Exclamation marks series #8: Move all exclamation marks to the end of the sentence
https://www.codewars.com/kata/57fafd0ed80daac48800019f/train/javascript
Description:

Move all exclamation marks to the end of the sentence
Examples

remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
*/


function remove(string) {
  let c = 0
  let arr = string.split('')
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == '!') {
      arr[i] = ''
      c++
    }
  }
  arr.push('!'.repeat(c))
  return arr.join('')
}
