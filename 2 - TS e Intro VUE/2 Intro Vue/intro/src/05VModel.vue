<script setup lang="ts">
import { ref } from 'vue';

const text = ref('stato iniziale')
const textModel = ref('stato iniziale')

function onInput(e: Event) {
  if (e.target) {
    text.value = e.target.value;
  }
}

const checkboxModel = ref(true)
</script>

<template>
    <input 
    v-model="textModel"
    placeholder="Type here"
  >
  <p>{{ textModel }}</p>

  <input 
    :value="text"
    @input="onInput" 
    placeholder="Type here"
  >
  <p>{{ text }}</p>

  <input 
    v-model="checkboxModel" 
    type="checkbox"
  >
  <p>Elemento selezionato: 
    {{ checkboxModel ? "Selezionato" : "Non selezionato" }}</p>
</template>

<style scoped>

</style>
