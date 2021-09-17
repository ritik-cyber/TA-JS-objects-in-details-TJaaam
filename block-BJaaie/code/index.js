class Animal {
  constructor(location, noOfLegs) {
    this.location = location;
    this.noOfLegs = noOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  }
  summary() {
    return `I live in ${this.location} and I have ${this.noOfLegs}`;
  }
}

class Dog extends Animal {
  constructor(location, name, noOfLegs, color) {
    super(location, noOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}
