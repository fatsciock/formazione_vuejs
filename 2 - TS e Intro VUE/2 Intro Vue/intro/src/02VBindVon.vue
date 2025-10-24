<script setup lang="ts">
import { reactive, ref } from 'vue';

const titleClass = ref("redTitle");
const disabledInput = ref(false);
const typeInput = ref("text");

function cambiaClasse() {
  titleClass.value = "greenTitle";
}
</script>

<template>
  <h1 :class="titleClass">Make me red</h1>
  <h1 class="blueTitle">Make me red</h1>

  <label>Inserisci quello che vuoi: 
    <input :type="typeInput" :disabled="disabledInput" />
  </label>
  <button @click="cambiaClasse">
    Cliccami
  </button>
</template>

<style scoped>
.redTitle {
  color: red;
}

.blueTitle {
  color: blue;
}

.greenTitle {
  color: green;
}
</style>
