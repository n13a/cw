// Battle of the characters 
https://www.codewars.com/kata/595519279be6c575b5000016/train/javascript

// Description:

// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
// Rules:

//     Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
//     Strings will consist of uppercase letters only
//     Only two groups to a fight.
//     Group whose total power (A + B + C + ...) is bigger wins.
//     If the powers are equal, it's a tie.

// Examples:

//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"


const r = arr => [...arr].reduce((a, c) => a + c.charCodeAt() - 64, 0)
function battle(x, y) {
    const f = r(x)
    const s = r(y)
    return f > s ? x : f < s ? y : 'Tie!'
}