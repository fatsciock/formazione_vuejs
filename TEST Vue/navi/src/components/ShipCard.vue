<script setup lang="ts">
import type { Nave } from '@/types/nave';

defineProps<{ nave: Nave }>();
const emit = defineEmits<{
	(e: 'elimina', nave: Nave): void;
	(e: 'modifica', nave: Nave): void;
}>();
</script>

<template>
	<div :class="['ship-card', { 'old-ship': nave.annoCostruzione < 2000 }]">
		<h3>
			{{ nave.nome }}
			<span v-if="nave.stato === 'In manutenzione'">🛠️</span>
		</h3>
		<p><strong>Tipo:</strong> {{ nave.tipo }}</p>
		<p><strong>Anno costruzione:</strong> {{ nave.annoCostruzione }}</p>
		<p><strong>Stazza:</strong> {{ nave.stazza }} t</p>
		<p><strong>Stato:</strong> {{ nave.stato }}</p>
		<button @click="emit('elimina', nave)">Elimina</button>
		<button @click="emit('modifica', nave)">Modifica</button>
	</div>
</template>

<style scoped>
.ship-card {
	border: 1px solid #ccc;
	border-radius: 6px;
	padding: 12px;
	margin-bottom: 10px;
	background-color: #f9f9f9;
}

.ship-card h3 {
	margin: 0 0 6px 0;
}

.ship-card p {
	margin: 4px 0;
}

.ship-card button {
	margin-top: 8px;
	margin-right: 2px;
	padding: 4px 8px;
	border: none;
	border-radius: 4px;
	background-color: #d9534f;
	color: white;
	cursor: pointer;
}

.ship-card button:hover {
	background-color: #c9302c;
}

.old-ship {
	border-color: #ff4d4d;
	background-color: #fff0f0;
}
</style>
