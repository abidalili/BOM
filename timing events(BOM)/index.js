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

// saveButton.addEventListener("click", saveUser);

// function saveUser() {
//   mesasge.textContent = "user registration successful";

//   setTimeout(() => {
//     mesasge.textContent = "";
//   }, 2000);
// }

// saveButton.addEventListener("click", startCount);
// function startCount() {
//   let count = 0;
//   mesasge.textContent = count;

//   setInterval(() => {
//     count++;
//     mesasge.textContent = count;
//   }, 1000);
// }

saveButton.addEventListener("click", startClock);

function startClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = formatTime(hours);
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);

  let time = hours + ":" + minutes + ":" + seconds;

  mesasge.textContent = time;

  setInterval(startClock, 1000);
}

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
