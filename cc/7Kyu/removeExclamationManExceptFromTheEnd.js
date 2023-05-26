/* Remove all exclamation marks from sentence except at the end
https://www.codewars.com/kata/57faefc42b531482d5000123/train/javascript



 Remove all exclamation marks from sentence except at the end.
  Examples

remove("Hi!") == "Hi!"
remove("Hi!!!") == "Hi!!!"
remove("!Hi") == "Hi"
remove("!Hi!") == "Hi!"
remove("Hi! Hi!") == "Hi Hi!"
remove("Hi") == "Hi"
*/

const remove = (string) => {
  const ar = string.split('')
  let c = false
  for (let i = ar.length - 1; i >= 0; --i) {
    if (ar[i] != '!') c = true
    if (c && ar[i] == '!') ar[i] = ''
  }
  return ar.join('')
}
