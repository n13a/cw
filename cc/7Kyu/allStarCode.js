// All Star Code 
// https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"



function toTime(seconds) {
    const hour = seconds / 3600
    const min = parseInt((hour - parseInt(hour)) * 60)
    return `${parseInt(hour)} hour(s) and ${min} minute(s)`
}