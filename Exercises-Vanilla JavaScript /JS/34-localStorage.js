"use strict";

// LOCALSTORAGE

// Comprobar disponibilidad/compatibilidad del LocalStorage

if (typeof Storage !== "undefined") {
  console.log("compatible LocalStorage ");
} else {
  console.log("No compatible LocalStorage");
}

//Guardar datos en el LocalStorage >> Application >>  (key("title"), value("Respaso Integral de JS" ))
localStorage.setItem("title", "Respaso Integral de JS ");

// Recuperar datos del LocalStorage
// localStorage.getItem("title");
document.querySelector(".js-films").innerHTML = localStorage.getItem("title");
console.log(localStorage.getItem("title"));

// Guardar objeto en el LocalStorage
let user = {
  name: "User1",
  email: "user1@User1.com",
  web: "user1web.es",
};
// Convertir el objeto en string
localStorage.setItem("user", JSON.stringify(user));

// Recuperar datos del LocalStorage
let userData = JSON.parse(localStorage.getItem("user"));
document.querySelector(".js-data").append(userData.web + " " + userData.email);
console.log(userData);

// Borrar elementos del LocalStorage
localStorage.removeItem("user");
localStorage.clear();
