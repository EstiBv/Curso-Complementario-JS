"use strict";
// Alert
alert("Alerta!!");
alert("Puede que su sistema tenga un virus");

// Confirm
var result = confirm("¿Estás seguro que es un troleo?");
// según evento de usuario devuelve true o false
console.log(result);

// Ingreso de datos
// Parámetros(Label, dato numérico en string(like a placeholder))
var result1 = prompt("Ingresa tu nombre", 0);
console.log(parseInt(result1));
