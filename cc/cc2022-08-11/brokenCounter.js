// broken counter

// Our counter prototype is broken. Can you spot, what's wrong here?

function Counter() {
    this.value = 0;
  }
  
  Counter.prototype.increase = function() {
    this.value++;
  };
  
  Counter.prototype.getValue = function() {
    return this.value;
  };
  
  Counter.prototype.reset = function() {
    this.value = 0;
  };

// Output
// Time: 664ms Passed: 3 Failed: 0
// Test Results:
// test counter
// initialize
// increase
// reset
// Completed in 4ms
// You have passed all of the tests! :)