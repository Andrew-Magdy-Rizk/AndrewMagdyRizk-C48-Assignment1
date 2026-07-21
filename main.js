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
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

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
//   } else {
//     return console.log("Not Divisible by both");
//   }
// }
// checkDivisible(15);

// ? A.9
// let getSqure = (num) => {
//   let squre = num ** 2;
//   console.log(squre);
//   return squre;
// };
// getSqure(6);

// ? A.10
// function formatter({ name, age }) {
//   let contact = `${name} is ${age} years old`;
//   console.log(contact);
//   return contact;
// }
// formatter({ name: "Andrew", age: 26 });

// ? A.11
// function sum(...rest) {
//   let result = rest.reduce((prev, acc) => prev + acc);
//   console.log(result);
//   return result;
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
//   let max = arr[0];
//   for (const num of arr) {
//     if (num > max) max = num;
//   }
//   console.log(max);
//   return max;
// }
// getlargeValue([1, 3, 7, 2, 4]);

// ? A.14
// function getKeys(obj) {
//   const arr = Object.keys(obj);
//   console.log(arr);
//   return arr;
// }
// getKeys({ name: "andrew", age: 26 });

// ? A.15
// function splitText(text) {
//   let arr = text.split(" ");
//   console.log(arr);
//   return arr;
// }
// splitText("The quick brown fox");

// ! B Part2

// ? B.1
/*
 ! First forEach
 * 1. Is a method to use in array only to loop on it 
 * 2. can`t stop this loop early
 * 3. depended on callback function
 * 4. used in ES6
 *  
 * Use it when you want to perform an action on all elements.
 ! Secoundary for...Of
 * 1. Can use with any iterable such as "String , array"
 * 2. can stop this loop in progress
 * 3. depended on loop
 * 4. old school before ES6
 * 
 * Use it when you need more control over the loop or asynchronous operations.
*/

// ? B.2
// * TDZ =>  This concept is more commonly used with "let" and "const" when calling a value before creating it.
// function calc(b = a, a = 5) {
//   return console.log(a + b);
// }
// calc();

// ? B.3
/*
 * difference between == and ===
 * this == compare value to value
 * this === compaier value and type to other value and type
 */

// ? B.4
// * How to works => try...catch is used to handle errors in JavaScript. The code inside the try block is executed first. If an error occurs, execution stops in the try block and the catch block handles the error instead of crashing the program.

// * Why important in async operations => try...catch is important when using async/await because it catches errors from rejected promises. This allows the application to handle failures gracefully, such as displaying an error message or retrying the operation, instead of crashing.

// ? B.5

//  * type conversion : this convert or transform type by me

//  * type coercion : this convert or transform type without me by js
