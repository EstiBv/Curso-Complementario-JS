"use strict";

//Timers

const loader = window.addEventListener("load", () => {
  // SET INTERVAL

  function buttonStart() {
    let tempForTitle = setInterval(() => {
      let title = document.querySelector("h1");
      console.log(tempForTitle);
      if (title.style.fontSize === "30px") {
        title.style.fontSize = "25px";
      } else {
        title.style.fontSize = "30px";
      }
    }, 1000);

    return tempForTitle;
  }

  let tempForTitle = buttonStart();

  // SET TIME OUT (once)
  let tempForParagrahp = setTimeout(() => {
    let paragraph = document.querySelector("p");
    paragraph.style.color = "red";
  }, 1500);

  // CLEARINTERVAL

  let stop = stopInterval();
  function stopInterval() {
    let stopButton = document.querySelector(".stop");
    stopButton.addEventListener("click", () => {
      alert("¿Quieres parar el intervalo en bucle?");
      clearInterval(tempForTitle);
      console.log(stop);
    });
    return tempForTitle;
  }

  let startButton = document.querySelector(".start");

  startButton.addEventListener("click", () => {
    alert("¿Quieres inciar el intervalo en bucle?");
    buttonStart(tempForTitle);
  });
});
