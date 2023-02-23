// Throwing Darts

// You've just recently been hired to calculate scores for a Dart Board game!

// Scoring specifications:

//     0 points - radius above 10
//     5 points - radius between 5 and 10 inclusive
//     10 points - radius less than 5

// If all radii are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

// An empty array should return 0.
// Examples:

// scoreThrows( [1, 5, 11] )    =>  15
// scoreThrows( [15, 20, 30] )  =>  0
// scoreThrows( [1, 2, 3, 4] )  =>  140


const scoreThrows = radii => {
    if (radii.length == 0) return 0
    let points = radii.reduce((a, c) => c < 5 ? a + 10 :
        c >= 5 && c <= 10 ? a + 5 : a, 0)
    if (radii.every(x => x < 5)) {
        points += 100
    }
    return points
}