// Move 10

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.


const moveTen = s => {
    let res = ''
    const a = [...s].map(x => {
        res += String.fromCharCode((x.charCodeAt() - 97 + 10) % 26 + 97);
    })
    return res
}