<script setup lang="ts">
import { ref } from 'vue';
import DeclarativeRendering from './DeclarativeRendering.vue';

const currentPage = ref("declarative");
</script>

<template>
  <h1>Ecco Vuejs!</h1>
  <p>Visita <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> per leggere la documentazione</p>

  <nav>
      <button @click="currentPage = 'declarative'">Declarative Rendering</button>
      <button @click="currentPage = 'reactive'">Reactive vs Ref</button>
      <button @click="currentPage = 'temp'">Temp</button>
  </nav>

  <DeclarativeRendering v-if="currentPage === 'declarative'" />
</template>

<style scoped></style>