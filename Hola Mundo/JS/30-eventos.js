"use strict";

// Mouse Event

// CLICK
let button = document.querySelector(".alert");

// hendler
function activeClick(ev) {
  console.log("me llamaste?", ev);
  changeColorClickBtn();
}

// painter
function changeColorClickBtn() {
  let bgCLickBtn = button.style.background;
  if (bgCLickBtn === "red") {
    button.style.background = "green";
  } else {
    button.style.background = "red";
  }
  return true;
}

// listener
button.addEventListener("click", activeClick);

// MOUSE OVER
button.addEventListener(
  "mouseover",
  () => (button.style.background = "yellow")
);

// MOUSE OUT
button.addEventListener("mouseout", function () {
  button.style.background = "orange";
});
