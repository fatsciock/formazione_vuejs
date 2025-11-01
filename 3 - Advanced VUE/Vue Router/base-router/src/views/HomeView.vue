<!-- src/views/HomeView.vue -->
<script setup lang="ts">
// Nessuna logica JavaScript necessaria per questa semplice vista
</script>

<template>
	<div class="home-container">
		<h1>Benvenuto nella nostra Applicazione di Prova!</h1>
		<p>
			Questa è la pagina principale. Da qui puoi iniziare a esplorare le funzionalità
			che abbiamo costruito per imparare a usare Vue Router.
		</p>
		<p>
			L'esempio principale di questa lezione riguarda la gestione di una lista di utenti
			e delle loro pagine di dettaglio.
		</p>
		<router-link to="/users" class="cta-button">
			Vai alla Lista Utenti
		</router-link>
	</div>
</template>

<style scoped>
.home-container {
	max-width: 800px;
	margin: 2rem auto;
	padding: 2rem;
	text-align: center;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: #f9f9f9;
}

h1 {
	color: #2c3e50;
	margin-bottom: 1rem;
}

p {
	color: #333;
	line-height: 1.6;
	margin-bottom: 1.5rem;
}

.cta-button {
	display: inline-block;
	padding: 12px 24px;
	border-radius: 4px;
	background-color: #42b983;
	color: white;
	text-decoration: none;
	font-weight: bold;
	transition: background-color 0.3s ease;
}

.cta-button:hover {
	background-color: #34966b;
}
</style>