// Exes And Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = str=> {
    const a = str.toLowerCase().split('').reduce((o, i)=> {
      if(!o[i]) o[i] = 0
      o[i]++
      return o}, {})
    return a.x == a.o
  }