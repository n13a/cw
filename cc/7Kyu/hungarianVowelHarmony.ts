export const dative = (word: string): string => {
    const front: Array<string> = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű']
    const back: Array<string> = ['a', 'á', 'o', 'ó', 'u', 'ú']
    let arr: Array<string> = []
    for (let i = 0; i < word.length; i++) {
        if ([...front, ...back].includes(word[i])) {
            arr.push(word[i])
        }
    }
    return front.includes(arr[arr.length - 1]) ? word + 'nek' : word + 'nak'
}

// Hungarian Vowel Harmony 
// https://www.codewars.com/kata/57fd696e26b06857eb0011e7/train/typescript

// Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.
// Task:

// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.
// Vowel Harmony Rules (simplified)

// When the last vowel in the word is

//     a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
//     a back vowel (a, á, o, ó, u, ú) the suffix is -nak

// Examples:

// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"

// Preconditions:

//     To keep it simple: All words end with a consonant :)
//     All strings are unicode strings.
//     There are no grammatical exceptions in the tests.