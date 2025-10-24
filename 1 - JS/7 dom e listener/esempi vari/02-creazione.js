let lista = document.getElementById("lista");

// Creare un nuovo <li> e aggiungerlo
document.getElementById("aggiungi").addEventListener("click", () => {
  let nuovoLi = document.createElement("li");
  nuovoLi.innerText = "Nuovo elemento";
  lista.appendChild(nuovoLi);
});

// Creare un pulsante dinamicamente
document.getElementById("creaBtn").addEventListener("click", () => {
  let nuovoBtn = document.createElement("button");
  nuovoBtn.innerText = "Sono nuovo!";
  nuovoBtn.addEventListener('click', (event) => {
      event.target.remove();
  });
  // eventualmente prova a far sì che il pulsante nuovo abbia un listener che consenta di eliminarlo
  document.body.appendChild(nuovoBtn);
});

// Rimuovere un elemento
document.getElementById("rimuovi").addEventListener("click", () => {
  if (lista.firstChild) {
    lista.firstChild.remove();
  }
});