<script setup>
import { ref } from 'vue'

const titleClass = ref('redTitle')
const disableInput = ref(false)
</script>

<template>
  <h1 :class="titleClass">Make me red</h1>
  <h1 class="blueTitle">Make me red</h1>
  <label>Inserisci quello che vuoi: <input type="text" :disabled="disableInput"/></label>
</template>

<style>
.redTitle {
  color: red;
}
  
.blueTitle {
  color: blue;
}
</style>