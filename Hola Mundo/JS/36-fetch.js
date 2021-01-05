"use strict";

// Fetch (ajax) y peticiones a servicios  /  api rest

const divUsers = document.querySelector(".js-users");
const divUser = document.querySelector(".js-titles");
const spanLoading = document.querySelector(".js-loading");
const spanLoading2 = document.querySelector(".js-loading2");

// let users = [];
getUsers()
  .then((data) => data.json())
  .then((users) => {
    // users = data;
    usersList(users);

    return getUser();
  })
  .then((data) => data.json())
  .then((user) => {
    userSigle(user);
    console.log(user);
  });

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}

const getUser = () => {
  return fetch("https://jsonplaceholder.typicode.com/users/1/posts");
};

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
