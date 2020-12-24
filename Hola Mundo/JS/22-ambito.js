"use strict";
// Scope

let text =
  "Ese que llega pecador al ataquerl se calle ustée diodenoo está la cosa muy malar amatomaa.";

function holaMundo(text) {
  let number = 9;
  console.log(text);
  console.log(number.toString());
}

holaMundo(text);
console.log(number); // error - number is not defined in general scope
