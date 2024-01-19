// Where is my parent!?(cry)

// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb". 

const findChildren = str => {
    const object = str.split('').reduce((o, i) => {
        if (!o[i]) o[i] = 0
        o[i]++
        return o
    }, {})
    const sorted = {}
    Object.keys(object).sort().forEach(k => {
        sorted[k] = object[k]
    })
    let res = ''
    for (let i in sorted) {
        if (!(i.toLowerCase() == i)) {
            res += `${i}${i.toLowerCase().repeat(sorted[i.toLowerCase()])}`
        }
    }
    return res
}