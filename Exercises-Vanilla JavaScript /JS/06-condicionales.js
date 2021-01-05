"use strict";
// Condicional if > estructura (básica) de control comparativo + operadores relacionales

var age1 = 30;
var name1 = "Mar";
if (age1 > 18 || age1 === 18) {
  console.log("Mayor de edad");
  if (age1 === 30) {
    console.log("Te empiezan a considerar viejx");
  } else if (age1 >= 65) {
    console.log("A qué huele la jubilación?");
  } else {
    console.log("¿son los nuevos 20?");
  }
} else {
  console.log("Aún no puede");
}

// Operadores lógicos

//And
var year = 2018;
if (year > 2000 && year <= 2020 && year != 2021) {
  console.log("Actual Era");
} else {
  console.log("PostModerm Era");
}

//Or , si una condicion está entre paréntesis, toma mas peso ésta y se puede concatenar mas operadores
if (year === 2008 || (year >= 2018 && year === 2028)) {
  console.log("piensa un dicho que rime con 8");
} else {
  console.log("año no registrado");
}

//Switch
