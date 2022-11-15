// Dashatize 

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'


const dashatize = num => {
    let fa = []
    num.toString().split('').forEach(x => {
        if (x % 2 != 0) {
            fa.push(`-${x}-`)
        } else {
            fa.push(x)
        }
    })


    const ta = fa.join('').split('')

    let aaaa = ta.filter((x, i) => !(x == '-' && ta[i + 1] == '-'))

    if (aaaa[0] == '-') aaaa[0] = ''
    if (aaaa[aaaa.length - 1] == '-') aaaa[aaaa.length - 1] = ''

    if (aaaa.join('') == 'N-a-N') return 'NaN'
    return aaaa.join('')
}