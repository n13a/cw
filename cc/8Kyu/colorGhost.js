// Color Ghost


// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color => "white" or "yellow" or "purple" or "red"

class Ghost {
    constructor() {
        const colors = ["purple", "yellow", "red", "white"];
        const randomColor = colors[Math.floor(Math.random() * 4)];
        this.color = randomColor;
    }
}