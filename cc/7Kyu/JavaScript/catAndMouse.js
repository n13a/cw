// Cat and Mouse 

// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

const catMouse = x => {
    const dots = x.match(/[.]/g)
    return dots == null || dots.length <= 3 ? 'Caught!' : 'Escaped!'
}