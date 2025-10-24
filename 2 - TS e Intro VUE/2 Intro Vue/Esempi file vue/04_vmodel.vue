<script lang="ts" setup>
import { ref } from 'vue'

// Fai schema iniziale per far capire loro come 
//  :value è in direzione ts -> html
//  @input è in direzione html  ts 
const text = ref('stato iniziale')
const textModel = ref('stato iniziale')

const checkboxModel = ref(true)
function onInput(e: Event) {
  if (e.target) {
    text.value = e.target.value;
  }
}
</script>

<template>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
  
  <input v-model="textModel" placeholder="Type here">
  <p>{{ textModel }}</p>
  
  <input v-model="checkboxModel" type="checkbox">
  <p>Elemento selezionato: {{ checkboxModel ? "Selezionato" : "Non selezionato" }}</p>
</template>