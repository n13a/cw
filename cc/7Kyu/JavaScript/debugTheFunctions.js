/* Debug the functions
https://www.codewars.com/kata/5844a422cbd2279a0c000281/train/javascript


Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR) */



const multi = arr => arr.reduce((a,c)=> a * c, 1)
const add = arr => arr.reduce((a,c)=> a + c, 0)
const reverse = str => [...str].reverse().join('')
