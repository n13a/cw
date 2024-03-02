/* The First Non Repeated Character In A String
https://www.codewars.com/kata/570f6436b29c708a32000826/train/javascript

You need to write a function, that returns the first non - repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

You can assume, that the input string has always non - zero length.
  Examples

"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t"(all the characters are unique)
"aabbcc" returns null(all the characters are repeated) */


const firstNonRepeated = s =>
  [...s].find(char=> s.indexOf(char) === s.lastIndexOf(char)) || null
