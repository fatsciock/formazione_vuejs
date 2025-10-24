<script setup lang="ts">
import { ref } from 'vue';

import IntroComp from '@/components/esempio1_default/MyApp.vue';
import PropsComp from '@/components/esempio2_props/MyApp.vue';
import EmitComp from '@/components/esempio3_emit/MyApp.vue';
import SlotComp from '@/components/esempio4_slot/MyApp.vue';
import EserciziComp from '@/components/esercizi/MenuEsercizi.vue';

const pageToShow = ref('comp1');
</script>

<template>
    <div>
        Componente da visualizzare:
        <button @click="pageToShow='comp1'">Introduzione componenti</button>
        <button @click="pageToShow='comp2'">Props componenti</button>
        <button @click="pageToShow='comp3'">Emit componenti</button>
        <button @click="pageToShow='comp4'">Slot componenti</button>
        <button @click="pageToShow='esercizi'">Esercizi</button>
    </div>

    <IntroComp v-if="pageToShow == 'comp1'"/>
    <PropsComp v-else-if="pageToShow == 'comp2'"/>
    <EmitComp v-else-if="pageToShow == 'comp3'"/>
    <SlotComp v-else-if="pageToShow == 'comp4'" />
    <EserciziComp v-else-if="pageToShow == 'esercizi'" />
</template>

<style scoped>
button {
    padding: 8px;
    margin: 3px;
    background-color: aqua;
}
</style>