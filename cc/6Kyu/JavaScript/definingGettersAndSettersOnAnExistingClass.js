// Defining getters and setters on an existing class
// https://www.codewars.com/kata/55bcf04de45497c54a0000d0/train/javascript


// Introduction to getter and setter

// Javascript classes can declare getter and setters using the following format:

// class Engine {
//   constructor(watts) {
//     this.watts = watts;
//   }
//   get horsepower() {
//     return this.watts / 745.7;
//   }
//   set horsepower(hp) {
//     this.watts = 745.7 * hp;
//   }
// }

// and be used as so:

// let bossV8 = new Engine(279637.5);
// console.log(bossV8.horsepower); // => 375
// bossV8.horsepower = 385;
// console.log(bossV8.watts); // => 287094.5

// The problem

// There is a preloaded class of Person and it needs a new getter and setter. Person is defined with a constructor that takes a first name and a last name, and provides a mean to get the first name, last name, and full name. Bellow is the preloaded class:

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// and can be used as so:

// let marcusFenix = new Person('Marcus', 'Fenix');
// console.log(marcusFenix.firstName); // => 'Marcus'
// console.log(marcusFenix.lastName); // => 'Fenix'
// console.log(marcusFenix.getName()); // => 'Marcus Fenix'

//     Add a getter of name that returns the full name
//     Add a setter of name that modifies first name and last name

// After adding the new getter and setter, a Person can be used as so:

// let augustusCole = new Person('Augustus', 'Cole');
// augustusCole.name = 'Cole Train';
// console.log(augustusCole.firstName); // => 'Cole'
// console.log(augustusCole.lastName); // => 'Train'
// console.log(augustusCole.getName()); // => 'Cole Train'
// console.log(augustusCole.name); // => 'Cole Train'



Object.defineProperty(Person.prototype, 'name', {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  set: function (value) {
    const a = value.split(' ')
    this.firstName = a[0]
    this.lastName = a[1]
  }
});