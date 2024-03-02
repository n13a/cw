// C.Wars
// https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript



// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 

// Complete the function initials.

// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.


function initials(n) {
    const arr = n.split(' ')
    const last = arr[arr.length - 1][0].toUpperCase() + arr[arr.length - 1].slice(1)
    const f = arr.slice(0, -1).map(x => x[0].toUpperCase() + '.')
    return f.join('') + last
}