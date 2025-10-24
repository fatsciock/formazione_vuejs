<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const wantsAddress = ref(false);
const address = ref("");

const errorMessage = ref("");
const successMessage = ref("");

const message = ref("");
const isError = ref(false);

const benefits = [
    "Aggiornamenti via email",
    "Sconti riservati",
    "Contenuti extra"
];

function completeRegistration() {
  errorMessage.value = "";
  successMessage.value = "";

  if (name.value.trim() === "") {
    errorMessage.value = "Il nome è obbligatorio.";
    return;
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    errorMessage.value = "Inserisci un'email valida.";
    return;
  }

  if (wantsAddress.value && address.value.trim() === "") {
    errorMessage.value = "L'indirizzo è obbligatorio.";
    return;
  }

  successMessage.value = `${name.value} si è iscritto con successo!`;
  if (wantsAddress.value) {
    successMessage.value += ` Indirizzo: ${address.value}.`;
  }
}

function resetForm() {
  name.value = "";
  email.value = "";
  wantsAddress.value = false;
  address.value = "";
  errorMessage.value = "";
  successMessage.value = "";
}
</script>

<template>
    <div>
        <h2>Registrazione</h2>
        <div>
            <label>Nome:</label>
            <input v-model="name" type="text" placeholder="Inserisci il nome" />
        </div>

        <div>
            <label>Email:</label>
            <input v-model="email" type="email" placeholder="Inserisci l'email" />
        </div>

        <div>
            <label>
                <input type="checkbox" v-model="wantsAddress" />
                Inserisci anche l'indirizzo
            </label>
        </div>

        <div v-if="wantsAddress">
            <label>Indirizzo:</label>
            <input v-model="address" type="text" placeholder="Via e numero" />
        </div>
    </div>

    <h3>Perché iscriversi?</h3>
    <ul>
      <li v-for="(benefit, i) in benefits" :key="i">{{ benefit }}</li>
    </ul>

    <div style="margin-top: 10px;">
      <button @click="completeRegistration">Iscriviti</button>
      <button @click="resetForm">Reset</button>
    </div>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
</template>

<style scoped>
input {
  margin: 4px;
  padding: 6px;
}

button {
  margin-right: 6px;
  padding: 6px 10px;
}

.error {
  color: red;
  font-weight: bold;
}

.success {
  color: green;
  font-weight: bold;
}
</style>