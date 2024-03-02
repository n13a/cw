// Length and two values

// Given an integer n and two other values, build an array of size n filled with these two values alternating.
// Examples

// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []


const alternate = (n, ...a) => Array.from({ length: n }, (_, i) => a[i % 2]) // I love this line ngl