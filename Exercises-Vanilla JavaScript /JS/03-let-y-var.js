"use strict";

// let y var

//  Prueba con var
var number = 40;
console.log(number); //valor 40

if (true) {
  number = 50;
  console.log(number); // valor 50
}

console.log(number); // valor 50

// Prueba con let
var text = "Repaso integral de JS";
console.log(text); //valor integral

if (true) {
  let text = "Repaso de conceptos";
  console.log(text); // valor conceptos
}

console.log(text);
