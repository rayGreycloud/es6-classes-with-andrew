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
  constructor(name, age, like) {
    super(name, age);
    this.like = like;
  }
  getGreeting() {
    return `Hi, my name is ${this.name} and I like ${this.like}.`;
  }
}

class Baby extends Person {
  getGreeting() {
    return `Goo goo ga ga`;
  }
}

var adult = new Person('Darth', 49);
console.log(adult.getGreeting());
console.log(adult.getDescription());

var child = new Child('Anakin', 9, 'podracing');
console.log(child.getGreeting());
console.log(child.getDescription());

var baby = new Baby('Luke', 1);
console.log(baby.getGreeting());
console.log(baby.getDescription());
