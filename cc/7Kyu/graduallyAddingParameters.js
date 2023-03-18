// Gradually Adding Parameters
// https://www.codewars.com/kata/555b73a81a6285b6ce000047/train/javascript

// Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

//   add(3,4,5); 
//   
//   returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26

// Remember the function will return 0 if no arguments are passed.
// Example

//   add(); //=> 0
//   add(1,2,3); //=> 14
//   add(1,4,-5,5); //=> 14



const add = (...args) => args.reduce((a, c, i) => a + (c * (i + 1)), 0)