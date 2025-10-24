<script setup lang="ts">
import type { Evento } from '@/types/types';
import { eventiMock } from "@/types/mockEvents";
import EventList from "@/components/EventList.vue";
import { ref, computed } from "vue";

// Stato principale
const eventi = ref<Evento[]>([...eventiMock]);
const eventoInModifica = ref<Evento | null>(null);

// Nuovo evento (form)
const nuovoEvento = ref<Evento>({
	titolo: "",
	artista: "",
	data: "",
	venue: "",
	genere: "",
	bigliettiDisponibili: 0,
	prezzo: 0,
	stato: "Programmato",
});

// Aggiunta evento
function aggiungiEvento() {
	if (!nuovoEvento.value.titolo || !nuovoEvento.value.artista) return;
	if (eventoInModifica.value) {
		// modalità modifica
		const index = eventi.value.findIndex(
			(e) => e === eventoInModifica.value
		);
		if (index !== -1) {
			eventi.value[index] = { ...nuovoEvento.value };
		}
		eventoInModifica.value = null;
	} else {
		// modalità aggiunta
		eventi.value.push({ ...nuovoEvento.value });
	}

	// reset del form
	nuovoEvento.value = {
		titolo: "",
		artista: "",
		data: "",
		venue: "",
		genere: "",
		bigliettiDisponibili: 0,
		prezzo: 0,
		stato: "Programmato",
	};
}

function rimuoviEvento(evento: Evento) {
	eventi.value = eventi.value.filter((e) => e !== evento);
}

function modificaEvento(evento: Evento) {
  eventoInModifica.value = evento;
  nuovoEvento.value = { ...evento }; // precompila il form
}

const eventiProgrammatti = computed(() =>
	eventi.value.filter((e) => e.stato === "Programmato").length
);

const eventoProssimo = computed(() => {
	const future = eventi.value.filter((e) => new Date(e.data) > new Date());
	if (future.length === 0) {
		return null;
	}
	const prossimo = future.sort(
		(a, b) => new Date(a.data).getTime() - new Date(b.data).getTime()
	)[0];
	if (prossimo) {
		return `${prossimo.titolo} (${prossimo.data})`;
	}
	return '';
});
</script>

<template>
	<div class="app">
		<h1>🎵 Gestione Eventi Musicali</h1>

		<!-- FORM NUOVO EVENTO -->
		<form class="add-form" @submit.prevent="aggiungiEvento">
			<h2>{{ eventoInModifica ? "Modifica Evento" : "Aggiungi Nuovo Evento" }}</h2>
			<div class="form-row">
				<label>Titolo: <input v-model="nuovoEvento.titolo" required /></label>
				<label>Artista: <input v-model="nuovoEvento.artista" required /></label>
			</div>

			<div class="form-row">
				<label>Data: <input type="date" v-model="nuovoEvento.data" required /></label>
				<label>Luogo: <input v-model="nuovoEvento.venue" required /></label>
			</div>

			<div class="form-row">
				<label>Genere:
					<select v-model="nuovoEvento.genere" required>
						<option value="">-- Seleziona --</option>
						<option>Rock</option>
						<option>Pop</option>
						<option>Elettronica</option>
						<option>Jazz</option>
					</select>
				</label>

				<label>Prezzo (€): <input type="number" v-model.number="nuovoEvento.prezzo" required min="0" /></label>
			</div>

			<div class="form-row">
				<label>Biglietti: <input type="number" v-model.number="nuovoEvento.bigliettiDisponibili" required
						min="0" /></label>
				<label>Stato:
					<select v-model="nuovoEvento.stato" required>
						<option>Programmato</option>
						<option>Posticipato</option>
						<option>Cancellato</option>
					</select>
				</label>
			</div>

			<button type="submit">
				{{ eventoInModifica ? "Salva Modifiche" : "Aggiungi Evento" }}
			</button>
		</form>

		<!-- LISTA EVENTI -->
		<EventList :eventi="eventi" @rimuovi="rimuoviEvento" @modifica="modificaEvento"/>

		<!-- PANNELLO RIASSUNTIVO -->
		<div class="summary">
			<h2>📊 Riepilogo</h2>
			<p><strong>Totale eventi:</strong> {{ eventi.length }}</p>
			<p><strong>Programmatti:</strong> {{ eventiProgrammatti }}</p>
			<p><strong>Evento più prossimo:</strong> {{ eventoProssimo || "—" }}</p>
		</div>
	</div>
</template>

<style scoped>
.app {
	padding: 1rem;
	font-family: sans-serif;
}

.add-form {
	border: 1px solid #ddd;
	padding: 1rem;
	border-radius: 8px;
	margin-bottom: 1.5rem;
	background-color: #fdfdfd;
}

.form-row {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-bottom: 0.5rem;
}

input,
select {
	margin-left: 0.4rem;
}

button {
	margin-top: 0.5rem;
	background-color: #2196f3;
	color: white;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	cursor: pointer;
}

button:hover {
	background-color: #1976d2;
}

.summary {
	border-top: 1px solid #ddd;
	margin-top: 1.5rem;
	padding-top: 1rem;
}
</style>
