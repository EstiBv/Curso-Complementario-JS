"use strict";

// Funciones

function greet() {
  return "Hola";
}
greet();

// Parámetros
function calculator(number1, number2) {
  console.log("suma: " + (number1 + number2));
  console.log("resta: " + (number1 - number2));
  console.log("multiplicación: " + number1 * number2);
  console.log("división: " + number1 / number2);
  console.log("****************************");

  return "Hola soy la calculadora";
}
// calculator(12, 8);
// calculator(10, 5);

for (let i = 0; i <= 5; i++) {
  calculator(i, 10);
  console.log(i, 10);
}
