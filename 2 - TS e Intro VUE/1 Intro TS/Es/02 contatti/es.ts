// esercizio2.ts

// 1. Definisci un’interfaccia Contatto
interface Contatto {
    nome: string;
    telefono: string;
    email: string;
}

// 2. Array di contatti di esempio
let rubrica: Contatto[] = [
    { nome: "Andrea", telefono: "1234567890", email: "andrea@mail.com" },
    { nome: "Maria", telefono: "0987654321", email: "maria@mail.com" },
    { nome: "Luca", telefono: "111222333", email: "luca@mail.com" }
];

// 3. Funzione che cerca un contatto per nome
function trovaContatto(lista: Contatto[], nome: string): Contatto | null {
    for (const c of lista) {
        if (c.nome === nome) {
            return c;
        }
    }
    return null;
}

// 4. Esempi di utilizzo
let trovato1 = trovaContatto(rubrica, "Maria");
console.log("Risultato ricerca per 'Maria':", trovato1);

let trovato2 = trovaContatto(rubrica, "Giovanni");
console.log("Risultato ricerca per 'Giovanni':", trovato2);
