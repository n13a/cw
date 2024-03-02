/* Array.prototype.reverse()
https://www.codewars.com/kata/53b2ff49b82af296ce001139/train/javascript


The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array

*/


Array.prototype.reverse = function() {
  const a = this.slice()
  for (let i = this.length - 1; i >= 0; --i) {
    this[this.length - i - 1] = a[i]
  }
  return this
};
