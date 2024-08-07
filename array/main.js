//two syntaxes for creating an empty array:
var arr1 = [];
var arr2 = new Array();
//array with elements
let fruits = ["Apple", "Orange", "Plum"];
//array with mixed data types
let arr = ["Apple", { name: "John" }, true, function () { console.log('hello'); }];
//We can get an element by its number in square brackets:
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum
//We can replace an element:
fruits[2] = 'Pear'; // now ['Apple', 'Orange', 'Pear']
//…Or add a new one to the array:
fruits[3] = 'Lemon'; // now ['Apple', 'Orange', 'Pear', 'Lemon']
//The total count of the elements in the array is its length:
console.log(fruits.length); // 4
//We can also use alert to show the whole array.
alert(fruits); // Apple,Orange,Pear,Lemon
//to remove an element from the end of an array we can use pop()
let fruits = ["Apple", "Orange", "Pear"];

alert(fruits.pop()); // remove "Pear" and alert it

alert(fruits); // Apple, Orange
//to add an element to the end of an array we can use push()
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert(fruits); // Apple, Orange, Pear