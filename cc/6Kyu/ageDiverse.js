// age-diverse
// https://www.codewars.com/kata/5829ca646d02cd1a65000284/train/javascript

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

//     true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
//     false otherwise.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];

// your function should return true as there is at least one developer from each age group.

// Notes:

//     The input array will always be valid and formatted as in the example above.
//     Age is represented by a number which can be any positive integer up to 199.


function isAgeDiverse(list) {
    const groups = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
    }
    const ages = list.map(x => x.age)
    if (ages.length < 10) return false
    ages.forEach(age => {
        if (age >= 100) {
            groups[10] = true
        } else if (age >= 90) {
            groups[9] = true
        } else if (age >= 80) {
            groups[8] = true
        } else if (age >= 70) {
            groups[7] = true
        } else if (age >= 60) {
            groups[6] = true
        } else if (age >= 50) {
            groups[5] = true
        } else if (age >= 40) {
            groups[4] = true
        } else if (age >= 30) {
            groups[3] = true
        } else if (age >= 20) {
            groups[2] = true
        } else if (age >= 13) {
            groups[1] = true
        }
    })
    return Object.values(groups).every(x => x == true)
}