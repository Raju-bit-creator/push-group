// let a = 20;
// let b = 30;
// console.log(a * b);

// function title(name) {
//   return `hello , ${name}`;
// }
// const boyName = title("ramesh");
// console.log(boyName);

// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3));

let Users = ["ram", "Shyam", "hari", "sita", "gita"];

const showAlert = (type, message) => {
  console.log(`${type}: ${message}`);
};

const registerUser = (name) => {
  const user = Users.find(
    (c) => c.toLowerCase().trim() === name.toLowerCase().trim()
  );
  if (user) {
    console.log("register user:", user);
    showAlert("success", "login successfull");
  } else {
    console.log(`${name} is not register user: invalid credential`);
    showAlert("failed", "you have to register first");
  }
};
registerUser("ram");

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  return a / b;
};

const result = add(10, 20);
const sub = subtract(20, 10);
const divide = div(13, 3);
const newNum = Math.ceil(divide);
const newNum2 = Math.floor(divide);
const newNum3 = Math.round(divide);
console.log(newNum);

console.log(result);
console.log(sub);
// console.log(divide);

function rotateArray(A, K) {
  let N = A.length;
  if (N == 0) return A;
  K = K % N;
  return [...A.slice(-K), ...A.slice(0, N - K)];
}
console.log(rotateArray([1, 2, 3, 4], 3));

//arrow function and normal function

// function hello() {
//   console.log("what is your name?");
// }
// hello();
const hello = () => {
  console.log("what is your name?");
};
hello();
