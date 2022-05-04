// Task:
// Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:
// typeValidation(42, "number");   // => true
// typeValidation("42", "number"); // => false


function typeValidation(variable, type) {
    return typeof (variable) == type
  }