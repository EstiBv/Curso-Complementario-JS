"use strict";
/*
Mostrar todos los números divisores de un número introducido en un prompt
*/
let number = parseInt(prompt("Introduce un número", 1));
// let divisor = number1 % 2 === 0;
document.write("<h4>Divisores de tu número: " + "</br></h4>");
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    document.write("<li>" + i + "</br>" + "</li>");
  }
}
