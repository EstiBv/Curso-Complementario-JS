"use strict";

let categories = ["Action", "Comedy", "Romantic"];
let films = ["Gran Torino", "La vida es Bella", "La verdad duele"];

let cinema = [categories, films];
console.log(cinema[0][1]);

// AÑADE un elemento
categories.push("Thriller");

// ELIMINA
let addYourFilmsFavourites;

// do {
//   addYourFilmsFavourites = prompt("Añade tus películas favoritas");
//   films.push(addYourFilmsFavourites);
// } while (addYourFilmsFavourites != "ACABAR");

//eliminar el ultimo elemento
films.pop();
console.log(films);

// eliminar el indicado por indice
let deleteRomantic = categories.indexOf("Romantic");
console.log(deleteRomantic);
console.log(categories);

if (deleteRomantic != -1) {
  categories.splice(deleteRomantic, 1);
}
console.log(categories);

// TRANSFORMAR : array a texto y lo separa por comas
let stringFilms = films.join();
console.log(stringFilms);

// string en un array

let textsList = "text0, text1, text3, text4";
// las comas como parametro hace que haya un indice, sino es un array de un unico indice
let coverText = textsList.split(", ");
console.log(coverText);

// ORDENAR ARRAY
let orderArray = films.sort();
let reverseArray = films.reverse();
