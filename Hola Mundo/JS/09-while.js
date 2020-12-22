"use strict";

// While (Si añadimos break, para de iterar)
let year = 2018;
while (year <= 2030) {
  // añadir operador para que no sea infinito y corte la ejecución del bucle
  year++;
  console.log(year);
}

// Do while
let years = 6;
do {
  alert("Solo cuando sea mayor o igual a 6");
  // si no igualamos la condición la repetición es infinita
  years--;
  console.log(years);
} while (years >= 4);

//
