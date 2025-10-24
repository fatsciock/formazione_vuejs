<script setup lang="ts">
import { ref, watch } from "vue";

interface UtenteGitHub {
	id: number;
	login: string;
	avatar_url: string;
	html_url: string;
	url: string;
	repos_url: string;
	followers_url: string;
	following_url: string;
	organizations_url: string;
	type: string;
	site_admin: boolean;
	score: number;
}

interface RequestResult {
	items: UtenteGitHub[];
	total_count: number;
}

// Risposta della seconda API: GET /users/:username
interface DettagliUtenteGitHub {
	name: string | null;
	company: string | null;
	location: string | null;
	bio: string | null;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
}

const ricerca = ref("");							// testo inserito dall’utente
const utenti = ref<UtenteGitHub[]>([]);				// risultati della ricerca
const dettagli = ref<Record<number, DettagliUtenteGitHub | null>>({}); // dettagli utente per id
const staCaricando = ref(false);					// mostra "Caricamento..."
let timer: number | null = null;					// per il debounce

// Osserva i cambiamenti di "ricerca"
watch(ricerca, (nuovoValore: string) => {
	staCaricando.value = true;
	if (timer) clearTimeout(timer);

	// debounce di 500 ms
	timer = setTimeout(async () => {
		try {
			if (nuovoValore.trim() !== "") {
				const risposta = await fetch(`https://api.github.com/search/users?q=${nuovoValore}`);
				const dati: RequestResult = await risposta.json();
				utenti.value = dati.items || [];
				dettagli.value = {}; // reset dettagli
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

// Funzione per caricare i dettagli utente
async function caricaDettagli(utente: UtenteGitHub) {
	// Evita richieste duplicate
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
		<p>Documentazione dell'API: <a href="https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-users" target="_blank">link</a></p>
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
			<div 
				v-for="utente in utenti" 
				:key="utente.id" 
				class="user-card"
			>
				<img :src="utente.avatar_url" :alt="`Avatar di ${utente.login}`" />
				<h3>{{ utente.login }}</h3>
				<p>Tipo: {{ utente.type }}</p>

				<p v-if="utente.site_admin" class="admin-badge">🛡️ Admin</p>

				<p class="score">Score: {{ utente.score.toFixed(2) }}</p>

				<div class="links">
					<a :href="utente.html_url" target="_blank">Profilo GitHub</a>
					<a :href="utente.repos_url" target="_blank">Repository</a>
				</div>

				<!-- Dettagli utente -->
				<div v-if="dettagli[utente.id]" class="user-details">
					<p v-if="dettagli[utente.id]?.name"><b>Nome:</b> {{ dettagli[utente.id]?.name }}</p>
					<p v-if="dettagli[utente.id]?.company"><b>Azienda:</b> {{ dettagli[utente.id]?.company }}</p>
					<p v-if="dettagli[utente.id]?.location"><b>Luogo:</b> {{ dettagli[utente.id]?.location }}</p>
					<p v-if="dettagli[utente.id]?.bio"><b>Bio:</b> {{ dettagli[utente.id]?.bio }}</p>
					<p>
						<b>Repo pubblici:</b> {{ dettagli[utente.id]?.public_repos }} |
						<b>Follower:</b> {{ dettagli[utente.id]?.followers }} |
						<b>Following:</b> {{ dettagli[utente.id]?.following }}
					</p>
					<p>
						<b>Iscritto dal:</b>
						{{ new Date(dettagli[utente.id]?.created_at || "").toLocaleDateString("it-IT") }}
					</p>
				</div>

				<button 
					v-else 
					class="dettagli-btn" 
					@click="caricaDettagli(utente)"
				>
					Mostra dettagli
				</button>
			</div>
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

.user-card {
	background-color: #f9f9f9;
	border: 1px solid #ddd;
	border-radius: 12px;
	padding: 16px;
	transition: transform 0.2s;
}

.user-card:hover {
	transform: scale(1.03);
}

.user-card img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
}

.user-card h3 {
	margin: 10px 0 5px;
	font-size: 1.2em;
}

.user-card p {
	font-size: 0.9em;
	color: #444;
	margin: 4px 0;
}

.user-card .score {
	color: #666;
	font-size: 0.85em;
}

.admin-badge {
	color: #d32f2f;
	font-weight: bold;
}

.links {
	margin-top: 8px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

a {
	color: #0366d6;
	text-decoration: none;
	font-size: 0.9em;
}

a:hover {
	text-decoration: underline;
}

.dettagli-btn {
	margin-top: 10px;
	padding: 6px 10px;
	background-color: #0366d6;
	color: white;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	font-size: 0.9em;
}

.dettagli-btn:hover {
	background-color: #024ea1;
}

.user-details {
	margin-top: 10px;
	padding-top: 8px;
	border-top: 1px solid #ccc;
	text-align: left;
}
</style>
