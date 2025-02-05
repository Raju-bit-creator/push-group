// const sentence = "we/are/happy /to /see /you";
// const words = sentence.split("/");
// console.log("words", words);
// const totalWord = words.length;
// console.log("total word", totalWord);

// let num = [1, 2, 3, 4, 6, 7, 8];
// let newNum = num.push(9);
// console.log(num);

// let removeNum = num.pop();
// console.log(num);

// let num2 = [1, 2, 3, 4];
// let num3 = [...num2, 5, 6, 7]; //spread operator
// console.log(num3);
// assignment: to research on shift unshift indexof includes splice slice  methods in array

// json parse // json stringify

// let student = { name: "jhone", age: 30 };
// console.log(student.age);
// const jsonString = '{"name": "jhon", "age":20, "city": "pokhar" }'; //json string

// let data = JSON.parse(jsonString);
// let str = JSON.stringify(data);
// console.log(data.age);
// console.log(str);
// console.log(str.name);

// let users = [
//   {
//     name: "Nikhil",
//     product: [
//       {
//         title: "macbook",
//         price: 1000,
//       },
//       {
//         title: "mobile",
//         price: 100,
//       },
//       {
//         title: "bag",
//         price: 1500,
//       },
//     ],
//   },
//   {
//     name: "Anjali",
//     product: [
//       {
//         title: "Shoes ",
//         price: 300,
//       },
//       {
//         title: "book",
//         price: 1200,
//       },
//     ],
//   },
//   {
//     name: "Krishma",
//     product: [
//       {
//         title: "Shoes ",
//         price: 3000,
//       },
//       {
//         title: "Dress",
//         price: 1200,
//       },
//     ],
//   },
// ];

// users.forEach((user) => {
//   user.product.forEach((product) => {
//     if (product.title.toLowerCase().trim() == "shoes") {
//       console.log(
//         // `${user.name} owned ${product.title} which cost ${product.price}`
//         `${user.name} has ${product.title}`
//       );
//     }
//   });
// });

// js for fibonacci series
let num = 10;
let fib = [0, 1];
//  a= 0
//  b=1
//  c= a+b
//  a=b
//  b=c
// c=
for (let i = 2; i <= num; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(fib);

// 0 1 1 2 3 5
