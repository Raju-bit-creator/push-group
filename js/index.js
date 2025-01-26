// confirm("are you okay?");
// let answer = confirm("are you okay?");
// console.log("are you oaky?", answer);
// if (answer) {
//   console.log("now you are friend with xyz");
// } else {
//   console.log("now you are not friend with xyz");
// }
// alert("virus detected");
const number = prompt("enter your age");
console.log("your age is", number);

const menuIcon = document.getElementById("menu-icon");
const dropdown = document.getElementById("dropdown");

// Toggle dropdown visibility on click
menuIcon.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

// Close dropdown if clicked outside
document.addEventListener("click", (event) => {
  if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});
