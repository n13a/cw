// Who has the most money
https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript

// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }

// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

// Notes:

//     Each student will have a unique name
//     There will always be a clear winner: either one person has the most, or everyone has the same amount
//     If there is only one student, then that student has the most money


const mostMoney = students => {
    const sm = students.reduce((a, c) => {
        const o = {}
        o.name = c.name
        o.money = c.fives * 5 + c.tens * 10 + c.twenties * 20
        a.push(o)
        return a
    }, [])
    const sort = sm.sort((a, b) => b.money - a.money)
    return sm.length == 1 ? sort[0].name :
        sort.every(person => person.money == sm[0].money) ? 'all' :
            sort[0].name
}