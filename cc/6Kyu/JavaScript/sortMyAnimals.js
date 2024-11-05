/* Calculate Variance
https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript


Consider the following class:

var Animal = {
    name: "Cat",
    numberOfLegs: 4
}

Write a method that accepts a list of objects of type Animal, and returns a new list.
The new list should be a copy of the original list, sorted first by the animal's number of legs,
aand then by its name.

If an empty list is passed in, it should return an empty list back.
*/

function sortAnimal(animals) {
    const copy = structuredClone(animals);
    if (copy.length === 0) {
        return []
    }

    return copy.sort((a, b) => {
        if (a.numberOfLegs !== b.numberOfLegs) {
            return a.numberOfLegs - b.numberOfLegs
        }
        return a.name.localeCompare(b.name);
    })
}



console.log(sortAnimal([
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }
]))
