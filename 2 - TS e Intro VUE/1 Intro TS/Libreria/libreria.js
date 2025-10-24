var libri = [];
var indiceModifica = -1;
var tbody = document.querySelector("#bookTable tbody");
var bookForm = document.getElementById("bookForm");
var submitBtn = bookForm.querySelector("button[type='submit']");
var cancelBtn = document.createElement("button");
cancelBtn.type = "button";
cancelBtn.textContent = "Annulla";
cancelBtn.style.marginLeft = "5px";
cancelBtn.style.display = "none";
submitBtn.insertAdjacentElement("afterend", cancelBtn);
bookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var titolo = document.getElementById("titolo").value;
    var autore = document.getElementById("autore").value;
    var anno = parseInt(document.getElementById("anno").value);
    var generi = document.getElementById("generi").value.split(",");
    var prezzo = parseFloat(document.getElementById("prezzo").value);
    var libro = { titolo: titolo, autore: autore, anno: anno, generi: generi, prezzo: prezzo };
    if (indiceModifica === -1) {
        libri.push(libro);
    }
    else {
        libri[indiceModifica] = libro;
        indiceModifica = -1;
        submitBtn.textContent = "Aggiungi";
        cancelBtn.style.display = "none";
    }
    aggiornaTabella(libri);
    bookForm.reset();
});
cancelBtn.addEventListener("click", function () {
    indiceModifica = -1;
    bookForm.reset();
    submitBtn.textContent = "Aggiungi";
    cancelBtn.style.display = "none";
});
// Aggiornamento tabella
function aggiornaTabella(lista) {
    tbody.innerHTML = "";
    var totale = 0;
    var _loop_1 = function (i) {
        var libro = lista[i];
        totale += libro.prezzo;
        var tr = document.createElement("tr");
        var tdTitolo = document.createElement("td");
        tdTitolo.textContent = libro.titolo;
        tr.appendChild(tdTitolo);
        var tdAutore = document.createElement("td");
        tdAutore.textContent = libro.autore;
        tr.appendChild(tdAutore);
        var tdAnno = document.createElement("td");
        tdAnno.textContent = libro.anno.toString();
        tr.appendChild(tdAnno);
        var tdGeneri = document.createElement("td");
        tdGeneri.textContent = libro.generi.join(", ");
        tr.appendChild(tdGeneri);
        var tdPrezzo = document.createElement("td");
        tdPrezzo.textContent = libro.prezzo.toFixed(2) + " €";
        tr.appendChild(tdPrezzo);
        var tdAzioni = document.createElement("td");
        var btnModifica = document.createElement("button");
        btnModifica.textContent = "Modifica";
        btnModifica.style.marginRight = "5px";
        btnModifica.addEventListener("click", function () {
            indiceModifica = i;
            document.getElementById("titolo").value = libro.titolo;
            document.getElementById("autore").value = libro.autore;
            document.getElementById("anno").value = libro.anno.toString();
            document.getElementById("generi").value = libro.generi.join(",");
            document.getElementById("prezzo").value = libro.prezzo.toString();
            submitBtn.textContent = "Salva";
            cancelBtn.style.display = "inline-block";
        });
        tdAzioni.appendChild(btnModifica);
        var btnElimina = document.createElement("button");
        btnElimina.textContent = "Elimina";
        btnElimina.addEventListener("click", function () {
            libri.splice(i, 1);
            aggiornaTabella(libri);
        });
        tdAzioni.appendChild(btnElimina);
        tr.appendChild(tdAzioni);
        tbody.appendChild(tr);
    };
    for (var i = 0; i < lista.length; i++) {
        _loop_1(i);
    }
    var totalePrezzi = document.getElementById("totalePrezzi");
    totalePrezzi.textContent = "Totale prezzi: " + totale.toFixed(2) + " €";
}
// Ricerca con parametri opzionali
function cercaLibri(autore, genere) {
    var filtrati = [];
    for (var i = 0; i < libri.length; i++) {
        var libro = libri[i];
        if (autore && libro.autore.toLowerCase().includes(autore)) {
            filtrati.push(libro);
            continue;
        }
        if (genere) {
            for (var j = 0; j < libro.generi.length; j++) {
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
var btnCerca = document.getElementById("cerca");
btnCerca.addEventListener("click", function () {
    var testo = document.getElementById("search").value.trim().toLocaleLowerCase();
    if (testo === "")
        return;
    // Uso la funzione con parametri opzionali
    var filtrati = cercaLibri(testo, testo);
    aggiornaTabella(filtrati);
});
// Bottone mostra tutti
var btnMostraTutti = document.getElementById("mostraTutti");
btnMostraTutti.addEventListener("click", function () {
    aggiornaTabella(libri);
    document.getElementById("search").value = "";
});
