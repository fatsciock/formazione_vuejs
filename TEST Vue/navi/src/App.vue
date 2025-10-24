<script setup lang="ts">
import { ref } from 'vue';
import type { Nave } from '@/types/nave';
import ShipList from '@/components/ShipList.vue';

// Stato centrale delle navi
const navi = ref<Nave[]>([
	{ nome: 'Titanic', tipo: 'Crociera', annoCostruzione: 1912, stazza: 52310, stato: 'Fuori uso' },
	{ nome: 'Poseidon', tipo: 'Militare', annoCostruzione: 2005, stazza: 15000, stato: 'In servizio' },
	{ nome: 'Fisher 1', tipo: 'Peschereccio', annoCostruzione: 1998, stazza: 120, stato: 'In manutenzione' },
]);

// Opzioni
const tipiDisponibili = ['Crociera', 'Peschereccio', 'Militare', 'Cargo'];
const statiDisponibili = ['In servizio', 'In manutenzione', 'Fuori uso'];

// Form e modifica
const form = ref<Nave>({
	nome: '',
	tipo: 'Crociera',
	annoCostruzione: new Date().getFullYear(),
	stazza: 0,
	stato: 'In servizio',
});

const naveDaModificare = ref<Nave | null>(null);

// Gestione submit
function handleSubmit() {
	if (naveDaModificare.value) {
		// Modifica: sostituisci la nave esistente
		const index = navi.value.findIndex(
			n => n.nome === naveDaModificare.value!.nome && n.annoCostruzione === naveDaModificare.value!.annoCostruzione
		);
		if (index !== -1) {
			navi.value[index] = { ...form.value };
		}
		naveDaModificare.value = null;
	} else {
		// Aggiungi nuova nave
		navi.value.push({ ...form.value });
	}
	resetForm();
}

// Apri modifica
function apriModifica(nave: Nave) {
	naveDaModificare.value = nave;
	form.value = { ...nave }; // riempi il form con i dati della nave
}

// Annulla modifica
function annullaModifica() {
	naveDaModificare.value = null;
	resetForm();
}

// Reset form
function resetForm() {
	form.value = {
		nome: '',
		tipo: 'Crociera',
		annoCostruzione: new Date().getFullYear(),
		stazza: 0,
		stato: 'In servizio',
	};
}

// Eliminazione
function eliminaNave(nave: Nave) {
	const index = navi.value.indexOf(nave);
	if (index !== -1) navi.value.splice(index, 1);
}
</script>

<template>
	<div class="app-container">
		<h1>Catalogo Navi</h1>

		<!-- Form per aggiungere o modificare una nave -->
		<div class="add-form">
			<h2>{{ naveDaModificare ? 'Modifica Nave' : 'Aggiungi Nave' }}</h2>
			<form @submit.prevent="handleSubmit">
				<label>
					Nome:
					<input v-model="form.nome" required />
				</label>

				<label>
					Tipo:
					<select v-model="form.tipo" required>
						<option v-for="tipo in tipiDisponibili" :key="tipo">{{ tipo }}</option>
					</select>
				</label>

				<label>
					Anno costruzione:
					<input type="number" v-model.number="form.annoCostruzione" required />
				</label>

				<label>
					Stazza:
					<input type="number" v-model.number="form.stazza" required />
				</label>

				<label>
					Stato:
					<select v-model="form.stato" required>
						<option v-for="stato in statiDisponibili" :key="stato">{{ stato }}</option>
					</select>
				</label>

				<button type="submit">{{ naveDaModificare ? 'Salva Modifica' : 'Aggiungi' }}</button>
				<button v-if="naveDaModificare" type="button" @click="annullaModifica">Annulla</button>
			</form>
		</div>

		<!-- Lista navi -->
		<ShipList :navi="navi" @elimina="eliminaNave" @modifica="apriModifica" />
	</div>
</template>

<style scoped>
.app-container {
	max-width: 700px;
	margin: 0 auto;
	padding: 20px;
}

.add-form {
	margin-bottom: 20px;
	padding: 10px;
	border: 1px solid #aaa;
	border-radius: 6px;
	background-color: #f9f9f9;
}

.add-form label {
	display: flex;
	flex-direction: column;
	margin-bottom: 8px;
}

.add-form input,
.add-form select {
	padding: 4px;
	margin-top: 2px;
}

.add-form button {
	padding: 6px 12px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	margin-right: 6px;
}

.add-form button[type="submit"] {
	background-color: #5cb85c;
	color: white;
}

.add-form button[type="submit"]:hover {
	background-color: #4cae4c;
}

.add-form button[type="button"] {
	background-color: #d9534f;
	color: white;
}

.add-form button[type="button"]:hover {
	background-color: #c9302c;
}
</style>
