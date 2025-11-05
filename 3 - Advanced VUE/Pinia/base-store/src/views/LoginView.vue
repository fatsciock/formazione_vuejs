<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const isLoading = ref(false);
const errorMessage = ref<string | null>(null);

const router = useRouter();
const authStore = useAuthStore();

async function handleLogin() {
	errorMessage.value = null;
	isLoading.value = true;

	try {
		await authStore.login(email.value, password.value, rememberMe.value);

		router.push({ name: 'profile' });
	} catch (error) {
		errorMessage.value = 'Credenziali non valide. Per favore, riprova.';
		console.error(error); // Logghiamo l'errore vero e proprio in console per debug.
	} finally {
		isLoading.value = false;
	}
}
</script>

<template>
	<div class="login-container">
		<div class="login-form">
			<h1>Accedi</h1>

			<form @submit.prevent="handleLogin">
				<div class="form-group">
					<label for="email">Email</label>
					<input id="email" type="email" v-model="email" required placeholder="mario@email.com" />
				</div>

				<div class="form-group">
					<label for="password">Password</label>
					<input id="password" type="password" v-model="password" required placeholder="password123" />
				</div>

				<div class="form-group-checkbox">
					<input id="rememberMe" type="checkbox" v-model="rememberMe" />
					<label for="rememberMe">Ricordati di me</label>
				</div>

				<p v-if="errorMessage" class="error-message">
					{{ errorMessage }}
				</p>

				<button type="submit" :disabled="isLoading">
					{{ isLoading ? 'Accesso in corso...' : 'Login' }}
				</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 80vh;
}

.login-form {
	width: 100%;
	max-width: 400px;
	padding: 2rem;
	background: white;
	border-radius: 8px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
	text-align: center;
	margin-bottom: 1.5rem;
	color: #2c3e50;
}

.form-group {
	margin-bottom: 1.5rem;
}

.form-group label {
	display: block;
	margin-bottom: 0.5rem;
	font-weight: 500;
	color: #333;
}

.form-group input {
	width: 100%;
	padding: 10px 12px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 1rem;
}

.form-group-checkbox {
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;
}

.form-group-checkbox input {
	margin-right: 0.5rem;
}

.form-group-checkbox label {
	margin: 0;
	font-weight: normal;
}

.error-message {
	color: #e74c3c;
	background-color: #fdd;
	border: 1px solid #e74c3c;
	border-radius: 4px;
	padding: 10px;
	text-align: center;
	margin-bottom: 1rem;
}

button {
	width: 100%;
	padding: 12px;
	border: none;
	border-radius: 4px;
	background-color: #42b983;
	color: white;
	font-size: 1.1rem;
	font-weight: bold;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

button:hover {
	background-color: #34966b;
}

button:disabled {
	background-color: #a4d4be;
	cursor: not-allowed;
}
</style>