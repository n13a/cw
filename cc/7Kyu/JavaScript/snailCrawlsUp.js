// Snail crawls up
// https://www.codewars.com/kata/5b93fecd8463745630001d05/solutions/javascript

// The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

// Your function takes three arguments:

//     The height of the column (meters)
//     The distance that the snail crawls during the day (meters)
//     The distance that the snail slides down during the night (meters)

// Calculate number of day when the snail will reach the top of the column.


const snail = (column, day, night) => {
    let dt = 0
    let d = 0
    while (dt <= column) {
        d++
        if (dt + day >= column) {
            return d
        }
        dt += (day - night)
    }
    return d
}