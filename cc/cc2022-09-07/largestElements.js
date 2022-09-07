// Largest Elements

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

const largest = (n,xs)=> xs.sort((a,b)=> b-a).slice(0, n).sort((a,b)=> a-b)