"use strict";

// Plantillas de texto

var nickName = prompt("Introduce tu nombre");
var surName = prompt("Introduce tu apellido");

// var text = "my name is " + nickName + " and my surmane is " + surName;
var text = ` <h1>Hola qué tal</h1>
<h3>mi nombre es ${nickName}</h3>
<h3>mi apellido es ${surName}</h3>
`;

document.write(text);
