// Unscrambled eggs
https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/javascript

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.
// Example

// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"



const unscrambleEggs = word => word.replace(/egg/g, '')