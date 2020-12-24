"use strict";

// Funciones

function greet() {
  return "Hola";
}
greet();

// Funciones dentro de funciones

function byConsole(number1, number2, show = false) {
  console.log("suma: " + (number1 + number2));
  console.log("resta: " + (number1 - number2));
  console.log("multiplicación: " + number1 * number2);
  console.log("división: " + number1 / number2);
  console.log("****************************");
  console.log(show);
}

function byScreen(number1, number2) {
  document.write("suma: " + (number1 + number2) + "</br>");
  document.write("resta: " + (number1 - number2) + "</br>");
  document.write("multiplicación: " + number1 * number2 + "</br>");
  document.write("división: " + number1 / number2 + "</br>");
  document.write("****************************" + "</br>");
}

// Parámetros
function calculator(number1, number2, show = false) {
  if (show === false) {
    byConsole(number1, number2);
  } else {
    byScreen(number1, number2);
  }
  return true;
}

calculator(12, 8);
calculator(10, 5, true);

// for (let i = 0; i <= 5; i++) {
//   calculator(i, 10);
//   console.log(i, 10);
// }

//Parametros opcionales ( >> ej: show << )

/*
 Parámetros que vienen inicializados  y si los pasamos es opcional. Se pueden hacer funciones mas interesantes 
*/
