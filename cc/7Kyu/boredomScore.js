// Boredom Score

// Every now and then people in the office moves teams or departments.Depending what people are doing with their time they can become more or less boring.Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <= 80: 'kill me now'
//     < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

const bore = {
    "IS": 8,
    "retail": 5,
    "change": 6,
    "finance": 2,
    "trading": 6,
    "canteen": 10,
    "accounts": 1,
    "cleaning": 4,
    "regulation": 3,
    "pissing about": 25,
}
const boredom = staff => {
    const boredomScore = Object.keys(staff).reduce((a, c) => a + bore[staff[c]], 0)
    return boredomScore <= 80 ? 'kill me now' : boredomScore < 100 && boredomScore > 80 ? 'i can handle this' : 'party time!!'
}