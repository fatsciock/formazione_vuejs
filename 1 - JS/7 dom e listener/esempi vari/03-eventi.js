document.getElementById("cambiaColore").addEventListener("click", () => {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

let img = document.getElementById("immagine");
img.addEventListener("mouseover", () => {
  img.style.width = "300px";
});

img.addEventListener("mouseout", () => {
  img.style.width = "100px";
});

document.getElementById("mioForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let campo = document.getElementById("campo").value;
  if (campo.trim() === "") {
    // gestione errore
    alert("Il campo non può essere vuoto!");
  } else {
    alert("Hai scritto: " + campo);
  }
});








































































// Cambiare colore body al click
// document.getElementById("cambiaColore").addEventListener("click", () => {
//   document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
// });

// Ingrandire immagine al mouseover
// let img = document.getElementById("immagine");
// img.addEventListener("mouseover", () => {
//   img.style.width = "200px";
// });
// img.addEventListener("mouseout", () => {
//   img.style.width = "100px";
// });

// Validazione form
// document.getElementById("mioForm").addEventListener("submit", (event) => {
//   event.preventDefault();
//   let campo = document.getElementById("campo").value;
//   if (campo.trim() === "") {
//     alert("Il campo non può essere vuoto!");
//   } else {
//     alert("Hai scritto: " + campo);
//   }
// });