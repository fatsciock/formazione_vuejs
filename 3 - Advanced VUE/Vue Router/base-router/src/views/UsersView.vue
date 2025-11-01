<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import UsersList from '@/components/Users/UsersList.vue';
import { fetchAllUsers } from '@/data/users';
import type { User } from '@/data/users'; 

const route = useRoute();
const router = useRouter();

const allUsers = ref<User[]>([]); 	// Conterrà *tutti* gli utenti, senza filtri
const searchQuery = ref('');		// Il valore del nostro campo di input

const filteredUsers = computed(() => {
	if (!searchQuery.value) {
		return allUsers.value; // Se la ricerca è vuota, ritorna tutti gli utenti
	}
	return allUsers.value.filter(user =>
		user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
	);
});

onMounted(() => {
	allUsers.value = fetchAllUsers();
	// Se l'URL è /users?search=Mario, searchQuery verrà impostato a "Mario"
	if (route.query.search) {
		searchQuery.value = route.query.search as string;
	}
});

// 4. SINCRONIZZAZIONE STATO -> URL (quando l'utente scrive)
// Usiamo un 'watcher' per reagire ai cambiamenti di searchQuery.
// Ogni volta che l'utente scrive nell'input, aggiorniamo l'URL.
watch(searchQuery, (newQuery) => {
	// Usiamo router.replace invece di router.push per non intasare la cronologia
	// del browser con ogni singolo carattere digitato.
	router.replace({ query: newQuery ? { search: newQuery } : undefined });
});
</script>

<template>
	<div class="users-view-container">
		<h1>Elenco Utenti</h1>
		<p>
			Usa la barra di ricerca qui sotto per filtrare gli utenti per nome.
			Nota come l'URL cambia mentre scrivi!
		</p>
		<!-- 5. TEMPLATE: Aggiungiamo il campo di input -->
		<div class="search-bar">
			<input type="text" v-model="searchQuery" placeholder="Cerca utente..." />
		</div>

		<hr />

		<!-- Passiamo la lista FILTRATA al componente figlio -->
		<UsersList :users="filteredUsers" />
	</div>
</template>

<style scoped>
.users-view-container {
	max-width: 800px;
	margin: 2rem auto;
	padding: 0 2rem;
}

hr {
	margin: 1.5rem 0;
}
</style>