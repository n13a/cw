// Is there a vowel in there?



// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
    let k = []
    for(let i of a){
      if(i == 97){
        k.push('a')
      } else if (i == 101){
        k.push('e')
      } else if(i == 105){
        k.push('i')
      } else if(i == 111){
        k.push('o')
      } else if(i == 117){
        k.push('u')
      } else {
        k.push(i)
      }
    }
    return k
  }
  