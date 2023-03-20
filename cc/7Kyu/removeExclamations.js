// Remove all exclamation marks from the end of words
// https://www.codewars.com/kata/57faf32df815ebd49e000117/train/javascript


// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"


const remove = string => string.split(' ').reduce((a, c) => {
    while (c.endsWith('!')) {
        c = c.slice(0, -1)
    }
    a.push(c)
    return a
}, []).join(' ')