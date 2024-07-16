/* A Letter's Best Friend
https://www.codewars.com/kata/64fc03a318692c1333ebc04c/train/javascript

Task

Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.
Worked Example

("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False

# For first "e" we can get "ee"
# For second "e" we cannot have "ee"
# Return False

Examples

("i found an ounce with my hound", "o", "u") ➞ True

("we found your dynamite", "d", "y") ➞ False

Notes

    All sentences will be given in lowercase.

*/


function bestFriend(txt, a, b) {
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === a && txt[i + 1] !== b) {
      return false
    }
  }
  return true
}
