// Decipher this!

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

const decipher = word => {
    const num = word.match(/\d+/g)[0]
    let ar = word.split('')
    ar.splice(0, num.length, String.fromCharCode(num))
    ar[1] = ar[ar.length - 1]
    ar[ar.length - 1] = word[num.length]
    return word.length !== 2 ? ar.join('') : ar[0]
}
const decipherThis = str => str.split(' ').map(x => decipher(x)).join(' ')