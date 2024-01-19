/* Turn String Input into Hash
https://www.codewars.com/kata/52180ce6f626d55cf8000071/train/javascript


Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"

This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/


function strToHash(str) {
  if (!str) return {}
  const w = str.match(/[A-Za-z]+/g)
  const n = str.match(/\d+/g)
  let object = {}
  for (let i = 0; i < w.length; ++i) {
    object[w[i]] = +n[i]
  }
  return object
}
