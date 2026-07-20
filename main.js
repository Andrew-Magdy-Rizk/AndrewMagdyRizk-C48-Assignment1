//! A Part1

// ? A.1
// let num = "123";
// let Convert = Number(num) + 7;
// console.log(Convert);

// ? A.2
// let value = null;
// if (!value) console.log("Invalid");

// ? A.3
// for (let i = 1; i <= 10; i++) {
//   if (i % 2) {
//     console.log(i);
//   } else {
//     continue;
//   }
// };

// ? A.4
// let arr = [1, 2, 3, 4, 5];
// let withFilter = arr.filter((item) => (item % 2 ? null : item));
// console.log(withFilter);

// ? A.5
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let merge = [...arr1, ...arr2];
// console.log(merge);

// ? A.6
// let today = 3;
// switch (today) {
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
// }

// ? A.7
// let arr = ["a", "ab", "abc"];
// let newArray = arr.map((item) => item.length);
// console.log(newArray);

// ? A.8
// function checkDivisible(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return console.log("Divisible by both");
//   }
// }
// checkDivisible(15);

// ? A.9
// let getSqure = (num) => {
//   console.log(num ** 2);
// };
// getSqure(6);

// ? A.10
// function formatter({ name, age }) {
//   let contact = `${name} is ${age} Years Old`;
//   return console.log(contact);
// }
// formatter({ name: "Andrew", age: 26 });

// ? A.11
// function sum(...rest) {
//   let result = rest.reduce((prev, acc) => prev + acc);
//   return console.log(result);
// }
// sum(1, 2, 3, 4, 5);

// ? A.12
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve("Success");
//     }, 3000);
//   }).then((data) => console.log(data));
// }
// getData();

// ? A.13
// function getlargeValue(arr) {
//   let max = 0;
//   for (const num of arr) {
//     if (num > max) max = num;
//   }
//   console.log(max);
// }
// getlargeValue([1, 3, 7, 2, 4]);

// ? A.14

// ! B Part2

// ? B.2
// function calc(b = a, a = 5) {
//   return console.log(a + b);
// }
// calc();
