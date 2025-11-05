<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const router = useRouter();
const authStore = useAuthStore();

// Usiamo storeToRefs per estrarre le proprietà dallo store
// mantenendo la loro reattività. È la best practice raccomandata.
const { isLoggedIn, userName } = storeToRefs(authStore);

function handleLogout() {
	// Chiamiamo l'azione di logout dello store
	authStore.logout();

	// Dopo il logout, reindirizziamo l'utente alla pagina home
	// per evitare che rimanga su una pagina protetta "vuota".
	router.push({ name: 'home' });
}
</script>

<template>
	<header class="main-header">
		<div class="logo">
			<router-link :to="{ name: 'home' }">AuthApp</router-link>
		</div>
		<nav class="main-nav">
			<ul>
				<li>
					<router-link :to="{ name: 'home' }">Home</router-link>
				</li>

				<!-- Link condizionali basati sullo stato di login -->
				<template v-if="isLoggedIn">
					<li>
						<router-link :to="{ name: 'profile' }">Profilo</router-link>
					</li>
					<li>
						<span class="welcome-message">Ciao, {{ userName }}</span>
					</li>
					<li>
						<button @click="handleLogout" class="logout-button">Logout</button>
					</li>
				</template>
				<template v-else>
					<li>
						<router-link :to="{ name: 'login' }">Login</router-link>
					</li>
				</template>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
.main-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: #fff;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo a {
	font-weight: bold;
	font-size: 1.5rem;
	color: #2c3e50;
	text-decoration: none;
}

.main-nav ul {
	list-style: none;
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
	gap: 1.5rem;
}

.main-nav a {
	text-decoration: none;
	color: #333;
	font-weight: 500;
	transition: color 0.3s;
}

.main-nav a:hover {
	color: #42b983;
}

/* Stile per il link della pagina attiva */
.main-nav a.router-link-active {
	color: #42b983;
	border-bottom: 2px solid #42b983;
	padding-bottom: 4px;
}

.welcome-message {
	color: #7f8c8d;
}

.logout-button {
	background-color: #e74c3c;
	color: white;
	border: none;
	padding: 8px 16px;
	border-radius: 4px;
	cursor: pointer;
	font-weight: bold;
	transition: background-color 0.3s;
}

.logout-button:hover {
	background-color: #c0392b;
}
</style>