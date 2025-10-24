<!-- PlaneList.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import PlaneCard from '@/components/PlaneCard.vue';
import { aerei as aereiIniziali } from '@/types/aereiData';
import type { Aereo } from '@/types/aereo';

// Stato principale
const aerei = ref<Aereo[]>([...aereiIniziali])
const filtroModello = ref('')
const filtroTipo = ref('')
const filtroCapacitaMin = ref<number | null>(null)
const filtroAutonomiaMin = ref<number | null>(null)
const filtroManutenzione = ref<'Tutti' | 'In manutenzione' | 'Operativi'>('Tutti')

const criterioOrdine = ref<'anno' | 'velocitaMassima' | 'autonomia'>('anno')
const direzione = ref<'asc' | 'desc'>('asc')

// Stato form
const nuovoAereo = ref<Aereo>({
  modello: '',
  compagnia: '',
  anno: new Date().getFullYear(),
  tipo: 'Passeggeri'
})

const inModifica = ref(false)

// FILTRI
const aereiFiltrati = computed(() => {
  let lista = [...aerei.value]

  // Filtri base
  if (filtroModello.value.trim() !== '') {
    lista = lista.filter(a =>
      a.modello.toLowerCase().includes(filtroModello.value.toLowerCase())
    )
  }

  if (filtroTipo.value !== '') {
    lista = lista.filter(a => a.tipo === filtroTipo.value)
  }

  if (filtroCapacitaMin.value != null) {
    lista = lista.filter(a => (a.capacita ?? 0) >= filtroCapacitaMin.value!)
  }

  if (filtroAutonomiaMin.value != null) {
    lista = lista.filter(a => (a.autonomia ?? 0) >= filtroAutonomiaMin.value!)
  }

  if (filtroManutenzione.value === 'In manutenzione') {
    lista = lista.filter(a => a.inManutenzione)
  } else if (filtroManutenzione.value === 'Operativi') {
    lista = lista.filter(a => !a.inManutenzione)
  }

  // Ordinamento automatico militari in cima
  lista.sort((a, b) => {
    if (a.tipo === 'Militare' && b.tipo !== 'Militare') return -1
    if (b.tipo === 'Militare' && a.tipo !== 'Militare') return 1
    return 0
  })

  // Ordinamento personalizzato
  lista.sort((a, b) => {
    const campoA = a[criterioOrdine.value] ?? 0
    const campoB = b[criterioOrdine.value] ?? 0
    return direzione.value === 'asc' ? campoA - campoB : campoB - campoA
  })

  return lista
})

// STATISTICHE
const totaleAerei = computed(() => aerei.value.length)
const numeroPerTipo = computed(() => {
  const conteggio: Record<string, number> = {}
  aerei.value.forEach(a => {
    conteggio[a.tipo] = (conteggio[a.tipo] || 0) + 1
  })
  return conteggio
})

const percentualeMilitari = computed(() => {
  if (aerei.value.length === 0) return 0
  const militari = aerei.value.filter(a => a.tipo === 'Militare').length
  return ((militari / aerei.value.length) * 100).toFixed(1)
})

const mediaAutonomia = computed(() => {
  const valori = aerei.value.map(a => a.autonomia).filter(Boolean) as number[]
  if (valori.length === 0) return 0
  return (valori.reduce((a, b) => a + b, 0) / valori.length).toFixed(0)
})

const mediaCapacita = computed(() => {
  const valori = aerei.value.map(a => a.capacita).filter(Boolean) as number[]
  if (valori.length === 0) return 0
  return (valori.reduce((a, b) => a + b, 0) / valori.length).toFixed(0)
})

// FUNZIONI
function aggiungiOAggiornaAereo() {
  if (inModifica.value) {
    const index = aerei.value.findIndex(a => a.modello === nuovoAereo.value.modello)
    if (index !== -1) {
      aerei.value[index] = { ...nuovoAereo.value }
    }
    inModifica.value = false
  } else {
    aerei.value.push({ ...nuovoAereo.value })
  }
  resetForm()
}

function rimuoviAereo(modello: string) {
  aerei.value = aerei.value.filter(a => a.modello !== modello)
}

function modificaAereo(aereo: Aereo) {
  nuovoAereo.value = { ...aereo }
  inModifica.value = true
}

