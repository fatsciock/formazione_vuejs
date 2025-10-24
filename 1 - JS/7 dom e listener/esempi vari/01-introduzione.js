// Recuperare un elemento e cambiarne il testo
let titolo = document.getElementById("titolo");
titolo.innerText = "Titolo cambiato con JS!";

// Cambiare lo stile di un div
let box = document.getElementById("box");
box.style.backgroundColor = "pink";

let paragrafo = document.getElementById("paragrafo");
paragrafo.innerText = "Cambio testo";
paragrafo.style.color = "red";

let listItem = document.getElementsByClassName("listItem");
for (const el of listItem) {
  el.innerText = "Nuovo testo";
  el.style.color = "red";
  break;
}

// document = "sada";

// Leggere il contenuto di un input
document.getElementById("leggiInput").addEventListener("click", (event) => {
  console.log(event);
  let valore = document.getElementById("mioInput").value;
  // console.log("Hai scritto:", valore);
  paragrafo.innerText = valore;
});

let newButton = document.createElement("button");
box.appendChild(newButton);
box.remove();

// document.getElementById("mioInput").addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//       let valore = document.getElementById("mioInput").value;
//       console.log("Hai scritto:", valore);
//       paragrafo.innerText = valore;
//   }
// });