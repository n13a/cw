// Numbers to Letters

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.


const a = [...' ?!abcdefghijklmnopqrstuvwxyz'].reverse().join('')
const switcher = x => x.map(x => a[x - 1]).join('')