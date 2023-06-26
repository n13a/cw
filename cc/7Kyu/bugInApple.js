// Bug in Apple
// https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript

//  Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]



function sc(apple) {
  for (let i = 0; i < apple.length; ++i) {
    if (apple[i].includes('B')) {
      return [i, apple[i].indexOf('B')]
    }
  }
}