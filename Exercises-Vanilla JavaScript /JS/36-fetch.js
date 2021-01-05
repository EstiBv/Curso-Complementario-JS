"use strict";

// Fetch (ajax) y peticiones a servicios  /  api rest

const divUsers = document.querySelector(".js-users");
const divUser = document.querySelector(".js-titles");
const divTeacher = document.querySelector(".js-teacher");
const spanLoading = document.querySelector(".js-loading");
const spanLoading2 = document.querySelector(".js-loading2");

// let users = [];
getUsers()
  .then((data) => data.json())
  .then((users) => {
    // users = data;
    usersList(users);

    return getInfoTeacher();
  })

  .then((data) => {
    console.log(data);
    divTeacher.innerHTML = data;

    return getUser();
  })
  .then((data) => data.json())
  .then((user) => {
    userSigle(user);
  })

  .catch((error) => {
    console.log("error");
  });

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1/posts");
}

function getInfoTeacher() {
  let teacher = {
    name: "Perica",
    surname: "Gómez",
    url: "https://pericagomez.es",
  };

  return new Promise((resolve, reject) => {
    let teacher_user = "";

    setTimeout(function () {
      teacher_user = JSON.stringify(teacher);
      if (typeof teacher_user !== "string" || teacher_user === " ") {
        console.log(teacher);
        return reject("error 1");
      } else {
        return resolve(teacher_user);
      }
    }, 3000);
  });
}

const usersList = (users) => {
  users.map((user, i) => {
    let name = document.createElement("h3");

    name.innerHTML =
      i + " " + "Name: " + user.name + " Username: " + user.username;

    divUsers.appendChild(name);

    spanLoading.style.display = "none";
  });
};

const userSigle = (user) => {
  user.map((userSingle, i) => {
    let nameUser = document.createElement("h3");

    nameUser.innerHTML = i + " " + "Title: " + userSingle.title;
    divUser.appendChild(nameUser);

    spanLoading2.style.display = "none";
  });
};
