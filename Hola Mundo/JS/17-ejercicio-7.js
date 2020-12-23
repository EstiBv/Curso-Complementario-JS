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
    "<li>" + number + "x" + number + " = " + number * i + "</br>" + "</li>"
  );
  console.log(i, number * i + number);
}
