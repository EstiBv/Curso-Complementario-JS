"use strict";
// fecha y hora
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours();
var minutes = date.getMinutes();
console.log(date);

var textHour =
  ` El año es: ${year}` +
  ` El mes es ${month}` +
  ` El día es: ${day}` +
  ` y son las ${hour}` +
  `:` +
  `${minutes}`;
console.log(textHour);
console.log(parseInt(Math.random() * 10));
