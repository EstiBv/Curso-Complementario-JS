"use strtict";

//DOM - Document Object Model

let box = document.querySelector("#js-box");

function changeColor(color) {
  box.style.background = color;
}

// CONSEGUIR ELEMENTOS CON ID CONCRETO
// let box = document.getElementById("js-box");

box.innerHTML = "Que tal?";
// html
box.className = "js-box";

// css
box.style.background = "red";
box.style.padding = "20px";
box.style.color = "white";

// CONSEGUIR ELEMENTOS POR SU ETIQUETA
let allLabels = document.getElementsByTagName("div");
let textDiv2 = allLabels[1].textContent;
allLabels[1].innerHTML = "Otro texto para este div en concreto";
// console.log(allLabels, textDiv2);

for (const valueLabel in allLabels) {
  if (typeof allLabels[valueLabel].textContent === "string") {
    let paragrapah = document.createElement("p");
    let text = document.createTextNode(allLabels[valueLabel].textContent);
    paragrapah.append(text);
    document.querySelector("#mainSection").appendChild(paragrapah);
  }
}

// CONSEGUIR ELEMENTOS POR SU CLASE CSS
const divFirst = document.getElementsByClassName("first");

console.log(divFirst);
