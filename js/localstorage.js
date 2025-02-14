//local storage set
// localStorage.setItem("name", "jhon");
// localStorage.setItem("token", response.authToken);
// localStorage.setItem("token1", "122reweryrttylghfkjgdfjfoiaefweewfsa");
// localStorage.setItem("user", JSON.stringify(user));
// localStorage.setItem("token2", JSON.stringify(authToken));

// //local storage get
// let token = localStorage.getItem("token");
// let user = localStorage.getItem("user", JSON.parse(user));
// return user.name

let generateNumber = (Account) => {
  // let str = Account.toString();
  let lastNumber = str.slice(-2);
  let maskNumber = "*".repeat(str.length - 2);
  return maskNumber + lastNumber;
};
const Account = "1234567890e324r23";

const maskValue = generateNumber(Account);
console.log(maskValue);

// this is the example of git merge
//git merge main hello world

//we are creating PR request with respect to master branch
