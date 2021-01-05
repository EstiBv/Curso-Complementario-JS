"user-strict";

// código suscpetible a fallo, entre >> try y catch <<

try {
  let year = 2021;
  alert(year);

  console.log(
    // método para url codificadas, parámetros get codificados, etc.
    decodeURIComponent(
      "https://www.google.com/search?q=google&oq=google&aqs=chrome.0.69i59l2j69i60l3j69i65l2j69i60.2119j0j7&sourceid=chrome&ie=UTF-8"
    )
  );
} catch (error) {
  console.log(error);
  alert("Ha ocurro un error");
}
