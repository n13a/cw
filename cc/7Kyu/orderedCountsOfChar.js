// Ordered Count of Characters


// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


const orderedCount = text => {
    let cache = [], ar = []
    const obj = text.split('').reduce((o, i) => {
        if (!o[i]) o[i] = 0
        o[i]++
        return o
    }, {})
    text.split('').forEach(x => {
        if (!cache.includes(x)) ar.push([x, obj[x]])
        cache.push(x)
    })
    return ar
}