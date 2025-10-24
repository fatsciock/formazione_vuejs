<script setup lang="ts">
import { ref } from 'vue';
import HelloBox from '@/components/HelloBox.vue'

const count = ref(0);
</script>

<template>
    <h1>Componenti base</h1>
	<button @click="count++">+</button>
	<button @click="count == 0 ? 0 : count--">-</button>
	<div v-for="_ in count">
    	<HelloBox />
	</div>
</template>
