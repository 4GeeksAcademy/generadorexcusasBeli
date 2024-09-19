/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["Mi Hamster", "Mi abuelita", "Super Man", "shakira"];
  let action = ["comio", "Vomito sobre", "robo", "lloro sobre"];
  let what = ["mi tarea", "mi despertador", "mi laptop"];
  let when = [
    "al despertar",
    "mientras saltaba de un avion",
    "durante una persecucion policial",
    "mientras conducia",
    "cuando pestañe"
  ];

  function getRandom(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }
  let excusa = `
  ${getRandom(who)}
  ${getRandom(action)}
  ${getRandom(what)}
  ${getRandom(when)}
  `;
  console.log(excusa);
  document.getElementById("excusa").innerHTML = excusa;
};
