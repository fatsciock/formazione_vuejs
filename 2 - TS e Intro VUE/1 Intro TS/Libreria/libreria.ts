// Definizione del tipo Libro
interface Libro {
    titolo: string;
    autore: string;
    anno: number;
    generi: string[];
    prezzo: number;
}

let libri: Libro[] = [];
let indiceModifica: number = -1;

const tbody = document.querySelector<HTMLTableSectionElement>("#bookTable tbody")!;
const bookForm = document.getElementById("bookForm") as HTMLFormElement;
const submitBtn = bookForm.querySelector<HTMLButtonElement>("button[type='submit']")!;

const cancelBtn = document.createElement("button");
cancelBtn.type = "button";
cancelBtn.textContent = "Annulla";
cancelBtn.style.marginLeft = "5px";
cancelBtn.style.display = "none";
submitBtn.insertAdjacentElement("afterend", cancelBtn);

bookForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();

    const titolo = (document.getElementById("titolo") as HTMLInputElement).value;
    const autore = (document.getElementById("autore") as HTMLInputElement).value;
    const anno = parseInt((document.getElementById("anno") as HTMLInputElement).value);
    const generi = (document.getElementById("generi") as HTMLInputElement).value.split(",");
    const prezzo = parseFloat((document.getElementById("prezzo") as HTMLInputElement).value);

    const libro: Libro = { titolo, autore, anno, generi, prezzo };

    if (indiceModifica === -1) {
        libri.push(libro);
    } else {
        libri[indiceModifica] = libro;
        indiceModifica = -1;
        submitBtn.textContent = "Aggiungi";
        cancelBtn.style.display = "none";
    }

    aggiornaTabella(libri);
    bookForm.reset();
});

cancelBtn.addEventListener("click", () => {
    indiceModifica = -1;
    bookForm.reset();
    submitBtn.textContent = "Aggiungi";
    cancelBtn.style.display = "none";
});

// Aggiornamento tabella
function aggiornaTabella(lista: Libro[]): void {
    tbody.innerHTML = "";
    let totale = 0;

    for (let i = 0; i < lista.length; i++) {
        const libro = lista[i];
        totale += libro.prezzo;

        const tr = document.createElement("tr");

        const tdTitolo = document.createElement("td");
        tdTitolo.textContent = libro.titolo;
        tr.appendChild(tdTitolo);

        const tdAutore = document.createElement("td");
        tdAutore.textContent = libro.autore;
        tr.appendChild(tdAutore);

        const tdAnno = document.createElement("td");
        tdAnno.textContent = libro.anno.toString();
        tr.appendChild(tdAnno);

        const tdGeneri = document.createElement("td");
        tdGeneri.textContent = libro.generi.join(", ");
        tr.appendChild(tdGeneri);

        const tdPrezzo = document.createElement("td");
        tdPrezzo.textContent = libro.prezzo.toFixed(2) + " €";
        tr.appendChild(tdPrezzo);

        const tdAzioni = document.createElement("td");

        const btnModifica = document.createElement("button");
        btnModifica.textContent = "Modifica";
        btnModifica.style.marginRight = "5px";
        btnModifica.addEventListener("click", () => {
            indiceModifica = i;
            (document.getElementById("titolo") as HTMLInputElement).value = libro.titolo;
            (document.getElementById("autore") as HTMLInputElement).value = libro.autore;
            (document.getElementById("anno") as HTMLInputElement).value = libro.anno.toString();
            (document.getElementById("generi") as HTMLInputElement).value = libro.generi.join(",");
            (document.getElementById("prezzo") as HTMLInputElement).value = libro.prezzo.toString();

            submitBtn.textContent = "Salva";
            cancelBtn.style.display = "inline-block";
        });
        tdAzioni.appendChild(btnModifica);

        const btnElimina = document.createElement("button");
        btnElimina.textContent = "Elimina";
        btnElimina.addEventListener("click", () => {
            libri.splice(i, 1);
            aggiornaTabella(libri);
        });
        tdAzioni.appendChild(btnElimina);

        tr.appendChild(tdAzioni);
        tbody.appendChild(tr);
    }

    const totalePrezzi = document.getElementById("totalePrezzi") as HTMLElement;
    totalePrezzi.textContent = "Totale prezzi: " + totale.toFixed(2) + " €";
}

// Ricerca con parametri opzionali
function cercaLibri(autore?: string, genere?: string): Libro[] {
    let filtrati: Libro[] = [];
    for (let i = 0; i < libri.length; i++) {
        let libro = libri[i];
        if (autore && libro.autore.toLowerCase().includes(autore)) {
            filtrati.push(libro);
            continue;
        }
        if (genere) {
            for (let j = 0; j < libro.generi.length; j++) {
                if (libro.generi[j].toLowerCase().includes(genere)) {
                    filtrati.push(libro);
                    break;
                }
            }
        }
    }

    return filtrati;
}

// Bottone ricerca
const btnCerca = document.getElementById("cerca") as HTMLButtonElement;
btnCerca.addEventListener("click", () => {
    const testo = (document.getElementById("search") as HTMLInputElement).value.trim().toLocaleLowerCase();
    if (testo === "") return;

    // Uso la funzione con parametri opzionali
    const filtrati = cercaLibri(testo, testo);
    aggiornaTabella(filtrati);
});

// Bottone mostra tutti
const btnMostraTutti = document.getElementById("mostraTutti") as HTMLButtonElement;
btnMostraTutti.addEventListener("click", () => {
    aggiornaTabella(libri);
    (document.getElementById("search") as HTMLInputElement).value = "";
});
