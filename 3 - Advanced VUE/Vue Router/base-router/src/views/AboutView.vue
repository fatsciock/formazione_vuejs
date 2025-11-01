<!-- src/views/AboutView.vue -->
<script setup lang="ts">
// Anche qui, nessuna logica JavaScript richiesta.
</script>

<template>
	<div class="about-container">
		<h1>Chi Siamo</h1>
		<p>
			Siamo un team di sviluppatori appassionati che sta tenendo un corso intensivo su Vue.js!
		</p>
		<p>
			Il nostro obiettivo è fornire le competenze pratiche e teoriche per costruire
			applicazioni web moderne, performanti e manutenibili. In questa lezione, ci stiamo
			focalizzando su <strong>Vue Router</strong>, la libreria ufficiale per la gestione della
			navigazione nelle Single Page Applications.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
			lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
			ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
		</p>
	</div>
</template>

<style scoped>
.about-container {
	max-width: 800px;
	margin: 2rem auto;
	padding: 0 2rem;
	text-align: left;
}

h1 {
	color: #2c3e50;
	border-bottom: 2px solid #42b983;
	padding-bottom: 0.5rem;
	margin-bottom: 1.5rem;
}

p {
	color: #333;
	line-height: 1.8;
	margin-bottom: 1rem;
}

strong {
	color: #34966b;
}
</style>