/* Find an employees role in the company
https://www.codewars.com/kata/55c9fb1b407024afe6000055/train/javascript


You get a new job working for Eggman Movers. Your first task is to write a method that will allow the admin staff to enter a person’s name and return what that person's role is in the company.

You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"

The array is preloaded and can be referenced using the variable employees ($employees in Ruby). It uses the following structure.

let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, ...... ]

There are no duplicate names in the array and the name passed in will be a single string with a space between the first and last name i.e. Jane Doe or just a name.
*/


function findEmployeesRole(name) {
  for (let employee of employees) {
    const employeeName = `${employee.firstName} ${employee.lastName}`
    if (employeeName === name) {
      return employee.role
    }
  }
  return 'Does not work here!'
}
