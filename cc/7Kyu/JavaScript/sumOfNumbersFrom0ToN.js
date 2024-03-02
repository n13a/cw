// Sum of numbers from 0 to N
// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:

// Input:

// > 6

// Output:

//     0+1+2+3+4+5+6 = 21

// Input:

// > -15

// Output:

//     -15<0

// Input:

// > 0

// Output:

//     0=0

var SequenceSum = function () {
    function SequenceSum() { }
    SequenceSum.showSequence = function (count) {
        if (count == 0) return '0=0'
        else if (count < 0) return `${count}<0`
        else {
            const a = [...Array(count + 1).keys()]
            return `${a.join('+')} = ${a.reduce((a, c) => a + c, 0)}`
        }
    };
    return SequenceSum;
}();