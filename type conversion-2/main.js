
let num1 = 123;
let num2 = 333;

console.log("Type Of num1 before connumersion: " + typeof num1 +
  " and Type of num2 before connumersion: " + typeof num2);

console.log("Type Of num1 after connumersion: " + typeof String(num1) +
  " and Type of num2 after connumersion: " + typeof num2.toString());

let d = new Date('1995-12-17T03:24:00');
console.log("Type of d before conversion: " + typeof d);
console.log("Type of d after conversion: " + typeof Number(d));
