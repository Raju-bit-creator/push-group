// Promise(resolve, reject)
//callbackes

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("internal server error");
    resolve({
      data: {
        name: "sasank",
        email: "sasank@gmail.com",
      },
    });
  }, 3000);
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
