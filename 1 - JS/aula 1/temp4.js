// let lista = [10, 20, 30];
// const listaMista = [10, "20" , true, "Ciao"];

// console.log(lista);
// lista.push(40);
// lista.push(50);
// lista.pop();
// console.log(lista);

// for (let i=0; i<listaMista.length; i++) {
//     console.log(typeof listaMista[i]);
// }

// listaMista.push(100);
// console.log(listaMista);







function sommaArray(arr) {
    let somma = 0;
    for (const el of arr) {
        somma += el;
    }
    return somma;
}

// Funzione per trovare il valore massimo nell'array
function massimoArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Funzione per trovare il valore minimo nell'array
function minimoArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Funzione per calcolare la media degli elementi dell'array
function mediaArray(arr) {
    let somma = sommaArray(arr);
    return somma / arr.length;
}

function cercaInArray(arr, valore) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valore) {
            return i;
        }
    }
    return -1;
}

let numeri = [10, 5, 48, 3, 12, 47];
let misto = [10, "5", true, "ciao", 47];

misto.splice(2, 1);

console.log("Somma degli elementi dell'array: " + sommaArray(numeri));
console.log("Valore massimo nell'array: " + massimoArray(numeri));
console.log("Valore minimo nell'array: " + minimoArray(numeri));
console.log("Media degli elementi dell'array: " + mediaArray(numeri));

console.log("Il valore 10 è presente nell'array: " + (cercaInArray(numeri, 10) != -1 ? 'Vero' : 'Falso'));
console.log("Il valore 2 è presente nell'array: " + (cercaInArray(numeri, 2)  != -1 ? 'Vero' : 'Falso' ));

console.log("Il valore 'ciao' è presente nell'array: " + (cercaInArray(misto, "ciao") != -1 ? 'Vero' : 'Falso'));
console.log("Il valore 5 è presente nell'array: " + (cercaInArray(misto, 5)  != -1 ? 'Vero' : 'Falso' ));