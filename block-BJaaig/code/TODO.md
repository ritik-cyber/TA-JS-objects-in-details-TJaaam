## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: "John",
  sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  },
};

let user2 = {
  username: "Arya",
  sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  },
};
let user3 = {
  username: "Bran",
};

function MainUser() {
  this.username = "Tyrion";
  this.sayHello = function sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello Jhon
console.log(user2.sayHello()); // Hello Arya
console.log(user.sayHello.call(user2)); // Hello Arya
console.log(user.sayHello.call(user2, "Hey")); // Hey Arya
console.log(user.sayHello.apply(user2, ["Hey"])); // Hey Arya
console.log(typeof user.sayHello.bind(user2)); // function
console.log(user.sayHello.bind(user2)()); // Hello Arya
console.log(userSayHello()); // Sayhello is not defined
console.log(typeof userSayHello.bind(user2)); // sya hello is not defined
console.log(userSayHello.bind(user2)()); // say hello is not defined
console.log(user3.sayHello()); // user3 is not defiend
console.log(userSayHello.apply(user3)); // say hello is not defined
console.log(userSayHello.call(user3)); // say hello is not defiend
console.log(typeof new MainUser()); // output / error
console.log(typeof new MainUser()); // output / error
console.log(new MainUser().sayHello()); // output / error
console.log(new MainUser().sayHello.call(user2)); // output / error
console.log(new MainUser().sayHello.call(user)); // output / error
console.log(new MainUser().sayHello.apply(user, ["Welcome!"])); // output / error
```
