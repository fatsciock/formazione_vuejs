<script setup lang="ts">
import type { Evento } from '@/types/types';
import { computed } from 'vue';

const props = defineProps<{
	evento: Evento;
}>();

const emit = defineEmits<{
  (e: 'rimuovi', evento: Evento): void;
  (e: 'modifica', evento: Evento): void;
}>();

const statoClass = computed(() => {
	switch (props.evento.stato) {
		case "Programmato":
			return "programmato";
		case "Posticipato":
			return "posticipato";
		case "Cancellato":
			return "cancellato";
		default:
			return "";
	}
});
</script>

<template>
	<div class="event-card" :class="statoClass">
		<h2>{{ evento.titolo }}</h2>
		<p><strong>Artista:</strong> {{ evento.artista }}</p>
		<p><strong>Data:</strong> {{ evento.data }}</p>
		<p><strong>Luogo:</strong> {{ evento.venue }}</p>
		<p><strong>Genere:</strong> {{ evento.genere }}</p>
		<p><strong>Prezzo:</strong> €{{ evento.prezzo.toFixed(2) }}</p>
		<p><strong>Biglietti:</strong> {{ evento.bigliettiDisponibili }}</p>
		<p><strong>Stato:</strong> {{ evento.stato }}</p>

		<!-- Proprietà opzionali -->
		<p v-if="evento.durata"><strong>Durata:</strong> {{ evento.durata }}h</p>
		<p v-if="evento.etaMinima"><strong>Età minima:</strong> {{ evento.etaMinima }}+</p>
		<p v-if="evento.linkEsterno">
			<a :href="evento.linkEsterno" target="_blank">Pagina evento</a>
		</p>

		<!-- Slot per badge o contenuti extra -->
		<slot></slot>

		<button @click="emit('rimuovi', evento)">Rimuovi</button>
		<button @click="emit('modifica', evento)">Modifica</button>
	</div>
</template>

<style scoped>
.event-card {
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 0.8rem;
	margin-bottom: 1rem;
	max-width: 350px;
	background-color: #fafafa;
	transition: transform 0.2s;
}

.event-card:hover {
	transform: scale(1.02);
}

.event-card h2 {
	margin: 0 0 0.4rem 0;
	font-size: 1.2rem;
	color: #333;
}

.event-card p {
	margin: 0.2rem 0;
	font-size: 0.95rem;
}

button {
	margin-top: 0.6rem;
	margin-right: 0.2rem;
	padding: 0.4rem 0.8rem;
	background-color: #ff6666;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

button:hover {
	background-color: #ff4c4c;
}

/* Colorazione in base allo stato */
.programmato {
	border-left: 6px solid #4caf50;
}

.posticipato {
	border-left: 6px solid #ff9800;
}

.cancellato {
	border-left: 6px solid #f44336;
	opacity: 0.8;
}
</style>
