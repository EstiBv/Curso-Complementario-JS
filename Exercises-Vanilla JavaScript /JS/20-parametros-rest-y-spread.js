"use strict";
// Parámetros REST

function listFruits(fruit1, fruit2, ...restFruits) {
  console.log("Fruit 1: ", fruit1);
  console.log("Fruit 2: ", fruit2);

  console.log(restFruits);
}

listFruits(
  "orange",
  "apple",
  "watermelon",
  "pear",
  "peach",
  "tangerine",
  "banana",
  "custard apple",
  "pomegranate",
  "pineapple"
);

// Parámetros SPREAD

let fruits = ["orange", "apple"];
listFruits(
  ...fruits,
  "watermelon",
  "pear",
  "peach",
  "tangerine",
  "banana",
  "custard apple",
  "pomegranate",
  "pineapple"
);
