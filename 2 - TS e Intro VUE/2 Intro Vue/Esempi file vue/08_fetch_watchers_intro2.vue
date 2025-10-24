<script setup lang="ts">
import { ref, watch } from "vue";

// Documentazione API ufficiale:
// https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-users

interface UtenteGitHub {
	id: number;
	login: string;
	avatar_url: string;
	url: string;
	html_url: string;
	repos_url: string;
	type: string;
}

interface RequestResult {
	items: UtenteGitHub[];
	total_count: number;
}

const ricerca = ref("");                     // testo inserito dall’utente
const utenti = ref<UtenteGitHub[]>([]);      // risultati della ricerca
const staCaricando = ref(false);             // mostra "Caricamento..."
let timer: number | null = null;             // per il debounce

// Osserva i cambiamenti di "ricerca"
watch(ricerca, (nuovoValore: string) => {
	staCaricando.value = true;
	if (timer) clearTimeout(timer);

	// Aspetta 500 ms prima di fare la richiesta (debounce)
	timer = setTimeout(async () => {
		try {
			if (nuovoValore.trim() !== "") {
				const risposta = await fetch(`https://api.github.com/search/users?q=${nuovoValore}`);
				const dati: RequestResult = await risposta.json();
				utenti.value = dati.items || [];
			} else {
				utenti.value = [];
			}
		} catch (errore) {
			console.error("Errore durante il caricamento:", errore);
			utenti.value = [];
		} finally {
			staCaricando.value = false;
		}
	}, 500);
});
</script>

<template>
	<div class="github-search">
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
			<div v-for="utente in utenti" :key="utente.id" class="user-card">
				<img :src="utente.avatar_url" :alt="`Avatar di ${utente.login}`" />
				<h3>{{ utente.login }}</h3>
				<p>Tipo: {{ utente.type }}</p>
				<div class="links">
					<a :href="utente.html_url" target="_blank">Profilo GitHub</a>
					<a :href="utente.repos_url" target="_blank">Repository</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.github-search {
	max-width: 900px;
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
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	gap: 16px;
}

.user-card {
	background-color: #f9f9f9;
	border: 1px solid #ddd;
	border-radius: 12px;
	padding: 12px;
	transition: transform 0.2s;
}

.user-card:hover {
  	transform: scale(1.03);
}

.user-card img {
	width: 80px;
	height: 80px;
	border-radius: 50%;
	object-fit: cover;
}

.user-card h3 {
	margin: 10px 0 5px;
	font-size: 1.1em;
}

.user-card p {
	font-size: 0.9em;
	color: #666;
}

.user-card .links {
	margin-top: 8px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.user-card a {
	color: #0366d6;
	text-decoration: none;
	font-size: 0.9em;
}

.user-card a:hover {
  	text-decoration: underline;
}
</style>
