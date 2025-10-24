<script setup lang="ts">
import { reactive, ref } from 'vue';

let testo: string = "Un bel paragrafo"; // non reattivo, se questo cambia non viene aggiornato automaticamente il template
const testoRef = ref('Un bel paragrafo');
const testoReactive = reactive({
    testo: 'Un bel paragrafo'
});

/**
 * ATTENZIONE:
 * Se esegui questa funzione cliccando l'apposito pulsante, la pagina non cambia
 * MA
 * Se poi clicchi uno degli altri pulsanti, SICCOME sono reattivi, il DOM viene ricaricato e quindi cambia anche la visualizzazione di testo
 */
function cambiaTesto() {
    console.log(testo);
    testo = "Nuovo testo";
    console.log(testo);
}

function cambiaTestoReactive() {
    console.log(testoReactive.testo);
    testoReactive.testo = "Nuovo testo";
    console.log(testoReactive.testo);
}

function cambiaTestoRef() {
    console.log(testoRef.value);
    testoRef.value = "Nuovo testo";
    console.log(testoRef.value);
}
</script>

<template>
    <h1>Declarative Rendering</h1>
    <div>
        <p>Ecco un esempio di rendering dichiarativo (tramite l'utilizzo di &#123;&#123;&#125;&#125;): {{ testo }}</p>
        <button @click="cambiaTesto()">Clicca qui per cambiare il testo</button>
    </div>
    <hr></hr>
    <div>
        <p>Ecco un esempio di rendering dichiarativo (tramite l'utilizzo di &#123;&#123;&#125;&#125; e di <span style="font-weight: bold;">reactive</span>): {{ testoReactive.testo }}</p>
        <button @click="cambiaTestoReactive()">Clicca qui per cambiare il testo</button>
    </div>
    <hr></hr>
    <div>
        <p>Ecco un esempio di rendering dichiarativo (tramite l'utilizzo di &#123;&#123;&#125;&#125; e di <span style="font-weight: bold;">ref</span>): {{ testoRef }}</p>
        <button @click="cambiaTestoRef()">Clicca qui per cambiare il testo</button>
    </div>
</template>

<style scoped></style>
