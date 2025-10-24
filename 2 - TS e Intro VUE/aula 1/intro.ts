let numero: number = 1;

const NOME: string = "Andrea";

let variabile: any  = 324;

let listaNumeri: number[] = [];
listaNumeri.push(2,3);

let stringOrNumber: string | number = "Ciao";
stringOrNumber = 1;
stringOrNumber = "afs";





interface Libro {
    titolo: string;
    autore: string;
    anno: number;
    prezzo: number;
    generi: string[];
}

let libro: Libro = {
    titolo: "Titolo 1",
    autore: "Andrea",
    anno: 1982,
    prezzo: 10,
    generi: ["Azione", "Fantasy"]
};

libro.titolo = "Titolo 2";


interface Persona {
    nome: string;
    cognome: string;
    dataNascita: string;
    modelloAuto?: string;
};

let p1: Persona = {
    nome: "Luca",
    cognome: "Rossi",
    dataNascita: "01/01/1990",
    modelloAuto: "Fiat Panda"
};

let p2: Persona = {
    nome: "Edoardo",
    cognome: "Verdi",
    dataNascita: "01/01/1990"
};

if (p1.modelloAuto) {
    console.log(p1.modelloAuto.length);
}

console.log(p1.modelloAuto?.length);



function quadrato(num: number): number {
    return num * num;
}

function stampaMessaggio(msg: string, volte?: number): void {
    if(volte) {
        for(let i=0;i<volte;i++) {
            console.log(msg);
        }
    } else {
        console.log(msg);
    }
}

function stampaMessaggioWithDefault(msg: string, volte: number = 1): void {
    for(let i=0;i<volte;i++) {
        console.log(msg);
    }
}

stampaMessaggio("Ciao");
stampaMessaggio("Ciao2", 10);
stampaMessaggioWithDefault("Ciao");
stampaMessaggioWithDefault("Ciao2", 10);

//Alias
type StatoSpedizione = "In lavorazione" | "Spedito" | "Consegnato";
interface Spedizione {
    stato: StatoSpedizione
}

let nuovaSpedizione: Spedizione = {
    stato: "In lavorazione"
}
nuovaSpedizione.stato = "Consegnato";

switch (nuovaSpedizione.stato) {
    case "Consegnato":
        console.log("")
        break;
    case "In lavorazione":
        console.log("")
        break;
}