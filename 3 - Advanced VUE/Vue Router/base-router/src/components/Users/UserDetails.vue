<script setup lang="ts">
import type { PropType } from 'vue';
import type { User } from '@/data/users';
import { useRouter } from 'vue-router';

defineProps<{
	user: User
}>();

const router = useRouter();

function goBack() {
	router.push({
		name: 'users'
	});
	// In alternativa, si potrebbe usare router.go(-1) per tornare indietro nella cronologia
}
</script>

<template>
	<div class="user-detail-container">
		<div class="card">
			<h1 class="card-header">{{ user.name }}</h1>
			<div class="card-body">
				<p><strong>Username:</strong> @{{ user.username }}</p>
				<p><strong>Email:</strong> {{ user.email }}</p>
				<p><strong>Sito Web:</strong> {{ user.website }}</p>
				<p><strong>Indirizzo:</strong> {{ user.address.street }}, {{ user.address.city }} ({{
					user.address.zipcode }})</p>
			</div>
			<div class="card-footer">
				<button @click="goBack" class="back-button">
					&larr; Torna alla Lista
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.user-detail-container {
	max-width: 600px;
	margin: 2rem auto;
}

.card {
	background: white;
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	overflow: hidden;
}

.card-header {
	background-color: #42b983;
	color: white;
	padding: 1.5rem;
	margin: 0;
}

.card-body {
	padding: 1.5rem;
}

.card-body p {
	margin: 0 0 1rem;
	line-height: 1.6;
}

.card-footer {
	padding: 1rem 1.5rem;
	background-color: #f9f9f9;
	text-align: right;
}

.back-button {
	background-color: #34495e;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 4px;
	cursor: pointer;
	font-size: 1em;
	transition: background-color 0.3s;
}

.back-button:hover {
	background-color: #2c3e50;
}
</style>