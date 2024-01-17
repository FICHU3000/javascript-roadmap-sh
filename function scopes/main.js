// function sum(a, b) {
//   return a + b;
// }

// alert( sum(1, 2, 3, 4, 5) );

// function sumAll(...args) {
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// alert(sumAll(1));
// alert(sumAll(1, 2));
// alert(sumAll(1, 2, 3));

function showName(firstName, lastName, ...titles) {
  alert(firstName + ' ' + lastName);

  alert(titles[0]);
  alert(titles[1]);
  alert(titles.length);
}

showName("Юлий", "Цезарь", "Консул", "Император");