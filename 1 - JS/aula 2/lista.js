
document.getElementById("aggiungiTodo").addEventListener("click", aggiuntiElementoAllaLista);

document.getElementById("todoInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        aggiuntiElementoAllaLista();
    }
});

function aggiuntiElementoAllaLista() {
    let testo = document.getElementById("todoInput").value;
    if (testo.trim() !== "") {
        let newLi = document.createElement("li");
        newLi.innerText = testo;
        document.getElementById("todoLista").appendChild(newLi);
        document.getElementById("todoInput").value = "";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.addEventListener("click", () => {
            // deleteButton.parentElement.remove();
            newLi.remove();
        });

        newLi.appendChild(deleteButton);
    }
}