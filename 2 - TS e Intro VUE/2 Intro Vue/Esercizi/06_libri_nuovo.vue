<script setup lang="ts">
import { ref } from 'vue'

const nuovoLibro = ref('')
const libri = ref<string[]>([])
const filtro = ref('')

function aggiungiLibro() {
  if (nuovoLibro.value.trim()) {
    libri.value.push(nuovoLibro.value.trim())
    nuovoLibro.value = ''
  }
}

function rimuoviLibro(index: number) {
  libri.value.splice(index, 1)
}
</script>

<template>
  <div>
    <h2>Libri Preferiti</h2>
    <input
      type="text"
      v-model="nuovoLibro"
      placeholder="Titolo libro..."
    />
    <button @click="aggiungiLibro">Aggiungi libro</button>

    <input
      type="text"
      v-model="filtro"
      placeholder="Filtra per titolo..."
      style="margin-left:1em"
    />

    <ul>
      <li
        v-for="(libro, idx) in libri.filter(l => l.toLowerCase().includes(filtro.toLowerCase()))"
        :key="libro + idx"
        :style="{ color: idx % 2 === 0 ? 'blue' : 'green' }"
      >
        {{ libro }}
        <button @click="rimuoviLibro(idx)">Rimuovi</button>
      </li>
    </ul>

    <p v-if="libri.length === 0">Nessun libro inserito!</p>
  </div>
</template>