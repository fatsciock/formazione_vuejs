<script lang="ts" setup>
import { computed, ref } from "vue";

interface Prodotto {
  nome: string;
  quantita: number;
  prezzo: number;
  
  nomeNuovo: string;
  quantitaNuova: number;
  prezzoNuovo: number;

  inModifica: boolean;
  preso: boolean;
}

const spesa = ref<Prodotto[]>([]);

const searchQuery = ref("");
const nome = ref("");
const quantita = ref(1);
const prezzo = ref(0.01);

function aggiungi() {
  if (!nome.value.trim() || quantita.value <= 0 || prezzo.value < 0) return;

  const nuovoProdotto: Prodotto = {
    nome: nome.value.trim(),
    quantita: quantita.value,
    prezzo: prezzo.value,
    nomeNuovo: nome.value.trim(),
    quantitaNuova: quantita.value,
    prezzoNuovo: prezzo.value,
    inModifica: false,
    preso: false
  };

  spesa.value.push(nuovoProdotto);

  resetForm();
}

function rimuoviProdotto(index: number) {
  spesa.value.splice(index, 1);
}

function gestisciSalvataggio(item: Prodotto) {
  item.nome = item.nomeNuovo;
  item.quantita = item.quantitaNuova;
  item.prezzo = item.prezzoNuovo;
  item.inModifica = false;
}

function gestisciAnnulla(item: Prodotto) {
  item.nomeNuovo = item.nome;
  item.quantitaNuova = item.quantita;
  item.prezzoNuovo = item.prezzo;
  item.inModifica = false;
}

function resetForm() {
  nome.value = "";
  quantita.value = 1;
  prezzo.value = 0.01;
}

const filteredSpesa = computed(() => {
	let result = spesa.value;
	if (searchQuery.value.trim() !== "") {
		result = result.filter((p: Prodotto) => 
			p.nome.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase())
		);
	}
	return result;
});

const totale = computed(() => {
  return spesa.value.reduce((s, p) => s + p.quantita * p.prezzo, 0);
});

const numeroProdotti = computed(() => {
	return spesa.value.reduce((numProd, nuovoProdotto) => numProd + nuovoProdotto.quantita, 0);
})
</script>

<template>
  <div>
    <h1>🛒 Lista della Spesa Completa</h1>

	<div class="form-container">
		<form @submit.prevent="aggiungi">
		<label>
			Articolo:
			<input
			v-model="nome"
			type="text"
			placeholder="Nome articolo"
			required
			class="input-form"
			/>
		</label>

		<label>
			Quantità:
			<input
			v-model.number="quantita"
			type="number"
			min="1"
			required
			class="input-form"
			/>
		</label>

		<label>
			Prezzo unitario (€):
			<input
			v-model.number="prezzo"
			type="number"
			step="0.01"
			min="0.01"
			required
			class="input-form"
			/>
		</label>

		<button type="submit">Aggiungi</button>
		</form>

		<label>
			<input
				v-model="searchQuery"
				type="text"
				class="input-form"
				placeholder="Cerca prodotto"
			/>
		</label>
	</div>
    <table>
      <thead>
        <tr>
          <th>✔</th>
          <th>Articolo</th>
          <th>Quantità</th>
          <th>Prezzo unitario (€)</th>
          <th>Totale (€)</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredSpesa" :key="index" :class="{ preso: item.preso }">
          <td>
            <input :disabled="item.inModifica" type="checkbox" v-model="item.preso" />
          </td>
          <td>
            <input v-if="item.inModifica" type="text" v-model="item.nomeNuovo" />
            <span v-else>{{ item.nome }}</span>
          </td>
          <td>
            <input v-if="item.inModifica" type="number" v-model.number="item.quantitaNuova" min="1" />
            <span v-else>{{ item.quantita }}</span>
          </td>
          <td>
            <input v-if="item.inModifica" type="number" v-model.number="item.prezzoNuovo" step="0.01" min="0.01" />
            <span v-else>{{ item.prezzo.toFixed(2) }}</span>
          </td>
          <td>
            {{ (item.quantita * item.prezzo).toFixed(2) }}
          </td>
          <td>
            <span v-if="!item.inModifica">
              <button
                :disabled="item.preso"
                @click="item.inModifica = true"
                class="action-button"
              >
                Modifica
              </button>
              <button 
                :disabled="item.preso"
                @click="rimuoviProdotto(index)"
              >
                Rimuovi
              </button>
            </span>
            <span v-else>
              <button 
                @click="gestisciSalvataggio(item)"
                class="action-button"
              >
                Salva
              </button>
              <button 
                @click="gestisciAnnulla(item)"
              >
                Annulla
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

	<div class="form-container">
		<p class="total">
			Totale:
			<span v-if="totale > 100">
				(10% sconto applicato!)
			</span>
			{{ totale > 100 ? (totale * 0.9).toFixed(2) : totale }} €
		</p>
		<p>
			Prodotti nel carrello: {{ spesa.length }}
		</p>
		<p>
			Quantità totale prodotti: {{ numeroProdotti }}
		</p>
		<p>
			Prodotti mostrati: {{ filteredSpesa.length }}
		</p>
	</div>
    
  </div>
</template>

<style scoped>
.form-container {
	display: flex;
	align-items: flex-end;
  	gap: 1rem;
}

.input-form { 
  padding: 5px; 
  margin: 0 5px 10px 0;
  width: 120px; 
}

button { 
  padding: 5px 10px; 
}

.action-button {
  margin-right: 5px;
}

table { 
  border-collapse: collapse; 
  width: 100%; 
  margin-top: 10px;
}

th, td {
  border: 1px solid #888;
  padding: 8px; 
  text-align: left;
  width: 19%;
}

th:first-child,
td:first-child {
  width: 1%; /* forza il minimo possibile */
  white-space: nowrap; /* evita che si allarghi troppo */
  text-align: center;
}

th { 
  background: #eee; 
}

.total {
  margin-top: 10px; 
  font-weight: bold;
}

.preso {
  background-color: #f0f0f0;
  color: #888;
  text-decoration: line-through;
}
</style>