// Contatore
let contatore = 0;
document.getElementById("meno").addEventListener("click", () => {
  contatore--;
  document.getElementById("contatore").innerText = contatore;
});
document.getElementById("piu").addEventListener("click", () => {
  contatore++;
  document.getElementById("contatore").innerText = contatore;
});

// To-do list
document.getElementById("aggiungiTodo").addEventListener("click", () => {
  let testo = document.getElementById("todoInput").value;
  if (testo.trim() !== "") {
    let li = document.createElement("li");
    li.innerText = testo;
    document.getElementById("todoLista").appendChild(li);
    document.getElementById("todoInput").value = "";
  }
});

// Mostra/nascondi password
document.getElementById("togglePwd").addEventListener("change", (e) => {
  let pwd = document.getElementById("password");
  pwd.type = e.target.checked ? "text" : "password";
});