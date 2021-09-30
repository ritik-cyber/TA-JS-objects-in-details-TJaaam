## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

```js
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    console.log(`hello ${this.name} can eat`);
  }
  sleep() {
    console.log(`hello ${this.name} can sleep`);
  }
  walk() {
    console.log(`hello ${this.name} can walk`);
  }
}

class Player {
  constructor(name, age, gender, sportsname) {
    super(name, age, gender);
    this.sportsname = sportsname;
  }
  play() {
    console.log(`${this.name} can play a sportsman`);
  }
}
class Teacher {
  constructor(name, age, gender, institutename) {
    super(name, age, gender);
    this.institutename = institutename;
  }
  tech() {
    console.log(`${this.name} can tech a math `);
  }
}
class Artist {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {
    console.log(`${this.name} can play a sportsman`);
  }
}

class Crickter {
  consturctor(name, age, gender, sporstname, teamname) {
    super(name, age, gender, spor);
    this.teamname = teamname;
  }
  playCrickter() {
    console.log(`${this.name} is always playing cricket`);
  }
}
```
