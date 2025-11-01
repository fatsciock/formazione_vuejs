<script setup lang="ts">
import type { User } from '@/data/users';
import { useRouter } from 'vue-router';

defineProps<{
	users: User[]
}>();

const router = useRouter();
function navigateToUser(userId: number) {
	console.log(`Navigazione programmatica verso l'utente con ID: ${userId}`);

	// Usiamo il metodo push() del router per cambiare l'URL.
	// L'effetto finale è identico a cliccare su un <router-link>.
	// In questo caso bisogna scrivere l'url in maniera esplicita
	//router.push(`/users/${userId}`);

	// Oppure, si può utilizzare il name che abbiamo assegnato alla rotta,
	// rendendo tutto più sicuro: se cambia l'url (dentro index.ts delle routes)
	// non devo cambiare l'url in ogni componente in cui richiamo la rotta
	router.push({
		name: 'user-detail',
		params: {
			id: userId
		}
	});
}
</script>

<template>
	<ul class="user-list">
		<!-- Modo 1 -->
		<!-- <li v-for="user in users" :key="user.id">
					
				Creiamo un link dinamico. L'attributo ':to' viene "bindato" a un'espressione
				JavaScript che costruisce l'URL corretto per ogni utente.
				Es. Per l'utente con id: 1, il link punterà a '/users/1'.
			
			<router-link :to="`/users/${user.id}`">
				<span class="user-name">{{ user.name }}</span>
				<span class="user-username">@{{ user.username }}</span>
			</router-link>
		</li> -->

		<!-- Modo 2 -->
		<li v-for="user in users" :key="user.id" @click="navigateToUser(user.id)" tabindex="0"
			@keydown.enter="navigateToUser(user.id)">
			<span class="user-name">{{ user.name }}</span>
			<span class="user-username">@{{ user.username }}</span>
		</li>
	</ul>
</template>

<style scoped>
.user-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.user-list li {
  margin-bottom: 0.5rem;
  display: block;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
  cursor: pointer; /* <-- ESSENZIALE per la UX! */
}

.user-list li:hover,
.user-list li:focus {
  border-color: #42b983;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  outline: none;
}

.user-list a {
	display: block;
	padding: 1rem;
	border: 1px solid #ddd;
	border-radius: 8px;
	text-decoration: none;
	color: #2c3e50;
	transition: all 0.3s ease;
}

.user-list a:hover {
	border-color: #42b983;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transform: translateY(-2px);
}

.user-name {
	font-weight: bold;
}

.user-username {
	margin-left: 0.5rem;
	color: #7f8c8d;
	font-size: 0.9em;
}
</style>