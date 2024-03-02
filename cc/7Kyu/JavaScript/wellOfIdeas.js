// Well of Ideas 
// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.



const well = x => {
    const ar = x.flat()
    let count = 0
    for (let i = 0; i < ar.length; i++) {
        if (typeof ar[i] == 'string' && ar[i].toLowerCase() === 'good') count++
    }
    return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'
}