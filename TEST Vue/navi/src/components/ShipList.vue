<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Nave } from '@/types/nave';
import ShipCard from '@/components/ShipCard.vue';

const props = defineProps<{ navi: Nave[] }>();
const emit = defineEmits<{
	(e: 'elimina', nave: Nave): void;
	(e: 'modifica', nave: Nave): void;
}>();

// Filtri
const filtroTipo = ref('');
const filtroStato = ref('');

// Liste di opzioni (più semplice per studenti)
const tipiDisponibili = ['Crociera', 'Peschereccio', 'Militare', 'Cargo'];
const statiDisponibili = ['In servizio', 'In manutenzione', 'Fuori uso'];

// Statistiche
const inServizioCount = computed(() => {
	if (!props.navi) {
		return 0;
	}
	return props.navi.filter(n => n.stato === 'In servizio').length;
});

// Filtraggio
const naviFiltrate = computed(() => {
	if (!props.navi) {
		return [];
	}
	return props.navi.filter((n: Nave) =>
		(filtroTipo.value === '' || n.tipo === filtroTipo.value) &&
		(filtroStato.value === '' || n.stato === filtroStato.value)
	);
});
</script>

<template>
	<div>
		<!-- Statistiche -->
		<div class="stats">
			<p><strong>Totale navi:</strong> {{ navi.length }}</p>
			<p><strong>In servizio:</strong> {{ inServizioCount }}</p>
		</div>

		<!-- Filtri -->
		<div class="filters">
			<label>
				Tipo:
				<select v-model="filtroTipo">
					<option value="">Tutti</option>
					<option v-for="tipo in tipiDisponibili" :key="tipo">{{ tipo }}</option>
				</select>
			</label>

			<label>
				Stato:
				<select v-model="filtroStato">
					<option value="">Tutti</option>
					<option v-for="stato in statiDisponibili" :key="stato">{{ stato }}</option>
				</select>
			</label>
		</div>

		<!-- Lista navi -->
		<div class="ship-list">
			<ShipCard v-for="nave in naviFiltrate" :key="nave.nome + nave.annoCostruzione" :nave="nave"
				@elimina="emit('elimina', $event)" @modifica="emit('modifica', $event)" />
		</div>
	</div>
</template>

<style scoped>
.stats {
	margin-bottom: 12px;
}

.filters {
	margin-bottom: 12px;
	display: flex;
	gap: 20px;
}

.filters label {
	display: flex;
	flex-direction: column;
}

.ship-list {
	display: flex;
	flex-direction: column;
}
</style>
