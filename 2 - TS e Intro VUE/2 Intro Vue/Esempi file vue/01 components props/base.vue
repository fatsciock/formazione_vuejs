<script setup lang="ts">
import { ref } from 'vue';
import HelloBoxProps from '@/components/HelloBoxProps.vue'

const count = ref(0);
</script>

<template>
    <h1>Componenti base</h1>
	<button @click="count++">+</button>
	<button @click="count == 0 ? 0 : count--">-</button>
	<div v-for="_ in count">
    	<HelloBoxProps :msg="'Sono il componente #' + _.toString()"/>
	</div>
</template>
