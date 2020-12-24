"use strict";

// Funciones anonimas

const film = function (name) {
  return "Name's film is " + name;
};

// Callback = una funcion que ejecuta otra funcion dentro

function add(number1, number2, addAndShow, addByTow) {
  let sum = number1 + number2;
  addAndShow(sum);
  addByTow(sum);
  return sum;
}

add(
  5,
  7,
  function (dato) {
    console.log("la suma de los parametros previos es: " + dato);
  },
  function (dato) {
    console.log("la suma por dos de los mismos: " + dato * 2);
  }
);