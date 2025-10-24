<script lang="ts" setup>
import { ref } from 'vue';

interface Todo {
    id: number;
    text: string;
    // altro campo... ???
}

</script>

<template>
  <p>Info es:
   <ul>
      <li>Se l'id del todo è pari = testo barrato</li>
      <li>Se l'id del todo è dispari = testo sottolineato</li>
      <li>Se ??? è pari = colore testo blu</li>
      <li>Se ??? è dispari = colore testo verde</li>
   </ul>
  </p>
</template>