<script setup lang="ts">
import { ref } from 'vue'
import CounterButton from '@/components/CounterButton.vue';

const totalClicks = ref(0)
const childCounter = ref(0);
const message = ref('');

// riceve dal figlio il nuovo valore del suo contatore
function handleIncrement(childCounter: number, childId: number) {
    totalClicks.value++
    message.value = `Messaggio dal figlio ${childId}: valore contatore = ${childCounter}`;
}

</script>

<template>
    <h1>Emit</h1>
	<h2>{{ message }}</h2>
    <p>Totale clic: {{ totalClicks }}</p>
	<button @click="childCounter++">+</button>
	<button @click="childCounter == 0 ? 0 : childCounter--">-</button>
	<div v-for="_ in childCounter">
    	<CounterButton 
			:id="_"
			@increment="handleIncrement"
		/>
	</div>
</template>
