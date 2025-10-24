<script setup lang="ts">
import { ref, computed } from "vue";

interface Prodotto {
  nome: string;
  prezzo: number;
  quantita: number;
}

const prodotti = ref<Prodotto[]>([
  { nome: "Mela", prezzo: 1.2, quantita: 5 },
  { nome: "Banana", prezzo: 0.8, quantita: 8 },
  { nome: "Arancia", prezzo: 1.5, quantita: 4 },
]);

const nome = ref("");
const prezzo = ref(0);
const quantita = ref(1);

function aggiungiProdotto() {
  if (!nome.value) return;
  prodotti.value.push({
    nome: nome.value,
    prezzo: prezzo.value,
    quantita: quantita.value,
  });
  nome.value = "";
  prezzo.value = 0;
  quantita.value = 1;
}

// const totale = computed(() => {
//   return prodotti.value.reduce(
//     (somma: number, p: Prodotto) => 
//       somma + p.prezzo * p.quantita, 0);
// });

const totale = prodotti.value.reduce(
    (somma: number, p: Prodotto) => 
      somma + p.prezzo * p.quantita, 0);
</script>

<template>
  <h2>Lista Prodotti</h2>

  <input v-model="nome" placeholder="Nome" />
  <input v-model.number="prezzo" type="number" placeholder="Prezzo" />
  <input v-model.number="quantita" type="number" placeholder="Quantità" />
  <button @click="aggiungiProdotto">Aggiungi</button>

  <ul>
    <li v-for="(p, i) in prodotti" :key="i">
      {{ p.nome }} – €{{ p.prezzo.toFixed(2) }} × {{ p.quantita }}
      = <strong>€{{ (p.prezzo * p.quantita).toFixed(2) }}</strong>
    </li>
  </ul>

  <hr />

  <p>
    <strong>Totale:</strong> €{{ totale.toFixed(2) }}
  </p>
</template>
