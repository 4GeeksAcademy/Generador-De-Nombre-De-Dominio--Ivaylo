/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

// Obtenemos el contenedor donde se insertarán los nombres de dominio
let domainContainer = document.getElementById("domain-list");

pronoun.forEach(p => {
  adj.forEach(a => {
    noun.forEach(n => {
      let domainName = p + a + n + ".com";
      // Creamos un nuevo elemento HTML para cada dominio
      let listItem = document.createElement("li");
      listItem.textContent = domainName;
      // Añadimos el elemento al contenedor
      domainContainer.appendChild(listItem);
    });
  });
});
