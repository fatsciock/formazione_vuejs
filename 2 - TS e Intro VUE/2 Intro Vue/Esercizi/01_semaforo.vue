<script setup lang="ts">
import { ref, computed } from "vue";

/**
 * 
 * FATTO A LEZIONE IL 30/09
 * 
 */

const counter = ref(0);

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}

const counterColor = computed(() => {
  if (counter.value < 0) return "red";
  if (counter.value === 0) return "blue";
  return "green";
})
</script>

<template>
  <div>
    <h2>Contatore evoluto</h2>

    <!-- numero colorato -->
    <p :style="{ color: counterColor }">
      {{ counter }}
    </p>

    <!-- bottoni -->
    <button @click="decrement">
      -
    </button>
    <button @click="increment">
      +
    </button>

    <!-- messaggio di soglia -->
    <p v-if="counter > 10">
      Hai superato il limite!
    </p>
  </div>
</template>

<style scoped>
button:hover {
  background-color: #ddd;
}
</style>
