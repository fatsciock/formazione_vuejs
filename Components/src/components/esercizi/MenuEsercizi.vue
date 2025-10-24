<script setup lang="ts">
import { ref } from 'vue';

import Spesa from '@/components/esercizi/EsSpesa.vue';
import Fetch from '@/components/esercizi/EsFetch.vue';
import EsGithubEasy from '@/components/esercizi/EsGithubEasy.vue';
// import EsGithubHard from '@/components/esercizi/EsGithubHard.vue';
import EsGithubHardConComponenti from '@/components/esercizi/github_componenti/GridComponent.vue';
import EsDragonBall from '@/components/esercizi/EsDragonBall.vue';
import EsPiante from '@/components/esercizi/giardino/GardenComponent.vue';
import EsFilm from '@/components/esercizi/film/MovieCatalog.vue';

const paginaDaMostrare = ref('spesa');
</script>

<template>
	<button @click="paginaDaMostrare='spesa'">Mostra spesa</button>
	<button @click="paginaDaMostrare='fetch'">Mostra fetch</button>
	<button @click="paginaDaMostrare='githubEasy'">Mostra github 1</button>
	<!-- <button @click="paginaDaMostrare='githubHard'">Mostra github 2</button> -->
	<button @click="paginaDaMostrare='githubHardConComponenti'">Mostra github 2 con componenti</button>
	<button @click="paginaDaMostrare='esDragonBall'">Mostra Dragon Ball</button>
	<button @click="paginaDaMostrare='esPiante'">Mostra Giardino</button>
	<button @click="paginaDaMostrare='esFilm'">Mostra Film</button>

	<Spesa v-if="paginaDaMostrare === 'spesa'" />
	<Fetch v-else-if="paginaDaMostrare === 'fetch'" />
	<EsGithubEasy v-else-if="paginaDaMostrare === 'githubEasy'"/>
	<!-- <EsGithubHard v-else-if="paginaDaMostrare === 'githubHard'"/> -->
	<EsGithubHardConComponenti v-else-if="paginaDaMostrare === 'githubHardConComponenti'"/>
	<EsDragonBall v-else-if="paginaDaMostrare === 'esDragonBall'"/>
	<EsPiante v-else-if="paginaDaMostrare === 'esPiante'"/>
	<EsFilm v-else-if="paginaDaMostrare === 'esFilm'"/>
</template>

<style scoped></style>
