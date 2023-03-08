// popup boxes(BOM)
// 1.alart
// 2.confirm
// 3.prompt

//confirm

// function deleteSomething() {
//   let value = confirm("are you sure you want to delete this?");
//   if (value) {
//     console.log("deleted");
//   } else {
//     console.log("not deleted");
//   }
// }
// deleteSomething();

//prompt

function welcomeMessage() {
  const h1 = document.createElement("h1");
  let text;

  const name = prompt("enter your name");
  if (name == null || name == "") {
    text = "no name found";
  } else {
    text = "welcome " + name;
  }
  let textNode = document.createTextNode(text);
  h1.appendChild(textNode);
  document.body.appendChild(h1);
}
welcomeMessage();
