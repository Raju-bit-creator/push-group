//array is collection of similar data types
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let names = ["ram", "shyam ", "hari"];

// // let x = "10";
// // let y = "10";
// // console.log(x==y); //true
// // console.log(x===y);// false

// let oddNumber = [];
// let evenNumber = [];
// for (let index = 0; index < number.length; index++) {
//   const num = number[index];
//   if (num % 2 == 0) {
//     evenNumber.push(num);
//   } else {
//     oddNumber.push(num);
//   }
// }
// console.log("this is odd number", oddNumber);
// console.log("this is even number", evenNumber);

//foreach loop
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumber = [];
// const evenNumber = [];

// number.forEach((num) => {
//   if (num % 2 == 0) {
//     evenNumber.push(num);
//   } else {
//     oddNumber.push(num);
//   }
// });
// console.log("this is odd number", oddNumber);
// console.log("this is even number", evenNumber);

// map function

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumber = [];
const evenNumber = [];

number.map((num) => {
  if (num % 2 == 0) {
    evenNumber.push(num);
  } else {
    oddNumber.push(num);
  }
});
console.log("this is odd number", oddNumber);
console.log("this is even number", evenNumber);

// assignment : multiplication table of 2 to 10 using for , foreach, & map function
