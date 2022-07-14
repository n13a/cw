// Alphabetical Addition

// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

const addLetters = (...l)=> {
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    const num = l.reduce((a,c)=> a + c.charCodeAt() - 96, 0)
    if(num % 26 == 0){
     return 'z' 
    }
    return num > 26 ? alph[num % 26 - 1] : alph[num - 1] 
}