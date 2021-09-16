let animalMethod = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (location) {
    this.location = location;
    return location;
  },
  summary: function () {
    return `I live in ${this.location} and I have a ${this.noOfLegs}`;
  },
};

function animal(location, noOfLegs) {
  let user = Object.create(animalMethod);
  user.location = location;
  user.noOfLegs = noOfLegs;
  return user;
}

function dog(name, color) {
  let user = Object.create(dogMethod);
  user.name = name;
  user.color = color;
  return user;
}
Object.setPrototypeOf(animalMethod, dogMethod);

let dogMethod = {
  bark: function () {
    alert(`I am a ${this.name} and I can bark`);
  },
  changeName: function (name) {
    this.name = name;
    return name;
  },
  changeColor: function (color) {
    this.color = color;
    return color;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

let cat = animal("tilak nagar", 4);
let dogName = animal("jhonny", "black");
