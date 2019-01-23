/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding is global scope, similar to CSS when we made a body attribute.
* 2. Implicit binding is when you want to call an attribute within an object.
* 3. New binding is when you want to do something with constructor functions.
* 4. Explicit binding is like implicit binding but for object methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const hobbit = {
  name: 'Samwise',
  food: 'taters',
  cook: function() {
    console.log(`${this.name} loves to eat ${this.food}`)
  }
}

hobbit.cook();

// Principle 3

// code example for New Binding

function Parent(attributes) {
    this.age = attributes.age;
    this.location = attributes.location;
    this.name = attributes.name;
    this.phrase = attributes.phrase;
  }
  
  Parent.prototype.speak = function() {
      console.log(`${this.name} says: ${this.phrase}`);
  }
  
  const fred = new Parent({
    age: 35,
    name: "Fred",
    location: "Bedrock",
    phrase: "Yabba Dabba Do!",
  });

// Principle 4

// code example for Explicit Binding

const person = {
  name: 'Sarah',
}

const skills = ['HTML', 'CSS', 'JS'];

function introduce(skills2) {
   console.log(`Hello!  My name is ${this.name}, and I have skills in: ${skills2}`)
}

introduce.apply(person, skills);