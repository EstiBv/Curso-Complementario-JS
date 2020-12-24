"use strict";
// Metodos para transformar cadenas

let number = 44;
let text1 =
  "Enim eiusmod diodeno dolor va usté muy cargadoo ut ut officia sit amet nisi no te digo trigo por no llamarte Rodrigor";
let text2 = "Tiene musho peligro.";

const date = number.toString();
console.log(date);

// Transformar textos
const capitalLetterText = text1.toUpperCase();
const tinyText = text1.toLocaleLowerCase();

console.log(capitalLetterText, " ", tinyText);

// Calcular longitud
const lengthText = text1.length;
console.log(lengthText);

const elementList = [1, 2, 3];
console.log(elementList.length);

// Concatenar
let totalText = text1 + ". " + text2;
console.log(totalText);

totalText = text1.concat("." + text2);
console.log(totalText);

// Búsquedas
var lookingForAword = text1.indexOf("usté");
console.log(lookingForAword);

var searchAWord = text1.search("usté");
console.log(searchAWord);

lookingForAword = text1.lastIndexOf("no");
console.log(lookingForAword);

/*
busca mas coincidencias entre barras para hacer una regEx + g ó gi (global index)
*/
searchAWord = text1.match(/no/g);
console.log(searchAWord);

/*
busca desde el carácter 14, 5 letras en adelante
*/
searchAWord = text2.substr(14, 5);
console.log(searchAWord);

/*
sacar una letra en concreto por posicion
*/
searchAWord = text2.charAt(3);
console.log(searchAWord);

/*
buscar texto en específico al inicio, devuelve true o false. 
Lo mismo pero al final con endWith();
*/
searchAWord = text2.startsWith("pecadorrl");
console.log(searchAWord);

/*
buscar una palabra exacta
*/
searchAWord = text2.includes("Tiene");
console.log(searchAWord);
