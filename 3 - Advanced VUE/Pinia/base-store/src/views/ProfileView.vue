<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

// Non abbiamo bisogno di logica complessa qui.
// Il componente si aspetta che la guardia di navigazione del router
// abbia già verificato che l'utente sia loggato prima di renderizzarlo.
// Accediamo direttamente all'utente dallo stato dello store.
const user = authStore.user;
</script>

<template>
	<div class="profile-container">
		<!-- Usiamo un v-if per sicurezza: nel caso in cui la pagina venga raggiunta
         senza che l'utente sia nello store, evitiamo errori nel template. -->
		<div v-if="user" class="profile-card">
			<div class="card-header">
				<h1>Profilo di {{ user.name }}</h1>
				<p>Benvenuto nella tua area personale!</p>
			</div>

			<div class="card-body">
				<div class="info-group">
					<span class="label">ID Utente:</span>
					<span class="value">{{ user.id }}</span>
				</div>
				<div class="info-group">
					<span class="label">Email:</span>
					<span class="value">{{ user.email }}</span>
				</div>
				<div class="info-group">
					<span class="label">Sito Web:</span>
					<span class="value">
						<a :href="`http://${user.website}`" target="_blank">{{ user.website }}</a>
					</span>
				</div>
				<div class="info-group">
					<span class="label">Indirizzo:</span>
					<span class="value">
						{{ user.address.street }}, {{ user.address.city }} ({{ user.address.zipcode }})
					</span>
				</div>
			</div>
		</div>

		<!-- Messaggio di fallback nel caso improbabile che l'utente non sia definito -->
		<div v-else class="loading-error">
			<p>Impossibile caricare i dati del profilo. Prova a effettuare nuovamente il login.</p>
			<router-link :to="{ name: 'login' }">Vai al Login</router-link>
		</div>
	</div>
</template>

<style scoped>
.profile-container {
	max-width: 800px;
	margin: 2rem auto;
}

.profile-card {
	background: white;
	border-radius: 8px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	overflow: hidden;
}

.card-header {
	background-color: #42b983;
	color: white;
	padding: 2rem;
}

.card-header h1 {
	margin: 0;
	font-size: 2rem;
}

.card-header p {
	margin: 0.5rem 0 0;
	opacity: 0.9;
}

.card-body {
	padding: 2rem;
}

.info-group {
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;
	border-bottom: 1px solid #f0f0f0;
}

.info-group:last-child {
	border-bottom: none;
}

.label {
	font-weight: 500;
	color: #333;
}

.value {
	color: #555;
}

.value a {
	color: #3498db;
	text-decoration: none;
}

.value a:hover {
	text-decoration: underline;
}

code.value {
	background-color: #eef1f6;
	padding: 4px 8px;
	border-radius: 4px;
	color: #e74c3c;
	font-weight: bold;
}

.password-section {
	margin-top: 1.5rem;
	padding-top: 1.5rem;
	border-top: 2px dashed #f0f0f0;
}

.security-warning {
	background-color: #fffbe6;
	border: 1px solid #ffe58f;
	border-radius: 4px;
	padding: 1rem;
	margin-top: 1rem;
	font-size: 0.9em;
	color: #8a6d3b;
}

.loading-error {
	text-align: center;
	padding: 2rem;
}
</style>