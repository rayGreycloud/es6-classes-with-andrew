// Higher-Order Functions
// Goal: modify existing Functions
// Properties:
// 1. Function
// 2. Takes a function as only argument
// 3. Returns a function

// Example
var add = (a, b) => a + b;
console.log(`Result is ${add(99, 1)}`);

// HOF
var callAndLog = (func) => {
  return function () {
    var res = func.apply(undefined, arguments);
    console.log(`Result is ${res}`);
    return res;
  }
};

// Using HOF
var addAndLog = callAndLog(add);
addAndLog(199, 1);

// Challenge: square function that uses HOF
var square = (c) => c * c;

var squareAndLog = callAndLog(square);
squareAndLog(25);
