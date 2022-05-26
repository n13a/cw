// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

let name = 'Abe';
let greet_abe = function() {
  return "Hello, " + name + '!';
};
let nameBen = 'Ben';
let greet_ben = function() {
  return "Hello, " + nameBen + '!';
};