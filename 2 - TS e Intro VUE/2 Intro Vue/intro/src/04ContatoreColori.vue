
<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);
const counterColor = ref("blue");

function increment() {
  counter.value++;
  checkColor();
}

function decrement() {
  counter.value--;
  checkColor();
}

function checkColor() {
  if (counter.value < 0) {
    counterColor.value = "red";
  } else if (counter.value === 0) {
    counterColor.value = "blue";
  } else {
    counterColor.value = "green";
  }
}

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value;
}
</script>


<template>
<h2>Contatore</h2>
  <button @click="decrement">-</button>
  <span :style="{ color: counterColor }">{{ counter }}</span>
  <button @click="increment">+</button>

  <p v-if="counter > 10"> Hai superato il limite! </p>
  <p v-else-if="counter < 0"> Negativo
    <div>Div in mezzo</div>
  </p>
  <p v-else> Sei entro il limite </p>

  <button @click="toggle">Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>

<style scoped>

</style>
