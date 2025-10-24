<script setup lang="ts">
import { ref, watch } from 'vue'

/**
 * 
 * Con questo esempio spieghi non solo i watcher ma anche la fetch.
 * Forse è adirittura meglio iniziare con la fetch e far vedere come si possono recuperare dei dati.
 * COME ESERCIZIO DA FAR FARE A LORO:
 * implementare vari filtri
 * Link: https://web.dragonball-api.com/
 */

const showImage = ref(true);

interface Character {
  id: number;
  name: string;
  ki: string;
  race: string;
  gender: string;
  image: string;
  affiliation: string;
}

const characters = ref<Character[]>([]);
const loading = ref(true);
const firstPage = ref("");
const lastPage = ref("");
const nextPage = ref("");
const prevPage = ref("");
const page = ref(1);
const totPage = ref(1);
const elementPerPage = ref(10);

const baseUrl = "https://dragonball-api.com/api/characters";

async function fetchData(url?: string) {
  try {
	const targetUrl = url || `${baseUrl}?limit=${elementPerPage.value}`;
    const response = await fetch(targetUrl);
    const result = await response.json();
    // L’API restituisce un array in result.items
    characters.value = result.items;

	// Aggiorna link
	firstPage.value = result.links.first;
	lastPage.value = result.links.last;
	nextPage.value = result.links.next;
	prevPage.value = result.links.previous;

	// Aggiorna paginazione
	page.value = result.meta.currentPage;
	totPage.value = result.meta.totalPages;
  } catch (error) {
    console.error("Errore nel fetch:", error);
  } finally {
    loading.value = false;
  }
}

fetchData(baseUrl);

watch(elementPerPage, () => {
	fetchData();
})
</script>

<template>
	<div>
		<h1>Personaggi di Dragon Ball</h1>
        <div style="display: flex; align-items: center; gap: 8px;">
			<p>
				Documentazione dell'API:
				<a href="https://web.dragonball-api.com/" target="_blank">link</a>
			</p>
			<label>
				<input type="checkbox" v-model="showImage" />
				Mostra immagine
			</label>
		</div>
		

    	<p v-if="loading">Caricamento in corso...</p>

		<div v-else>
			<table>
				<thead>
					<tr>
					<th v-if="showImage">Immagine</th>
					<th>Nome</th>
					<th>Ki</th>
					<th>Razza</th>
					<th>Genere</th>
					<th>Affiliazione</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="character in characters" :key="character.id">
						<td v-if="showImage">
							<img :src="character.image" :alt="character.name" width="80" />
						</td>
						<td>{{ character.name }}</td>
						<td>{{ character.ki || "?" }}</td>
						<td>{{ character.race || "?" }}</td>
						<td>{{ character.gender || "?" }}</td>
						<td>{{ character.affiliation || "?" }}</td>
					</tr>
				</tbody>
			</table>
			<div class="pagination">
				<button 
					:disabled="firstPage.trim().length <= 0"
					@click="fetchData(firstPage)"
				>
					Prima pagina
				</button>
				<button 
					:disabled="prevPage.trim().length <= 0"
					@click="fetchData(prevPage)"
				>
					<
				</button>
				<span> Pagina {{ page }} di {{ totPage }}</span>
				<button 
					:disabled="nextPage.trim().length <= 0"
					@click="fetchData(nextPage)"
				>
					>
				</button>
				<button 
					:disabled="lastPage.trim().length <= 0"
					@click="fetchData(lastPage)"
				>
					Ultima pagina
				</button>
				<span>Elementi per pagina: </span>	
				<select v-model="elementPerPage">
					<option value="10">10</option>
					<option value="15">15</option>
					<option value="20">20</option>
				</select>
			</div>
		</div>
	</div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th {
  background-color: #f0f0f0;
}

img {
  border-radius: 8px;
}

.pagination {
	text-align: center;
	padding: 15px;
}

.pagination button {
	padding: 7px;
	margin: 5px;
}
</style>