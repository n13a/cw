// Hells Kitchen
// https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.


const gordon = a => a.toUpperCase().split(' ').map(x => x.replaceAll('A', '@')
    .replace(/[E|I|O|U]/g, '*') + '!!!!'
).join(' ')