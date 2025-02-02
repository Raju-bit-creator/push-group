let cart = [
  { product: "apple", price: 100, qty: 3 },
  { product: "mango", price: 100, qty: 1 },
  { product: "banana", price: 100, qty: 3 },
  { product: "jackfruit", price: 100, qty: 3 },
  { product: "grapes", price: 100, qty: 3 },
];

const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(`sub total of cart items is : rs. ${total}`);

let courses = [
  {
    class: "maths",
    completedStatus: false,
  },
  {
    class: "mern",
    completedStatus: true,
  },
  {
    class: "devops",
    completedStatus: true,
  },
  {
    class: "graphic design",
    completedStatus: true,
  },
  {
    class: "data science",
    completedStatus: false,
  },
];

let completed = [];
let inComplete = [];

for (let index = 0; index < courses.length; index++) {
  const element = courses[index];
  if (element.completedStatus) {
    completed.push(element.class);
  } else {
    inComplete.push(element.class);
  }
}
console.log("compelted", completed);
console.log("incomplete", inComplete);

let countries = [
  {
    name: "Nepal",
    countryCode: "np",
  },
  {
    name: "india",
    countryCode: "in",
  },
  {
    name: "china",
    countryCode: "ch",
  },
  {
    name: "japan",
    countryCode: "jp",
  },
  {
    name: "america",
    countryCode: "us",
  },
  {
    name: "australia",
    countryCode: "au",
  },
];
const getCountryCode = (countryName) => {
  let country = countries.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );
  if (country) {
    return country.countryCode;
  } else {
    return "country not found";
  }
};
console.log(getCountryCode("australia"));
