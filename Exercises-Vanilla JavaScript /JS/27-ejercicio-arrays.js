"use strict";
/*
Programa que:
1.Pide 6 números por pantalla y los mete en array
2.Tiene que mostrar el array entero (todos sus elementos, en el cuerpo de la pág y de la consola)
3.Sacar el array ordenado y mostrarlo
4.Invertir su orden y mostrarlo 
5.Mostrar cuantos elementos tiene el array

6.Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice 
7.(valorar el uso de funciones)
*/

// 1.Pide 6 números por pantalla y los mete en array

let textTemplate = "<h4>Los números introducidos son: </h4>";
let numberList = [];
const askNumbers = () => {
  for (let i = 0; i < 6; i++) {
    // numberList.push(parseInt(prompt()))
    numberList[i] = parseInt(prompt("Introduce un número", 0));
    document.write("<li> " + numberList[i] + "</li>" + "<br >");
  }
  console.log(numberList);
  // callback para orden numerico, si no string
  const orderNumbers = numberList.sort(function (a, b) {
    return a - b;
  });
  document.write(
    " <h5>Orden ascendente </h5>" + "<br >" + orderNumbers + "<br >"
  );

  const orderReverseNumbers = numberList.reverse(function (a, b) {
    return b - a;
  });
  document.write(
    " <h5>Orden descendente </h5>" + "<br >" + orderReverseNumbers + "<br >"
  );

  const numberListLength = numberList.length;
  document.write(
    "<h5>Total de números introducidos </h5>" + numberListLength + "</br>"
  );
  console.log(numberListLength);

  const searcher = numberList.some((number) => number === 5);
  if (searcher === true) {
    prompt("Enhorabuena! el número 5 tiene un !!!PREMIO!!! ");
  } else {
    document.write(
      " <h5> Si uno de tus números coincide con alguno de nuestros números seleccionados, te llevarás un premio </h5>" +
        "<br >"
    );
  }
};
console.log(numberList);
askNumbers();
