<script setup lang="ts">
import { ref } from "vue";

const titolo = ref("");
const artista = ref("");
const filtroArtista = ref("");
const canzoni = ref<{ titolo: string; artista: string }[]>([]);

function aggiungiCanzone() {
  if (titolo.value.trim() && artista.value.trim()) {
    canzoni.value.push({
      titolo: titolo.value.trim(),
      artista: artista.value.trim(),
    });
    titolo.value = "";
    artista.value = "";
  }
}

function rimuoviCanzone(index: number) {
  canzoni.value.splice(index, 1);
}
</script>

<template>
  <div>
    <h2>Canzoni Preferite</h2>
    <input
      type="text"
      v-model="titolo"
      placeholder="Titolo canzone..."
    />
    <input
      type="text"
      v-model="artista"
      placeholder="Artista..."
      style="margin-left: 0.5em"
    />
    <button @click="aggiungiCanzone">Aggiungi</button>

    <input
      type="text"
      v-model="filtroArtista"
      placeholder="Filtra per artista..."
      style="margin-left: 1em"
    />

    <ul>
      <li
        v-for="(canzone, idx) in canzoni.filter(c => c.artista.toLowerCase().includes(filtroArtista.toLowerCase()))"
        :key="canzone.titolo + canzone.artista + idx"
        :style="{ color: idx % 2 === 0 ? 'purple' : 'orange' }"
      >
        "{{ canzone.titolo }}" di {{ canzone.artista }}
        <button @click="rimuoviCanzone(idx)">Rimuovi</button>
      </li>
    </ul>

    <p v-if="canzoni.length === 0">Nessuna canzone inserita!</p>
  </div>
</template>