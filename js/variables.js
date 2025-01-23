// var let const
// var x = 10;
// var x = 20;
// var x = 30;
// var x = 15;
// console.log("value of x is: ", x);
// let x = 10;
// let y = 20;
// console.log("value of x is ", x);

// const x = 10;
// const y = 20;
// console.log("value of x is ", x);
const x = 20;

{
  const x = 15;
  console.log("this is block", x);
  console.log("this is block last", x);
}
console.log("this is bottom", x);

// var => global scope
// let => block scope
// const => block scope
