// js BOM
//  timing events method
//  setTimeout(), setInterval()

// setTimeout(() => {
//   console.log("hello");
// }, 3000);

// setTimeout(display, 2000);

// function display() {
//   console.log("display function");
// }

// function displayInterval() {
//   console.log("hello");
//};

const saveButton = document.querySelector(".save-button");
const mesasge = document.querySelector(".message");

saveButton.addEventListener("click", saveUser);

function saveUser() {
  mesasge.textContent = "user registration successful";

  setTimeout(() => {}, 2000);
}
