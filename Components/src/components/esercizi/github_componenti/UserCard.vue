<script setup lang="ts">
import type { UtenteGitHub, DettagliUtenteGitHub } from '@/components/esercizi/github_componenti/github.types';

const props = defineProps<{
	utente: UtenteGitHub;
	dettagli?: DettagliUtenteGitHub | null;
}>();

const emit = defineEmits<{
	(e: "richiedi-dettagli", utente: UtenteGitHub): void;
}>();

function mostraDettagli() {
	emit("richiedi-dettagli", props.utente);
}
</script>

<template>
	<div class="user-card">
		<img :src="utente.avatar_url" :alt="`Avatar di ${utente.login}`" />
		<h3>{{ utente.login }}</h3>
		<p>Tipo: {{ utente.type }}</p>

		<p v-if="utente.site_admin" class="admin-badge">🛡️ Admin</p>

		<p class="score">Score: {{ utente.score.toFixed(2) }}</p>

		<div class="links">
			<a :href="utente.html_url" target="_blank">Profilo GitHub</a>
			<a :href="utente.repos_url" target="_blank">Repository</a>
		</div>

		<div v-if="dettagli" class="user-details">
			<p v-if="dettagli.name"><b>Nome:</b> {{ dettagli.name }}</p>
			<p v-if="dettagli.company"><b>Azienda:</b> {{ dettagli.company }}</p>
			<p v-if="dettagli.location"><b>Luogo:</b> {{ dettagli.location }}</p>
			<p v-if="dettagli.bio"><b>Bio:</b> {{ dettagli.bio }}</p>
			<p>
				<b>Repo pubblici:</b> {{ dettagli.public_repos }} |
				<b>Follower:</b> {{ dettagli.followers }} |
				<b>Following:</b> {{ dettagli.following }}
			</p>
			<p>
				<b>Iscritto dal:</b>
				{{ new Date(dettagli.created_at).toLocaleDateString("it-IT") }}
			</p>
		</div>

		<button
			v-else
			class="dettagli-btn"
			@click="mostraDettagli"
		>
			Mostra dettagli
		</button>
	</div>
</template>

<style scoped>
.user-card {
	background-color: #f9f9f9;
	border: 1px solid #ddd;
	border-radius: 12px;
	padding: 16px;
	transition: transform 0.2s;
}

.user-card:hover {
	transform: scale(1.03);
}

.user-card img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
}

.user-card h3 {
	margin: 10px 0 5px;
	font-size: 1.2em;
}

.user-card p {
	font-size: 0.9em;
	color: #444;
	margin: 4px 0;
}

.user-card .score {
	color: #666;
	font-size: 0.85em;
}

.admin-badge {
	color: #d32f2f;
	font-weight: bold;
}

.links {
	margin-top: 8px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

a {
	color: #0366d6;
	text-decoration: none;
	font-size: 0.9em;
}

a:hover {
	text-decoration: underline;
}

.dettagli-btn {
	margin-top: 10px;
	padding: 6px 10px;
	background-color: #0366d6;
	color: white;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	font-size: 0.9em;
}

.dettagli-btn:hover {
	background-color: #024ea1;
}

.user-details {
	margin-top: 10px;
	padding-top: 8px;
	border-top: 1px solid #ccc;
	text-align: left;
}
</style>
