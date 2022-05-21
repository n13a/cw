// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.


const divCon = x=>{ 
    return x.filter(x=> typeof (x) == 'number').reduce((a,c)=> a + c,0) - x.filter(x=> Number(typeof (x) == 'string')).reduce((a,c)=> a + +c,0)
  }