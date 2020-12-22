"use strict";

// Operadores + , -, *, %
var number1 = 7;
var number2 = 12;
var sum = number1 + number2;

// alert("El resultado de la operación es " + sum);

// Tipos de datos

var number = 44;
var string = "Hola, holita";
var booleanTrueOrFalse = true;

// Funciones para transformar tipos de datos

var falseNumber = "33";

console.log(falseNumber + number1);
console.log(Number(falseNumber) + number1);
console.log(parseInt(falseNumber) + number1);

falseNumber = "33.3";
console.log(parseFloat(falseNumber) + number1);
console.log(String(number1) + falseNumber);
