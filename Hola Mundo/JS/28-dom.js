"use strtict";

// let box = document.getElementById("js-box");

let box = document.querySelector("#js-box");

function changeColor(color) {
  box.style.background = color;
}

box.innerHTML = "Que tal?";

// html
box.className = "js-box";

// css
box.style.background = "red";
box.style.padding = "20px";
box.style.color = "white";

console.log(box);
