"use strict";

/* 
Crear un formulario que permita añadir peliculas
*/

const formFilms = document.querySelector(".js-form");
const buttonSubmit = document.querySelector(".js-buttonSubmit");
const inputTitleFilms = document.querySelector(".js-inputText");

const formFilmsRemove = document.querySelector(".js-formRemove");
const buttonRemove = document.querySelector(".js-buttonRemove");
const inputTitleFilmsRemove = document.querySelector(".js-inputTextRemove");

const listInnerFilms = document.querySelector(".js-filmsList");

// Check LocalStorage Availability / Compatibility
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

// Save Films
function saveFilmsLocalStorage() {
  let saveData = inputTitleFilms.value;
  if (saveData.length >= 1) {
    localStorage.setItem(saveData, saveData);
  }
  console.log(localStorage);
  paintFilms();
}

// Remove favoriteFilms
function removeFilmsLocalStorage() {
  let deleteData = inputTitleFilmsRemove.value;
  if (deleteData >= 1) {
    localStorage.removeItem(deleteData, deleteData);
  }
  paintFilms();
  console.log("ha", deleteData);
}

// Event
function removeFilmsButton(ev) {
  ev.preventDefault();
  removeFilmsLocalStorage();
}
buttonRemove.addEventListener("click", removeFilmsButton);

function addFilmsButton(ev) {
  ev.preventDefault();
  saveFilmsLocalStorage();
  localStorage.clear();
}
formFilms.addEventListener("submit", addFilmsButton);
