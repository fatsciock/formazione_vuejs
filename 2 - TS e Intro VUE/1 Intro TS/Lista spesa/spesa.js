var spesa = [];
var indiceModifica = -1;
// Elementi DOM
var nomeInput = document.getElementById("nome");
var quantitaInput = document.getElementById("quantita");
var prezzoInput = document.getElementById("prezzo");
var addBtn = document.getElementById("addBtn");
var tbody = document.querySelector("#spesaTable tbody");
var totaleDisplay = document.getElementById("totale");
var cancelBtn = document.createElement("button");
cancelBtn.type = "button";
cancelBtn.textContent = "Annulla";
cancelBtn.style.marginLeft = "5px";
cancelBtn.style.display = "none";
addBtn.insertAdjacentElement("afterend", cancelBtn);
// Aggiungi prodotto
addBtn.addEventListener("click", function () {
    var nome = nomeInput.value.trim();
    var quantita = Number(quantitaInput.value);
    var prezzo = Number(prezzoInput.value);
    if (!nome || quantita <= 0 || prezzo < 0)
        return;
    if (indiceModifica === -1) {
        // Aggiunta nuova riga
        spesa.push({ nome: nome, quantita: quantita, prezzo: prezzo });
    }
    else {
        // Salvataggio modifica
        spesa[indiceModifica] = { nome: nome, quantita: quantita, prezzo: prezzo };
        indiceModifica = -1;
        addBtn.textContent = "Aggiungi"; // reset pulsante
        cancelBtn.style.display = "none"; // nascondo il pulsante Annulla
    }
    aggiornaLista();
    resetForm();
});
cancelBtn.addEventListener("click", function () {
    indiceModifica = -1;
    resetForm();
    addBtn.textContent = "Aggiungi";
    cancelBtn.style.display = "none";
});
// Aggiorna lista e calcola totale
function aggiornaLista() {
    tbody.innerHTML = "";
    var totale = 0;
    var _loop_1 = function (i) {
        var item = spesa[i];
        var row = document.createElement("tr");
        var tdNome = document.createElement("td");
        tdNome.textContent = item.nome;
        row.appendChild(tdNome);
        var tdQuantita = document.createElement("td");
        tdQuantita.textContent = item.quantita.toString();
        row.appendChild(tdQuantita);
        var tdPrezzo = document.createElement("td");
        tdPrezzo.textContent = item.prezzo.toFixed(2);
        row.appendChild(tdPrezzo);
        var tdTotale = document.createElement("td");
        var totaleItem = item.quantita * item.prezzo;
        tdTotale.textContent = totaleItem.toFixed(2);
        row.appendChild(tdTotale);
        totale += totaleItem;
        var tdAzioni = document.createElement("td");
        var btnModifica = document.createElement("button");
        btnModifica.textContent = "Modifica";
        btnModifica.style.marginRight = "5px";
        btnModifica.addEventListener("click", function () {
            indiceModifica = i;
            nomeInput.value = item.nome;
            quantitaInput.value = item.quantita.toString();
            prezzoInput.value = item.prezzo.toString();
            addBtn.textContent = "Salva";
            cancelBtn.style.display = "inline-block"; // mostro il pulsante Annulla
        });
        tdAzioni.appendChild(btnModifica);
        var btnRimuovi = document.createElement("button");
        btnRimuovi.textContent = "Rimuovi";
        btnRimuovi.addEventListener("click", function () {
            spesa.splice(i, 1);
            aggiornaLista();
        });
        tdAzioni.appendChild(btnRimuovi);
        row.appendChild(tdAzioni);
        tbody.appendChild(row);
    };
    for (var i = 0; i < spesa.length; i++) {
        _loop_1(i);
    }
    if (totale > 100) {
        totale = totale * 0.9;
        totaleDisplay.textContent = "Totale (10% sconto applicato!): ".concat(totale.toFixed(2), " \u20AC");
    }
    else {
        totaleDisplay.textContent = "Totale: ".concat(totale.toFixed(2), " \u20AC");
    }
}
function resetForm() {
    nomeInput.value = "";
    quantitaInput.value = "1";
    prezzoInput.value = "0";
}
