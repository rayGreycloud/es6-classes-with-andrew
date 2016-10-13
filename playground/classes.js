class Person {
  constructor(name = 'Anonymous', age = 21) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, I'm ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Child extends Person {
  getGreeting() {
    return `Hi, my name is ${this.name} and I like kitties.`;
  }
}

var me = new Person('Darth', 49);
console.log(me.getGreeting());
console.log(me.getDescription());

var myself = new Child();
console.log(myself.getGreeting());
console.log(myself.getDescription());
