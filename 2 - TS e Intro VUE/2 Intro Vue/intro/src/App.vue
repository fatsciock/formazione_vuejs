<script lang="ts" setup>
import Todo from '@/components/es_Todo.vue';
import Form from '@/components/es_Form.vue';
import Spesa from '@/components/es_Spesa.vue';
import RichEditor from '@/components/es_Rich_editor.vue';
import TempFetch from '@/components/tempfetch.vue';

import { ref } from 'vue';

const paginaDaMostrare = ref('todo');

</script>

<template>
	<button @click="paginaDaMostrare='todo'">Mostra todo</button>
	<button @click="paginaDaMostrare='form'">Mostra form</button>
	<button @click="paginaDaMostrare='spesa'">Mostra spesa</button>
	<button @click="paginaDaMostrare='editor'">Mostra rich editor</button>
	<button @click="paginaDaMostrare='fetch'">Mostra fetch</button>

	<Todo v-if="paginaDaMostrare === 'todo'" />
	<Form v-else-if="paginaDaMostrare === 'form'" />
	<Spesa v-else-if="paginaDaMostrare === 'spesa'" />
	<RichEditor v-else-if="paginaDaMostrare === 'editor'" />
	<TempFetch v-else-if="paginaDaMostrare === 'fetch'" />
</template>

<style scoped>
</style>
