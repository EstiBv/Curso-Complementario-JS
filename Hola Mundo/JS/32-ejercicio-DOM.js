"use strict";
// formulario
const submit = document.querySelector(".form");
// campos formulario
const eachInput = document.querySelectorAll(".js-input");
// párrafos
const nameP = document.querySelector(".js-resultName");
const surnameP = document.querySelector(".js-resultSurname");
const ageP = document.querySelector(".js-resultAge");
// botón de mostrar
const buttonShowResults = document.querySelector(".buttonShow");

for (const input of eachInput) {
  input.addEventListener("keyup", listenInputs);
}

let inputsFilled = [];

function listenInputs() {
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const age = document.querySelector("#age").value;
  nameP.innerHTML = name;
  surnameP.innerHTML = surname;
  ageP.innerHTML = age;

  function showDataInputs() {
    let allData = name + surname + age;
    inputsFilled.push(allData);
    alert("Compruebe que sus datos están correctos: " + allData);
  }
  buttonShowResults.addEventListener("click", showDataInputs);
}

function submitForm(ev) {
  ev.preventDefault();
}
submit.addEventListener("submit", submitForm);
