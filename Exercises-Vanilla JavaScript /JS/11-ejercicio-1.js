"use strict";

/* Programa que pida dos numeros y que pida cual es el mayor, el menor y si son iguales
PLUS: si los números son letras o >= 0, nos vuelve a pedir los datos
 */

let number1 = parseInt(prompt("Introduce un numero", 0));
let number2 = parseInt(prompt("Introduce un segundo número", 0));

console.log(number1, number2);
while (number1 <= 0 || number2 <= 0 || isNaN(number1) || isNaN(number2)) {
  number1 = parseInt(prompt("Introduce un numero", 0));
  number2 = parseInt(prompt("Introduce un segundo número", 0));
}

if (number1 === number2) {
  alert("Los números son iguales");
} else if (number1 > number2) {
  alert("Tu número mayor es: " + number1);
  alert("Tu número menor es: " + number2);
} else if (number2 > number1) {
  alert("Tu número mayor es: " + number2);
  alert("Tu número menor es: " + number1);
}
