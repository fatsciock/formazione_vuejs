<script setup lang="ts"></script>

<template>
	<div class="not-found-container">
		<h1 class="status-code">404</h1>
		<h2 class="message">Pagina Non Trovata</h2>
		<p class="description">
			Oops! Sembra che tu abbia seguito un link non valido o inserito un URL
			che non esiste più.
		</p>
		<router-link to="/" class="home-link">
			Torna alla Home
		</router-link>
	</div>
</template>

<style scoped>
.not-found-container {
	max-width: 600px;
	margin: 4rem auto;
	padding: 2rem;
	text-align: center;
}

.status-code {
	font-size: 6rem;
	font-weight: bold;
	color: #42b983;
	margin: 0;
}

.message {
	font-size: 2rem;
	color: #2c3e50;
	margin-top: 0;
	margin-bottom: 1rem;
}

.description {
	color: #333;
	line-height: 1.6;
	margin-bottom: 2rem;
}

.home-link {
	display: inline-block;
	padding: 12px 24px;
	border-radius: 4px;
	background-color: #34495e;
	color: white;
	text-decoration: none;
	font-weight: bold;
	transition: background-color 0.3s ease;
}

.home-link:hover {
	background-color: #2c3e50;
}
</style>