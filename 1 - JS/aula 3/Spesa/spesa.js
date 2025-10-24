let spesa = [];
let indiceModifica = -1;

const nomeInput = document.getElementById("nome");
const quantitaInput = document.getElementById("quantita");
const prezzoInput = document.getElementById("prezzo");
const addBtn = document.getElementById("addBtn");
const totaleDisplay = document.getElementById("totale");

const tbody = document.querySelector("#spesaTable tbody");


const cancelBtn = document.createElement("button");
cancelBtn.textContent = "Annulla";
cancelBtn.style.display = "none";
addBtn.insertAdjacentElement("afterend", cancelBtn);


addBtn.addEventListener("click", () => {
    let nome = nomeInput.value.trim();
    let quantita = Number(quantitaInput.value);
    let prezzo = Number(prezzoInput.value);

    if (!nome || quantita <= 0 || prezzo < 0) return;

    if (indiceModifica === -1) {
        spesa.push({ nome, quantita, prezzo });
    } else {
        spesa[indiceModifica] = { nome, quantita, prezzo };
        indiceModifica = -1;
        addBtn.textContent = "Aggiungi"; // reset pulsante
        cancelBtn.style.display = "none"; // nascondo il pulsante Annulla
    }

    aggiornaLista();
    resetForm();
});

function aggiornaLista() {
    tbody.innerHTML = "";
    let totale = 0;

    for (let i = 0; i < spesa.length; i++) {
        let item = spesa[i];

        let row = document.createElement("tr");

        let tdNome = document.createElement("td");
        tdNome.textContent = item.nome;
        row.appendChild(tdNome);

        let tdQuantita = document.createElement("td");
        tdQuantita.textContent = item.quantita;
        row.appendChild(tdQuantita);

        let tdPrezzo = document.createElement("td");
        tdPrezzo.textContent = item.prezzo.toFixed(2);
        row.appendChild(tdPrezzo);

        let tdTotale = document.createElement("td");
        let totaleItem = item.quantita * item.prezzo;
        tdTotale.textContent = totaleItem.toFixed(2);
        row.appendChild(tdTotale);

        totale += totaleItem;

        let tdAzioni = document.createElement("td");

        // Bottone Modifica
        let btnModifica = document.createElement("button");
        btnModifica.textContent = "Modifica";
        btnModifica.addEventListener("click", () => {
            indiceModifica = i;
            nomeInput.value = item.nome;
            quantitaInput.value = item.quantita;
            prezzoInput.value = item.prezzo;
            addBtn.textContent = "Salva";
            cancelBtn.style.display = "inline-block";
        });
        tdAzioni.appendChild(btnModifica);

        // Bottone Rimuovi
        let btnRimuovi = document.createElement("button");
        btnRimuovi.textContent = "Rimuovi";
        btnRimuovi.addEventListener("click", () => {
            spesa.splice(i, 1);
            aggiornaLista();
        });
        tdAzioni.appendChild(btnRimuovi);

        row.appendChild(tdAzioni);
        tbody.appendChild(row);
    }

    if (totale > 100) {
        totale = totale * 0.9;
        totaleDisplay.textContent = `Totale (10% sconto applicato!): ${totale.toFixed(2)} €`;
    } else {
        totaleDisplay.textContent = `Totale: ${totale.toFixed(2)} €`;
    }
}

function resetForm() {
    nomeInput.value = "";
    quantitaInput.value = 1;
    prezzoInput.value = 0;
}