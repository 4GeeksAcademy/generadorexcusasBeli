/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "Mi Hamster",
    "Mi abuelita",
    "Super Man",
    "shakira",
    "robin jood",
    "susana gimenez"
  ];
  let action = [
    "comio",
    "vomito sobre",
    "robo",
    "lloro sobre",
    "rompio",
    "hackeo"
  ];
  let what = [
    "mi proyecto",
    "mi despertador",
    "mi laptop",
    "mis planos",
    "mi agenda"
  ];
  let when = [
    "Cuando Desperto",
    "mientras saltaba en para caidas",
    "durante una persecucion policial",
    "mientras conducia a gran velocidad",
    "cuando pestañe durante un tiroteo",
    "mientras un perro me corria y samuel comia un pudding,"
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
