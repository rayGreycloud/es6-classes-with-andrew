class Person {
  constructor(name = 'Anonymous', age = 21) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, my name is ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

var me = new Person('Darth', 49);
console.log(me.getGreeting());
console.log(me.getDescription());

var myself = new Person();
console.log(myself.getGreeting());
console.log(myself.getDescription());
