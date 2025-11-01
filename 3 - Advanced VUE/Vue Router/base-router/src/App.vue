<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
</script>

<template>
	<div class="app-container">
		<HeaderMenu />
		<main>
			<h1>La Nostra Prima App Multi-Pagina</h1>
			<router-view></router-view>
		</main>
	</div>
</template>

<style scoped>
.app-container {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #f9fafb;
	color: #1f2937;
	font-family: 'Inter', system-ui, sans-serif;
}

main {
	flex: 1;
	padding: 2rem 4rem;
}

h1 {
	color: #1e3a8a;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	text-align: left;
	border-bottom: 2px solid #e5e7eb;
	padding-bottom: 0.5rem;
}
</style>
