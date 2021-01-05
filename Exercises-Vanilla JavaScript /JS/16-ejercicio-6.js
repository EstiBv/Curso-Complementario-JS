"use strict";
/*
Hacer un programa que nos diga si un numero es par o impar.
Requisitos: 
 1. Ventana prompt
 2. Si un numero no es valido que pida de nuevo el numero
 3. Si es par o impar
*/

var number = parseInt(prompt("Introduce un número", 0));

while (isNaN(number)) {
  number;
}
if (number % 2 === 0) {
  alert("tu número es par: " + number);
} else alert("tu número es impar: " + number);
