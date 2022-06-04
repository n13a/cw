// Find the capitals


// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );



const capitals = w => {
    return w.split('').map((x,i)=> {
      if(x.charCodeAt() >= 65 && x.charCodeAt() <= 90){
      return i
    }}).filter(x=> x!=undefined )
  }