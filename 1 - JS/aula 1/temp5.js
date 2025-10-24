// const studente = {
//     nome: "andrea",
//     eta: 25,
//     corsi: ["Informatica", "Reti"]
// };

// console.log(studente);
// console.log(studente.nome);
// studente.nome = "Luca";
// console.log(studente.nome);


// const studenti = {};
// studenti.Andrea = {
//     nome: "Andrea",
//     eta: 25,
//     corsi: ["C1", "C2"]
// };




function aggiungiStudente(arr, nome, eta, corsi) {
    let studente = {
        nome: nome,
        eta: eta,
        corsi: corsi
    };
    arr.push(studente);
}

let studenti = [];
aggiungiStudente(studenti, "Andrea", 12, ["C1", "C2"]);
aggiungiStudente(studenti, "Luca", 25, ["C2"]);
console.log(JSON.stringify(studenti));

delete studenti[0].corsi;
console.log(studenti);