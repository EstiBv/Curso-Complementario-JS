"use strict";
// Condicional if > estructura (básica) de control comparativo

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
