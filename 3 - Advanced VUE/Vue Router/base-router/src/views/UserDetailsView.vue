<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import UserDetails from '@/components/Users/UserDetails.vue';
import { fetchUserById } from '@/data/users';

// 1. Otteniamo l'accesso all'oggetto della rotta corrente
const route = useRoute();

// 2. Usiamo una 'computed property' per trovare l'utente.
// Questo è molto efficiente perché si ricalcola automaticamente se la rotta dovesse cambiare.
const user = computed(() => {
	// 3. Leggiamo il parametro 'id' dall'URL. È una stringa, quindi va convertita in numero!
	const userId = parseInt(route.params.id as string, 10);

	// Controlliamo che l'ID sia un numero valido
	if (isNaN(userId)) {
		return undefined;
	}

	// 4. Usiamo la nostra funzione per trovare l'utente corrispondente all'ID.
	return fetchUserById(userId);
});
</script>

<template>
	<div>
		<!-- Se l'utente è stato trovato, mostriamo il componente UserDetails -->
		<div v-if="user">
			<UserDetails :user="user" />
		</div>
		<!-- Altrimenti, mostriamo un messaggio di errore -->
		<div v-else class="not-found">
			<h2>Utente Non Trovato</h2>
			<p>Non è stato possibile trovare un utente con l'ID "{{ route.params.id }}".</p>
			<router-link to="/users">Torna alla lista</router-link>
		</div>
	</div>
</template>

<style scoped>
.not-found {
	text-align: center;
	margin-top: 4rem;
	padding: 2rem;
	background-color: #f8d7da;
	color: #721c24;
	border: 1px solid #f5c6cb;
	border-radius: 8px;
}

.not-found a {
	color: #721c24;
	font-weight: bold;
}
</style>