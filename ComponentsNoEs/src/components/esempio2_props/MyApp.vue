<script setup lang="ts">
import { ref } from 'vue';
import HelloBoxProps from '@/components/esempio2_props/HelloBoxProps.vue';

// Es: far sì che il ogni istanza mostri un messaggio personalizzato, ad esempio "Sono il componente #x" dove x è il valore del contatore

const cont = ref(0);
</script>

<template>
    <h2>Props componenti</h2>
    <div>
       <p>Incrementa o diminuisci il numero di componenti che vuoi visualizzare!</p>
       <button class="btn" @click="cont++">+</button>
       <button class="btn" @click="cont--" :disabled="cont<=0">-</button>
       <p>Attualmente stai visualizzando {{ cont }} componenti</p>

       <HelloBoxProps v-for="_ in cont" 
            :msg="'Sono il componente #' + _.toString()"
            :num="cont"
        />
    </div>


</template>

<style scoped>
.btn {
    padding: 8px;
    margin: 3px;
}
</style>