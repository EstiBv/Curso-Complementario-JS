"use strict";
/* 
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
 */

let number1 = parseInt(prompt("Introduce el primer número", 0));
let number2 = parseInt(prompt("Introduce el segundo número", 0));

if (number2 <= number1) {
  document.write("El primer número ha de ser menor que el segundo");
} else {
  document.write(
    "<h2>Los numeros impares entre " +
      number1 +
      " y " +
      number2 +
      " son éstos:</h2>"
  );
  for (let i = number1; i <= number2; i++) {
    let impar = i % 2 === 1;
    if (impar === true) {
      document.write(i + " </br>");
    }
  }
}
