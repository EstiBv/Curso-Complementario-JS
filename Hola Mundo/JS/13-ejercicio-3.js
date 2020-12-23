"use strict";

/* Hacer un programa que muestre todos los números entre dos números introducidos por el usuario*/

let number1 = parseInt(prompt("Introduce el primer número", 0));
let number2 = parseInt(prompt("Introduce el segundo número", 0));

document.write(
  "<h2>Entre " + number1 + " y " + number2 + " hay éstos números:</h2>"
);
for (let i = number1; i <= number2; i++) {
  document.write(i + " </br>");
}
