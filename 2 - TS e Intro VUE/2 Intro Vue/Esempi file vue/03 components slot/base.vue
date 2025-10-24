<script setup lang="ts">
import { ref } from 'vue';
import CardBox from '@/components/CardBox.vue';

const count = ref(0);
</script>

<template>
    <h1>Slot</h1>
	<button @click="count++">+</button>
	<button @click="count == 0 ? 0 : count--">-</button>
	<div v-for="_ in count">
    	<CardBox>
			<h2>Titolo dinamico</h2>
			<p>Questo testo è passato dal parent 👇</p>
			<p v-if="_ % 2 == 0">Sono un componente con indice pari</p>
    	</CardBox>
	</div>
</template>
