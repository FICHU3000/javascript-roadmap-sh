// EXERCISE №1

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// EXERCISE №2

// function makeWorker() {
//   let name = "Pete";

//   return function () {
//     alert(name);
//   };
// }

// let name = "John";

// let work = makeWorker();

// work();

// EXERCISE №3

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter());
// alert(counter());

// alert(counter2());
// alert(counter2());

// EXERCISE №4

// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert(counter.up());
// alert(counter.up());
// alert(counter.down());

// EXERCISE №5

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();

// EXERCISE №6

// sum(1)(2) = 3
// sum(5)(-1) = 4

// EXERCISE №7

// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();

// EXERCISE №8

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(inBetween(3, 6)));

// alert(arr.filter(inArray([1, 2, 10])));

// EXERCISE №9

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(fieldName) {
//   return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }

// EXERCISE №10

function makeArmy() {

  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      alert(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();