// Initialize my name
// https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript


// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).
// Examples

// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'



function initializeNames(name) {
    const ar = name.split(' ')
    return ar.map((x, i) => i !== 0 && i !== ar.length - 1 ? `${x[0]}.` : x)
        .join(' ')
}