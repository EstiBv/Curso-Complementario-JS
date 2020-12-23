"use strict";
/*
Tabla de multiplicar de un número introducido por pantalla
 */

let number = parseInt(
  prompt("Introduce un número y obtendrás su tabla de multiplicar", 0)
);

document.write(
  "<h4><ul>Tabla de multiplicar de: " + number + "</br></ul></h4>"
);

for (let i = 0; i <= 10; i++) {
  document.write(
    "<li>" + number + "x" + i + " = " + number * i + "</br>" + "</li>"
  );
}

document.write("<h4>Todas las tablas " + "</br></h4>");
// Todas las tablas

for (let a = 0; a <= 10; a++) {
  document.write("<h4><ul>Tabla del: " + a + "</br></ul></h4></br> ");
  for (let i = 0; i <= 10; i++) {
    document.write("<li>" + a + "x" + i + " = " + a * i + "</br>" + "</li>");
  }
}
