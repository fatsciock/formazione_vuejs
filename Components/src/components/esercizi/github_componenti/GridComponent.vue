<script setup lang="ts">
import { ref, watch } from "vue";
import UserCard from '@/components/esercizi/github_componenti/UserCard.vue';
import type { UtenteGitHub, RequestResult, DettagliUtenteGitHub } from '@/components/esercizi/github_componenti/github.types';

const ricerca = ref("");
const utenti = ref<UtenteGitHub[]>([]);
const dettagli = ref<Record<number, DettagliUtenteGitHub | null>>({});
const staCaricando = ref(false);
let timer: number | null = null;

watch(ricerca, (nuovoValore: string) => {
	staCaricando.value = true;
	if (timer) clearTimeout(timer);

	timer = setTimeout(async () => {
		try {
			if (nuovoValore.trim() !== "") {
				const risposta = await fetch(`https://api.github.com/search/users?q=${nuovoValore}`);
				const dati: RequestResult = await risposta.json();
				utenti.value = dati.items || [];
				dettagli.value = {};
			} else {
				utenti.value = [];
				dettagli.value = {};
			}
		} catch (errore) {
			console.error("Errore durante il caricamento:", errore);
			utenti.value = [];
		} finally {
			staCaricando.value = false;
		}
	}, 500);
});

async function caricaDettagli(utente: UtenteGitHub) {
	if (dettagli.value[utente.id] !== undefined) return;

	try {
		const risposta = await fetch(utente.url);
		const dati: DettagliUtenteGitHub = await risposta.json();
		dettagli.value[utente.id] = dati;
	} catch (errore) {
		console.error("Errore nel caricamento dettagli:", errore);
		dettagli.value[utente.id] = null;
	}
}
</script>

<template>
	<div class="github-search">
		<p>
			Documentazione dell'API:
			<a
				href="https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-users"
				target="_blank"
			>
				link
			</a>
		</p>

		<input
			type="text"
			v-model="ricerca"
			placeholder="Cerca un utente GitHub..."
		/>

		<p v-if="staCaricando">Caricamento...</p>
		<div v-if="!staCaricando && utenti.length === 0 && ricerca">
			Nessun utente trovato.
		</div>

		<div class="card-container">
			<UserCard
				v-for="utente in utenti"
				:key="utente.id"
				:utente="utente"
				:dettagli="dettagli[utente.id]"
				@richiedi-dettagli="caricaDettagli"
			/>
		</div>
	</div>
</template>

<style scoped>
.github-search {
	max-width: 1000px;
	margin: 0 auto;
	font-family: sans-serif;
	text-align: center;
}

input {
	width: 100%;
	max-width: 400px;
	padding: 8px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	border-radius: 6px;
}

.card-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 20px;
}
</style>
