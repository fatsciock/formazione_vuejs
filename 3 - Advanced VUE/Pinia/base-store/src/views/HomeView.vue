<script setup lang="ts">
import { mockUsers } from '@/data/authUsers';
</script>

<template>
	<div class="home-container">
		<h1>Esempio di Autenticazione con Pinia e Vue Router</h1>
		<p>
			Questa applicazione dimostra come gestire l'autenticazione di un utente
			e proteggere le rotte in una Single Page Application.
		</p>
		<ul>
			<li>
				La rotta <strong>/profile</strong> è protetta: puoi accedervi solo se hai effettuato il login.
			</li>
			<li>
				La rotta <strong>/login</strong> ti permette di autenticarti. Se sei già loggato e provi ad accedervi,
				verrai reindirizzato al tuo profilo.
			</li>
		</ul>

		<div class="users-info">
			<h2>Utenti di Prova</h2>
			<p>
				Usa una di queste credenziali per effettuare il login dalla pagina apposita.
			</p>

			<!-- SEZIONE IMPORTANTE SULLA SICUREZZA -->
			<div class="security-warning">
				<strong>Attenzione:</strong> In un'applicazione reale, non mostreremmo MAI le password degli utenti.
				Questo è solo a scopo didattico per facilitare il test.
			</div>

			<ul class="user-list">
				<li v-for="user in mockUsers" :key="user.id">
					<div class="credentials">
						<span>Email:</span>
						<code>{{ user.email }}</code>
					</div>
					<div class="credentials">
						<span>Password:</span>
						<code>{{ user.password }}</code>
					</div>
				</li>
			</ul>
		</div>

		<router-link :to="{ name: 'login' }" class="cta-button">
			Vai al Login
		</router-link>
	</div>
</template>

<style scoped>
.home-container {
	max-width: 800px;
	margin: 2rem auto;
	padding: 2rem;
	background-color: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

h1 {
	color: #2c3e50;
	text-align: center;
	margin-bottom: 2rem;
}

p {
	line-height: 1.6;
}

ul {
	margin-bottom: 2rem;
}

.users-info {
	margin-top: 2rem;
	padding-top: 1.5rem;
	border-top: 1px solid #e0e0e0;
}

.security-warning {
	background-color: #fffbe6;
	border: 1px solid #ffe58f;
	border-radius: 4px;
	padding: 1rem;
	margin: 1rem 0;
	color: #8a6d3b;
}

.user-list {
	list-style: none;
	padding: 0;
}

.user-list li {
	background-color: #fff;
	border: 1px solid #e0e0e0;
	border-radius: 4px;
	padding: 1rem;
	margin-bottom: 0.5rem;
}

.credentials {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.credentials span {
	font-weight: 500;
}

code {
	background-color: #eef1f6;
	padding: 4px 8px;
	border-radius: 4px;
	color: #34495e;
}

.cta-button {
	display: block;
	width: fit-content;
	margin: 2rem auto 0;
	padding: 12px 24px;
	border-radius: 4px;
	background-color: #42b983;
	color: white;
	text-decoration: none;
	font-weight: bold;
	text-align: center;
	transition: background-color 0.3s ease;
}

.cta-button:hover {
	background-color: #34966b;
}
</style>