"use strict";

/*
Una calculadora:
1- Pida los numeros por pantalla
2- Numero correcto, sino vuelve a pedir
3-En el cuerpo de la pagina:  el resultado de sumar, restar, multiplicar y dividir las dos cifras iniciales en un alert y por consola. 
*/

let number1 = parseInt(prompt("Introduce el primer número", 0));
let number2 = parseInt(prompt("Introduce el segundo número", 0));

let input = document.write(
  " <h2>Calculadora </br></h2> <h5>Números introducidos</br></h5>" +
    number1 +
    " </br>" +
    number2
);

let sum = number1 + number2;
let rest = number1 - number2;
let div = number1 / number2;
let mult = number1 * number2;

while (isNaN(number1) || isNaN(number2) || number1 < 0 || number2 < 0) {
  number1 = parseInt(prompt("Introduce el primer número", 0));
  number2 = parseInt(prompt("Introduce el segundo número", 0));
}

let result =
  "<p> Resultado de suma: " +
  sum +
  "</p> " +
  "<p> Resultado de resta: " +
  rest +
  "</p>" +
  "<p> Resultado de división: " +
  div +
  "</p>" +
  "<p> Resultado de multiplicación: " +
  mult +
  "</p>";

document.write(result);
