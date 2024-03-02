// Changing letters

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

const swap = string => [...string].map(x => 'aeiou'.includes(x) ? x.toUpperCase() : x).join('')