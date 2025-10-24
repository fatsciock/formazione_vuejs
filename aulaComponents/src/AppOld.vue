<script setup lang="ts">
import { ref } from 'vue';
import CounterButton from '@/components/CounterButton.vue';

const totalClicks = ref(0);
const message = ref('');
const cont = ref(0);

function handleIncrement(childCounter: number, childId: number) {
  totalClicks.value++;
  message.value = `Figlio ${childId}: valore del contatore = ${childCounter}`;
}

function handleDelete(childCounter: number, childId: number) {
  totalClicks.value -= childCounter;
  message.value = `Figlio ${childId} eliminato`;
}
</script>

<template>
  <h2>Emit componenti</h2>
  <p>Messaggio ricevuto dal componente figlio: {{ message }}</p>
  <p>Totale clic: {{ totalClicks }}</p>
  <div>
      <p>Incrementa o diminuisci il numero di componenti che vuoi visualizzare!</p>
      <button class="btn" @click="cont++">+</button>
      <button class="btn" @click="cont--" :disabled="cont<=0">-</button>
      <p>Attualmente stai visualizzando {{ cont }} componenti</p>
  </div>

  <CounterButton v-for="_ in cont" 
    :id="_"
    @increment="handleIncrement"
    @on-destruction="handleDelete"
  />
</template>

<style scoped>
.btn {
    padding: 8px;
    margin: 3px;
}
</style>
