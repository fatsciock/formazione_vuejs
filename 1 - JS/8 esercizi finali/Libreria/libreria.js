let libri = [];
let indiceModifica = -1;

const tbody = document.querySelector("#bookTable tbody");
const form = document.getElementById("bookForm");
const submitBtn = form.querySelector("button[type='submit']");

const cancelBtn = document.createElement("button");
cancelBtn.type = "button";
cancelBtn.textContent = "Annulla";
cancelBtn.style.marginLeft = "5px";
cancelBtn.style.display = "none";
submitBtn.insertAdjacentElement("afterend", cancelBtn);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let titolo = document.getElementById("titolo").value;
    let autore = document.getElementById("autore").value;
    let anno = document.getElementById("anno").value;
    let generi = document.getElementById("generi").value.split(",");
    let prezzo = Number(document.getElementById("prezzo").value);

    let libro = { titolo, autore, anno, generi, prezzo };

    if (indiceModifica === -1) {
        // aggiungi
        libri.push(libro);
    } else {
        // salva modifica
        libri[indiceModifica] = libro;
        indiceModifica = -1;
        submitBtn.textContent = "Aggiungi";
        cancelBtn.style.display = "none";
    }

    aggiornaTabella(libri);
    this.reset();
});

cancelBtn.addEventListener("click", () => {
    indiceModifica = -1;
    form.reset();
    submitBtn.textContent = "Aggiungi";
    cancelBtn.style.display = "none";
});

function aggiornaTabella(lista) {
    tbody.innerHTML = "";
    let totale = 0;

    for (let i = 0; i < lista.length; i++) {
        let libro = lista[i];
        totale += libro.prezzo;

        let tr = document.createElement("tr");

        let tdTitolo = document.createElement("td");
        tdTitolo.textContent = libro.titolo;
        tr.appendChild(tdTitolo);

        let tdAutore = document.createElement("td");
        tdAutore.textContent = libro.autore;
        tr.appendChild(tdAutore);

        let tdAnno = document.createElement("td");
        tdAnno.textContent = libro.anno;
        tr.appendChild(tdAnno);

        let tdGeneri = document.createElement("td");
        tdGeneri.textContent = libro.generi.join(", ");
        tr.appendChild(tdGeneri);

        let tdPrezzo = document.createElement("td");
        tdPrezzo.textContent = libro.prezzo.toFixed(2) + " €";
        tr.appendChild(tdPrezzo);

        let tdAzioni = document.createElement("td");

        let btnModifica = document.createElement("button");
        btnModifica.textContent = "Modifica";
        btnModifica.style.marginRight = "5px";
        btnModifica.addEventListener("click", () => {
            indiceModifica = i;
            document.getElementById("titolo").value = libro.titolo;
            document.getElementById("autore").value = libro.autore;
            document.getElementById("anno").value = libro.anno;
            document.getElementById("generi").value = libro.generi.join(",");
            document.getElementById("prezzo").value = libro.prezzo;

            submitBtn.textContent = "Salva";
            cancelBtn.style.display = "inline-block";
        });
        tdAzioni.appendChild(btnModifica);
        
        let btnElimina = document.createElement("button");
        btnElimina.textContent = "Elimina";
        btnElimina.addEventListener("click", () => {
            libri.splice(i, 1);
            aggiornaTabella(libri);
        });
        tdAzioni.appendChild(btnElimina);
        tr.appendChild(tdAzioni);

        tbody.appendChild(tr);
    }

    document.getElementById("totalePrezzi").textContent = "Totale prezzi: " + totale.toFixed(2) + " €";
}

// Ricerca
document.getElementById("cerca").addEventListener("click", () => {
    let testo = document.getElementById("search").value.toLowerCase();
    if (testo.trim() === "") return;

    let filtrati = [];
    for (let i = 0; i < libri.length; i++) {
        let libro = libri[i];
        if (libro.autore.toLowerCase().includes(testo)) {
            filtrati.push(libro);
            continue;
        }
        for (let j = 0; j < libro.generi.length; j++) {
            if (libro.generi[j].toLowerCase().includes(testo)) {
                filtrati.push(libro);
                break;
            }
        }
    }

    aggiornaTabella(filtrati);
});

// Mostra tutti
document.getElementById("mostraTutti").addEventListener("click", () => {
    aggiornaTabella(libri);
    document.getElementById("search").value = "";
});
