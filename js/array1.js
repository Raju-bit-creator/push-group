let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let x = "10";
// let y = "10";
// console.log(x==y); //true
// console.log(x===y);// false

let oddNumber = [];
let evenNumber = [];
for (let index = 0; index < number.length; index++) {
  const num = number[index];
  if (num % 2 == 0) {
    evenNumber.push(num);
  } else {
    oddNumber.push(num);
  }
}
console.log("this is odd number", oddNumber);
console.log("this is even number", evenNumber);
