<!-- PlaneCard.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import type { Aereo } from '@/types/aereo';

const props = defineProps<{
  aereo: Aereo
}>()

const emit = defineEmits<{
  (e: 'rimuovi', modello: string): void
  (e: 'modifica', aereo: Aereo): void
}>()

// Colore dinamico in base al tipo
const coloreTipo = computed(() => {
  switch (props.aereo.tipo) {
    case 'Passeggeri':
      return '#cce5ff'
    case 'Cargo':
      return '#d4edda'
    case 'Militare':
      return '#f8d7da'
    case 'Privato':
      return '#fff3cd'
    default:
      return '#f8f9fa'
  }
})
</script>

<template>
  <div class="card" :style="{ backgroundColor: coloreTipo }">
    <div class="header">
      <h3>{{ aereo.modello }}</h3>
      <slot name="manutenzione" v-if="aereo.inManutenzione">⚠️</slot>
    </div>

    <p><strong>Compagnia:</strong> {{ aereo.compagnia }}</p>
    <p><strong>Anno:</strong> {{ aereo.anno }}</p>
    <p><strong>Tipo:</strong> {{ aereo.tipo }}</p>

    <div v-if="aereo.capacita || aereo.autonomia || aereo.velocitaMassima">
      <p v-if="aereo.capacita"><strong>Capacità:</strong> {{ aereo.capacita }} passeggeri</p>
      <p v-if="aereo.autonomia"><strong>Autonomia:</strong> {{ aereo.autonomia }} km</p>
      <p v-if="aereo.velocitaMassima"><strong>Velocità max:</strong> {{ aereo.velocitaMassima }} km/h</p>
      <p v-if="aereo.ultimoCheck"><strong>Ultimo check:</strong> {{ aereo.ultimoCheck }}</p>
    </div>

    <div class="buttons">
      <button @click="emit('modifica', aereo)">✏️ Modifica</button>
      <button @click="emit('rimuovi', aereo.modello)">🗑️ Rimuovi</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h3 {
  margin: 0;
}
p {
  margin: 4px 0;
  font-size: 14px;
}
.buttons {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}
button {
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  background-color: #e9ecef;
  transition: background 0.2s;
}
button:hover {
  background-color: #ced4da;
}
</style>
