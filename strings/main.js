// 'use strict';

// function f(strings, ...values) {
//   alert(JSON.stringify(strings));
//   alert(JSON.stringify(strings.raw));
//   alert(JSON.stringify(values));
// }

// let apples = 3;
// let oranges = 5;

// let str = f`Sum of ${apples} + ${oranges} =\n ${apples + oranges}!`;

// 'use strict';

// function str(strings, ...values) {
//   let str = "";
//   for (let i = 0; i < values.length; i++) {
//     str += strings[i];
//     str += values[i];
//   }

//   str += strings[strings.length - 1];
//   return str;
// }

// let apples = 3;
// let oranges = 5;

// alert(str`Sum of ${apples} + ${oranges} = ${apples + oranges}!`);

'use strict';

let messages = {
  "Hello, {0}!": "Привет, {0}!"
};

function i18n(strings, ...values) {
  let pattern = "";
  for (let i = 0; i < values.length; i++) {
    pattern += strings[i] + '{' + i + '}';
  }
  pattern += strings[strings.length - 1];

  let translated = messages[pattern];

  return translated.replace(/\{(\d)\}/g, (s, num) => values[num]);
}

let name = "Вася";

alert(i18n`Hello, ${name}!`);