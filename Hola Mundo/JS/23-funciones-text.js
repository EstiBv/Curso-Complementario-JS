"use strict";

let text1 =
  "Enim eiusmod diodeno dolor va usté muy cargadoo ut ut officia sit amet nisi no te digo trigo por no llamarte Rodrigor";
let text2 = "Tiene musho peligro.";

// Metodos para strings
let number = 44;
const date = number.toString();

// TRANSFORMAR TEXTOS
const capitalLetterText = text1.toUpperCase();
const tinyText = text1.toLocaleLowerCase();

console.log(capitalLetterText, " ", tinyText);

// CALCULAR LONGITUD
const lengthText = text1.length;

const elementList = [1, 2, 3];
console.log(elementList.length);

// CONCATENAR
let totalText = text1 + ". " + text2;
totalText = text1.concat("." + text2);

// BÚSQUEDAS
var lookingForAword = text1.indexOf("usté");

var searchAWord = text1.search("usté");
lookingForAword = text1.lastIndexOf("no");

//busca mas coincidencias entre barras para hacer una regEx + g ó gi (global index)
searchAWord = text1.match(/no/g);

//busca desde el carácter 14, 5 letras en adelante
searchAWord = text2.substr(14, 5);

//sacar una letra en concreto por posicion
searchAWord = text2.charAt(3);

//buscar texto en específico al inicio, devuelve true o false. Lo mismo pero al final con endWith();
searchAWord = text2.startsWith("pecadorrl");

//buscar una palabra exacta
searchAWord = text2.includes("Tiene");

// REEMPLAZAR
var replaceText = text2.replace("Tiene", "Fistro tiene");

//recorta los seis primeros caracteres
var sliceText = text2.slice(6);
console.log(sliceText);

//recorta las palabras y las mete en array, y si ponemos espacio, separa las palabras
var spliceText = text2.split(" ");
console.log(spliceText);

//recorta espacios sobrantes delantes y detras
let text3 = "    va usté muy cargadoo   ";
var trimText = text3.trim();
console.log(trimText);
