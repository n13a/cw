// Create the rooms

// Escape the room

// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).


function Room(name, description, completed) {
    this.name = name
    this.description = description
    this.completed = completed
}
const rooms = {
    firstR: new Room('a room', 'something', false),
    secondR: new Room('another room', 'something else', false),
    thirdR: new Room('some room', 'something else else', true)
}