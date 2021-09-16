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

function createAnimal(location, noOfLegs) {
  let obj = Object.create(animalMethod);
  obj.location = location;
  obj.noOfLegs = noOfLegs;
  return obj;
}

function createDog(location, noOfLegs, name, color) {
  let obj = createAnimal(location, noOfLegs);
  Object.setPrototypeOf(obj, dogMethod);
  obj.name = name;
  obj.color = color;
  return obj;
}

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
Object.setPrototypeOf(dogMethod, animalMethod);

function createCat(location, noOfLegs, name, colorOfEyes) {
  let obj = createAnimal(location, noOfLegs);
  Object.setPrototypeOf(obj, catMethod);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}

let catMethod = {
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
Object.setPrototypeOf(catMethod, animalMethod);

let johhny = createDog("tilak nagar", 4, "Jhonny", "brown");
