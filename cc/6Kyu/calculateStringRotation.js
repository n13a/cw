// Calculate String Rotation


// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.
// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:

// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1



const shiftIt = (str, n) => {
    const pivot = n % str.length;
    return str.slice(pivot) + str.slice(0, pivot);
}

const shiftedDiff = (first, second) => {
    for (let i = 0; i < first.length; i++) {
        if (shiftIt(second, i) == first) {
            return i
        }
    }
    return -1
}