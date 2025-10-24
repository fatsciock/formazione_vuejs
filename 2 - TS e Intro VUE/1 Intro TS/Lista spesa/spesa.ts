// Definizione tipo Prodotto
interface Prodotto {
    nome: string;
    quantita: number;
    prezzo: number;
}

let spesa: Prodotto[] = [];
let indiceModifica: number = -1;

// Elementi DOM
const nomeInput = document.getElementById("nome") as HTMLInputElement;
const quantitaInput = document.getElementById("quantita") as HTMLInputElement;
const prezzoInput = document.getElementById("prezzo") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const tbody = document.querySelector("#spesaTable tbody") as HTMLTableSectionElement;
const totaleDisplay = document.getElementById("totale") as HTMLElement;

const cancelBtn = document.createElement("button");
cancelBtn.type = "button";
cancelBtn.textContent = "Annulla";
cancelBtn.style.marginLeft = "5px";
cancelBtn.style.display = "none";
addBtn.insertAdjacentElement("afterend", cancelBtn);

// Aggiungi prodotto
addBtn.addEventListener("click", () => {
    const nome: string = nomeInput.value.trim();
    const quantita: number = Number(quantitaInput.value);
    const prezzo: number = Number(prezzoInput.value);

    if (!nome || quantita <= 0 || prezzo < 0) return;

    if (indiceModifica === -1) {
        // Aggiunta nuova riga
        spesa.push({ nome, quantita, prezzo });
    } else {
        // Salvataggio modifica
        spesa[indiceModifica] = { nome, quantita, prezzo };
        indiceModifica = -1;
        addBtn.textContent = "Aggiungi"; // reset pulsante
        cancelBtn.style.display = "none"; // nascondo il pulsante Annulla
    }

    aggiornaLista();
    resetForm();
});

cancelBtn.addEventListener("click", () => {
    indiceModifica = -1;
    resetForm();
    addBtn.textContent = "Aggiungi";
    cancelBtn.style.display = "none";
});

// Aggiorna lista e calcola totale
function aggiornaLista(): void {
    tbody.innerHTML = "";
    let totale: number = 0;

    for (let i = 0; i < spesa.length; i++) {
        const item = spesa[i];
        const row = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = item.nome;
        row.appendChild(tdNome);

        const tdQuantita = document.createElement("td");
        tdQuantita.textContent = item.quantita.toString();
        row.appendChild(tdQuantita);

        const tdPrezzo = document.createElement("td");
        tdPrezzo.textContent = item.prezzo.toFixed(2);
        row.appendChild(tdPrezzo);

        const tdTotale = document.createElement("td");
        const totaleItem: number = item.quantita * item.prezzo;
        tdTotale.textContent = totaleItem.toFixed(2);
        row.appendChild(tdTotale);

        totale += totaleItem;

        const tdAzioni = document.createElement("td");

        const btnModifica = document.createElement("button");
        btnModifica.textContent = "Modifica";
        btnModifica.style.marginRight = "5px";
        btnModifica.addEventListener("click", () => {
            indiceModifica = i;
            nomeInput.value = item.nome;
            quantitaInput.value = item.quantita.toString();
            prezzoInput.value = item.prezzo.toString();
            addBtn.textContent = "Salva";
            cancelBtn.style.display = "inline-block"; // mostro il pulsante Annulla
        });
        tdAzioni.appendChild(btnModifica);

        const btnRimuovi = document.createElement("button");
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

function resetForm(): void {
    nomeInput.value = "";
    quantitaInput.value = "1";
    prezzoInput.value = "0";
}