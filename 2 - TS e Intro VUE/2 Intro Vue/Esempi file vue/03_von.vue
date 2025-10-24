<script lang="ts" setup>
import { ref } from 'vue'

// fai fare a loro il contatore, mettendolo a confronto con quello vecchio fatto in js
const count = ref(0)

function increment() {
  count.value++;
}

const text = ref('Cambiami!');
function changeText(newText: string) {
  text.value = "Cambiato!";
  text.value = newText;
}

</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
  <button @click="changeText('ciaaaaoo')">{{ text }}</button>
</template>