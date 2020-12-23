"use strict";

/* Utilizando un bucle, mostrar la suma y la media de los números introducidos por el usuario. Cuando el usuario introduzca un número negativo, mostar el resultado*/

var sum = 0;
var counter = 0;

do {
  var num = parseInt(
    prompt("Introduce números hasta que introduzcas uno negativo", 0)
  );
  if (isNaN(num)) {
    num = 0;
  } else if (num >= 0) {
    sum += num;
    counter++;
  }
  console.log(sum);
  console.log(counter);
} while (num >= 0);

alert("La suma de todos los número es " + sum);
alert("La media de todos los número es " + sum / counter);
