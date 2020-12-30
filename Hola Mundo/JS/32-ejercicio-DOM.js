"use strict";
// formulario
const submit = document.querySelector(".form");
// campos formulario
const eachInput = document.querySelectorAll(".js-input");
// secction muestra resultado datos
const containerData = document.querySelector(".results");
containerData.style.display = "none";
// párrafos
const nameP = document.querySelector(".js-resultName");
const surnameP = document.querySelector(".js-resultSurname");
const ageP = document.querySelector(".js-resultAge");

// Listener Inputs
for (const input of eachInput) {
  input.addEventListener("keyup", handleInputs);
}

// Handle Inputs
function handleInputs() {
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const age = parseInt(document.querySelector("#age").value);

  console.log(name, surname, age);

  if (name.trim() === null || name.trim().length === 0) {
    alert("El nombre introducido no es correcto");
    return false;
  }

  if (surname.trim() === null || surname.trim().length === 0) {
    alert("El apellido introducido no es correcto");
    return false;
  }

  if (age === null || age <= 0 || isNaN(age)) {
    alert("La edad introducido no es correcto");
    return false;
  }

  // Paint data
  submit.addEventListener("submit", () => {
    containerData.style.display = "block";

    nameP.innerHTML = name;
    surnameP.innerHTML = surname;
    ageP.innerHTML = age;
  });
}
