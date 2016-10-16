// Higher-Order Functions
// Goal: modify existing Functions
// Properties:
// 1. Function
// 2. Takes a function as only argument
// 3. Returns a function

// Demo of access to Args
function one(name, location) {
  console.log(name, location);
};

function two() {
  console.log('Args', arguments);
  one.apply(undefined, arguments);

};

two('Fred', 'Bedrock');
two('Barney', 'New Rock City');
