// using function

// function createUser(name, id, noOfProjects) {
//   let user = {};
//   user.name = name;
//   user.id = id;
//   user.noOfProjects = noOfProjects;

//   user.getProjects = function () {
//     return user.noOfProjects;
//   };
//   user.changeName = function (newName) {
//     let previousName = user.name;
//     user.name = newName;
//     return previousName;
//   };
//   user.incrementProjects = function () {
//     user.noOfProjects += 1;
//     return noOfProjects;
//   };
//   user.decrementProjects = function () {
//     user.noOfProjects = user.noOfProjects - 1;
//     return user.noOfProjects;
//   };
//   return user;
// }

// using object.create

// let usermethod = {
//   getProjects: function () {
//     return this.noOfProjects;
//   },
//   changeName: function (newName) {
//     let previousName = this.name;
//     this.name = newName;
//     return previousName;
//   },
//   incrementProjects: function () {
//     this.noOfProjects += 1;
//     return this.noOfProjects;
//   },
//   decrementProjects: function () {
//     this.noOfProjects = this.noOfProjects - 1;
//     return this.noOfProjects;
//   },
// };

// function createUser(name, id, noOfProjects) {
//   let user = Object.create(usermethod);
//   user.name = name;
//   user.id = id;
//   user.noOfProjects = noOfProjects;
//   return user;
// }

// function CreateUser(name, id, noOfProjects) {
//   this.name = name;
//   this.id = id;
//   this.noOfProjects = noOfProjects;
// }

// CreateUser.prototype = {
//   getProjects: function () {
//     return this.noOfProjects;
//   },
//   changeName: function (newName) {
//     let previousName = this.name;
//     this.name = newName;
//     return previousName;
//   },
//   incrementProjects: function () {
//     this.noOfProjects += 1;
//     return this.noOfProjects;
//   },
//   decrementProjects: function () {
//     this.noOfProjects -= 1;
//     return this.noOfProjects;
//   },
// };

class user {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }
  changeName(newName) {
    let previousName = this.name;
    this.name = newName;
    return previousName;
  }
  incrementProjects() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  }
  decrementProjects() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  }
}

let Rhythm = new user("Rhythm", 12, 90);
let Ritik = new user("Ritik", 21, 40);
