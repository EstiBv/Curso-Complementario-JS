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

//FOCUS
let inputForm = document.querySelector(".js-input");
inputForm.addEventListener("focus", () =>
  console.log("[focus]dento del input")
);

//BLUR
inputForm.addEventListener("blur", () => console.log("[blur]fuera del input"));

//KEYDOWN
inputForm.addEventListener("keydown", (ev) =>
  console.log("[keydown]pulsando tecla", String.fromCharCode(ev.keyCode))
);

//KEYPRESS
inputForm.addEventListener("keypress", (ev) =>
  console.log("[keypress]tecla presionada", String.fromCharCode(ev.keyCode))
);

//KEYUP
inputForm.addEventListener("keyup", (ev) =>
  console.log("[keyup]tecla soltada", String.fromCharCode(ev.keyCode))
);
