// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// alert(user[key]);

// alert(user.age);

// let obj = {
//   for: 1,
//   let: "2",
//   return: "3"
// };

// alert(obj.for - obj.let * obj.return)

// let user = { name: "John", age: 30 };

// alert("age" in user);
// alert("blabla" in user);

  // let user = {};
  // user.name = "John";
  // user.surname = "Smith";
  // user.name = "Pete";
  // delete user.name;

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false
//   }
//   return true
// }

// const user = {
//   name: "John"
// }

// user.name = "Pete"

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);