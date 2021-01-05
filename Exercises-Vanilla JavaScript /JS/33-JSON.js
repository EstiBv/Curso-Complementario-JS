"use strict";

// JSON - JavaScript Object Notation

let aFilm = {
  title: "Batman vs Superman",
  year: 2017,
  country: "EE.UU",
};
aFilm.title = "Superman vs Batman";
console.log(aFilm.title);

let films = [{ title: "Batman vs Superman", year: 2017, country: "EE.UU" }];

const boxFilms = document.querySelector(".js-films");
for (let film of films) {
  let p = document.createElement("p");
  p.append(film.title + " " + film.year);
  boxFilms.append(p);
  console.log(film.title);
}
