//syntax
// for ([initialization]; [condition]; [update])
//   statement;

for (var i = 0; i < 5; i++)
  console.log(i);

var nums = [1, 10, 5, -9, -1];

for (var i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

var n = Number(prompt('How many numbers?'));

var sum = 0;
for (var i = 0; i < n; i++) {
  sum += Number(prompt('Enter number ' + (i + 1)));
}

document.write(sum);