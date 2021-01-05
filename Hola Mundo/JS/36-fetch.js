"use strict";

// Fetch (ajax) y peticiones a servicios  /  api rest
let users = [];

const divUsers = document.querySelector(".js-users");
const spanLoading = document.querySelector(".js-loading");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((data) => {
    users = data;
    console.log(users);

    users.map((user, i) => {
      let name = document.createElement("h2");
      name.innerHTML =
        i + " " + "Name: " + user.name + " Username: " + user.username;

      divUsers.appendChild(name);

      spanLoading.style.display = "none";
    });
  });
