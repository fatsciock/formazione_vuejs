<script setup>
import { ref, reactive } from 'vue'

// component logic
// declare some reactive state here.
// reactive funziona solo con oggetti {} inclusi array e tipi built-in come Map e Set
// ref invece funziona con qualsiasi tipo ed espone il valore sotto la proprietà .value
// Fai fare una prova in cui mettono in una variabile del testo e lo devono stampare 2 volte, uno normale e uno invertito/tutto in maiuscolo

const testo = reactive({
  testo: "Un nuovo testo",
  count: 0
});
testo.count = 2
  
const testoRef = ref('Testo ref');
const num = ref(0);

num.value = 1;
</script>

<template>
  <h1>{{ testo.testo }}</h1>
  <h2>{{ testo.count }}</h2>
  <p>
    {{ testoRef }} - {{num}}
  </p>
  <p>
    {{ testoRef.split('').reverse().join('').toLowerCase() }} - {{num}}
  </p>
</template>