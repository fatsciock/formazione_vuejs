<script setup lang="ts">
import { reactive, ref } from 'vue';

let testo: string = "Un bel paragrafo";
function cambiaTesto() {
  console.log(testo);
  testo = "Nuovo testo";
  console.log(testo);
}

const testoRef = ref("Un bel paragrafo");
function cambiaTestoRef() {
  console.log(testoRef.value);
  testoRef.value = "Nuovo testo ref";
  console.log(testoRef.value);
}

const testoReactive = reactive({
  testo: "Un bel paragrafo reactive"
});
function cambiaTestoReactive() {
    console.log(testoReactive.testo);
    testoReactive.testo = "Nuovo testo reactive";
    console.log(testoReactive.testo);
}

const testoEsercizio = ref("Testo dell'esercizio");
function cambiaTestoEsercizio() {
  testoEsercizio.value = testoEsercizio.value.split('').reverse().join('');
}
</script>

<template>
  <h1>Declarative Rendering</h1>
    <p>
      {{ testoEsercizio }}
    </p>
    <button @click="cambiaTestoEsercizio">Cambia testo</button>
    <p>
      {{ testoEsercizio.split('').reverse().join('').toUpperCase() }}
    </p>
    <hr />
    <div>
      <p>Ecco un esempio di rendering dichiarativo
        (tramite l'utilizzo di &#123;&#123;&#125;&#125;): {{ testo }}</p>
      <button @click="cambiaTesto()">Clicca qui per cambiare il testo</button>
    </div>

    <div>
      <p>Ecco un esempio di rendering dichiarativo (tramite l'utilizzo 
        di &#123;&#123;&#125;&#125; e di <span style="font-weight: bold;">ref</span>): {{ testoRef }}</p>
      <button @click="cambiaTestoRef()">Clicca qui per cambiare il testo</button>
    </div>

    <div>
      <p>Ecco un esempio di rendering dichiarativo (tramite l'utilizzo 
        di &#123;&#123;&#125;&#125; e di <span style="font-weight: bold;">reactive</span>): {{ testoReactive.testo }}</p>
      <button @click="cambiaTestoReactive()">Clicca qui per cambiare il testo</button>
    </div>
</template>

<style scoped>

</style>
