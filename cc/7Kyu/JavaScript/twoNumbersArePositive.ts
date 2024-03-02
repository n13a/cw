/* Two numbers are positive
https://www.codewars.com/kata/602db3215c22df000e8544f0/train/typescript


Task:

Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.
Examples:

two_are_positive(2, 4, -3) == True
two_are_positive(-4, 6, 8) == True
two_are_positive(4, -6, 9) == True
two_are_positive(-4, 6, 0) == False
two_are_positive(4, 6, 10) == False
two_are_positive(-14, -3, -4) == False
*/

export function twoArePositive(a: number, b: number, c: number): boolean {
  let pos = 0
  for(let n of arguments){
    pos = +n > 0 ? pos + 1 : pos
  }
  return pos == 2
}
