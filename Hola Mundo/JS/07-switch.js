"use strict";

// Switch
var age = 25;
var printed = "";
switch (age) {
  case 18:
    printed = "Felicidades";
    break;
  case 25:
    printed = "Adulto";
    break;
  case 40:
    printed = "Crisis";
    break;
  case 65:
    printed = "Jubilado!";
    break;
  default:
    printed = "Edad neutra";
    break;
}
console.log(printed);
