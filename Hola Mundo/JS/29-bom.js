"use strict";

// BOM  - Browser Object Model
function getBom() {
  // tamaño ventana usuario
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  // tamaño pantalla usuario
  console.log(screen.height);
  console.log(screen.width);
  // objeto de location (href, port, origin...etc)
  console.log(window.location);
}

function redirect(url) {
  window.location.href = url;
}

function openWindow(url) {
  window.open(url, "", "width= 400", "height= 300");
}
// redirect("https://google.com");
