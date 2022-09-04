// Remove consecutive duplicate words


// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


const removeConsecutiveDuplicates = s =>  s.split(' ')
  .filter((x, i)=> x == s.split(' ')[i+1] ? false : true).join(' ')