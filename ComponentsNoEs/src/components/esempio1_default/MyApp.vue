<script setup lang="ts">
import { ref } from 'vue';
import HelloBox from '@/components/esempio1_default/HelloBox.vue';

// Es: far sì che il numero di istanze mostrate sia determinato da un contatore, il cui min è 0

const cont = ref(0);
</script>

<template>
    <h2>Introduzione componenti</h2>
    <div>
       <p>Incrementa o diminuisci il numero di componenti che vuoi visualizzare!</p>
       <button class="btn" @click="cont++">+</button>
       <button class="btn" @click="cont--" :disabled="cont<=0">-</button>
       <p>Attualmente stai visualizzando {{ cont }} componenti</p>
    </div>

	<HelloBox v-for="_ in cont"/>
</template>

<style scoped>
.btn {
    padding: 8px;
    margin: 3px;
}
</style>