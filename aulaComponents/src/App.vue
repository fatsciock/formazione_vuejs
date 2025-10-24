<script setup lang="ts">
import { ref } from 'vue';
import CardBox from '@/components/CardBox.vue';

const cont = ref(0);
</script>

<template>
  <h2>Slot componenti</h2>
  <div>
      <p>Incrementa o diminuisci il numero di componenti che vuoi visualizzare!</p>
      <button class="btn" @click="cont++">+</button>
      <button class="btn" @click="cont--" :disabled="cont<=0">-</button>
      <p>Attualmente stai visualizzando {{ cont }} componenti</p>
  </div>

  <CardBox />
  <CardBox v-for="_ in cont">
    <h3>Componente #{{ _.toString() }}</h3>
    <p>Questo testo è passato dal parent 👇</p>
  </CardBox>
</template>

<style scoped>
.btn {
    padding: 8px;
    margin: 3px;
}
</style>
