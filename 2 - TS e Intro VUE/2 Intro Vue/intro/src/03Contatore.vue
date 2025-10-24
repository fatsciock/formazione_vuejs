<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}
</script>

<template>
  <h2>Contatore</h2>
  <button @click="decrement">-</button>
  <span>{{ counter }}</span>
  <button @click="increment">+</button>
</template>

<style scoped>

</style>