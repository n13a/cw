// Sort with Arrow Functions

// Order People by age Using Arrow Function
// Sort and Order people by their age using Arrow Functions
// Task
// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
// Input
// Input will be a valid array with People objects containing an Age and Name
// Output
// Output will be a valid sorted array with People objects sorted by Age in ascending order 

const OrderPeople = people => people.sort((a, b) => a.age - b.age)