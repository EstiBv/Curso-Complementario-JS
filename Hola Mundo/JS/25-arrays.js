"use strict";

// Arrays - arreglos - matrices

let name = "LliLles";
let names = [" Llilles", " Esti", " Estitxu", " Estíbaliz"];

var languages = new Array("PHP", " JS", " Go", " Java", " C#,");

// var element = parseInt(prompt("Qué elemento del array quiero?", 0));
// if (element >= names.length) {
//   alert("No se ha encontrado ese elemento");
// } else {
//   alert("El nombre seleccionado es: " + names[element]);
// }

//Mostrar array
// document.write("Lenguajes de programación de 2018 ", languages);

// //Iterar array : for of, for in, forEach
for (const name of names) {
  document.write(name);
}

for (const name in names) {
  let show = document.write(name + names);
}
console.log(show);

languages.forEach((element, index) => {
  document.write("<li>" + index + element + "</li>");
});