function resetForm() {
  nuovoAereo.value = {
    modello: '',
    compagnia: '',
    anno: new Date().getFullYear(),
    tipo: 'Passeggeri'
  }
}
</script>

<template>
  <div class="container">
    <h2>Catalogo Aerei ✈️</h2>

    <!-- FORM -->
    <div class="form-section">
      <h3>{{ inModifica ? 'Modifica Aereo' : 'Aggiungi Nuovo Aereo' }}</h3>

      <form @submit.prevent="aggiungiOAggiornaAereo">
        <input v-model="nuovoAereo.modello" placeholder="Modello" required />
        <input v-model="nuovoAereo.compagnia" placeholder="Compagnia" required />
        <input v-model.number="nuovoAereo.anno" type="number" placeholder="Anno" required />

        <select v-model="nuovoAereo.tipo">
          <option>Passeggeri</option>
          <option>Cargo</option>
          <option>Militare</option>
          <option>Privato</option>
        </select>

        <input v-model.number="nuovoAereo.capacita" type="number" placeholder="Capacità" />
        <input v-model.number="nuovoAereo.autonomia" type="number" placeholder="Autonomia (km)" />
        <input v-model.number="nuovoAereo.velocitaMassima" type="number" placeholder="Velocità max (km/h)" />
        <input v-model.number="nuovoAereo.ultimoCheck" type="number" placeholder="Anno ultimo check" />

        <label>
          <input type="checkbox" v-model="nuovoAereo.inManutenzione" />
          In manutenzione
        </label>

        <button type="submit">{{ inModifica ? 'Aggiorna' : 'Aggiungi' }}</button>
        <button type="button" @click="resetForm" v-if="inModifica">Annulla</button>
      </form>
    </div>

    <!-- FILTRI -->
    <div class="filters">
      <h3>Filtri</h3>
      <input v-model="filtroModello" placeholder="Cerca per modello..." />
      <select v-model="filtroTipo">
        <option value="">Tutti i tipi</option>
        <option>Passeggeri</option>
        <option>Cargo</option>
        <option>Militare</option>
        <option>Privato</option>
      </select>
      <input v-model.number="filtroCapacitaMin" type="number" placeholder="Min capacità" />
      <input v-model.number="filtroAutonomiaMin" type="number" placeholder="Min autonomia" />
      <select v-model="filtroManutenzione">
        <option value="Tutti">Tutti</option>
        <option value="In manutenzione">Solo in manutenzione</option>
        <option value="Operativi">Solo operativi</option>
      </select>

      <div class="ordina">
        <label>Ordina per:</label>
        <select v-model="criterioOrdine">
          <option value="anno">Anno</option>
          <option value="velocitaMassima">Velocità</option>
          <option value="autonomia">Autonomia</option>
        </select>
        <select v-model="direzione">
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </select>
      </div>
    </div>

    <!-- STATISTICHE -->
    <div class="stats">
      <h3>Statistiche</h3>
      <p><strong>Totale aerei:</strong> {{ totaleAerei }}</p>
      <p><strong>Percentuale militari:</strong> {{ percentualeMilitari }}%</p>
      <p><strong>Media autonomia:</strong> {{ mediaAutonomia }} km</p>
      <p><strong>Media capacità:</strong> {{ mediaCapacita }} passeggeri</p>
      <ul>
        <li v-for="(num, tipo) in numeroPerTipo" :key="tipo">
          {{ tipo }}: {{ num }}
        </li>
      </ul>
    </div>

    <!-- LISTA -->
    <div class="list">
      <PlaneCard
        v-for="a in aereiFiltrati"
        :key="a.modello"
        :aereo="a"
        @rimuovi="rimuoviAereo"
        @modifica="modificaAereo"
      >
        <template #manutenzione>⚠️</template>
      </PlaneCard>

      <p v-if="aereiFiltrati.length === 0">Nessun aereo trovato.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: sans-serif;
}

form, .filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

input, select, button {
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  cursor: pointer;
  background-color: #e9ecef;
}
button:hover {
  background-color: #ced4da;
}

.stats {
  margin: 15px 0;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 8px;
}

.list {
  margin-top: 20px;
}
</style>
