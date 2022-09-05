// SevenAte9


// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"


const sevenAte9 = str=> [...str].filter((x, i, a)=> x=='9' && 
  a[i-1] == '7' && a[i+1] == '7' ? false : true).join('')