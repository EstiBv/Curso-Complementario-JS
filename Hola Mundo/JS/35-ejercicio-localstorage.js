"use strict";

/* 
Crear un formulario que permita añadir peliculas
*/

const formFilms = document.querySelector(".js-form");
const buttonSubmit = document.querySelector(".js-buttonSubmit");
const inputTitleFilms = document.querySelector(".js-inputText");
const listInnerFilms = document.querySelector(".js-filmsList");
// const textInnerFilms = document.querySelector(".js-films");

// Comprobar disponibilidad/compatibilidad del LocalStorage
if (typeof Storage !== "undefined") {
  console.log("compatible LocalStorage ");
} else {
  console.log("No compatible LocalStorage");
}

// Paint Films
function paintFilms() {
  let createList = " ";
  for (let film in localStorage) {
    if (typeof localStorage[film] === "string") {
      let listFilms = document.createElement("li");
      createList = listFilms.append(localStorage[film]);
      listInnerFilms.append(listFilms);
    }
  }
}

// save Films
function saveFilmsLocalStorage() {
  let saveData = inputTitleFilms.value;
  if (saveData.length >= 0) {
    localStorage.setItem(saveData, saveData);
  }
  console.log(localStorage);
  paintFilms();
}

function addFilmsButtonForm(ev) {
  ev.preventDefault();
  saveFilmsLocalStorage();
}
formFilms.addEventListener("submit", addFilmsButtonForm);

// paintFilms();
