<script setup lang="ts">
import type { Evento } from '@/types/types';
import EventCard from "@/components/EventCard.vue";
import { computed, ref } from "vue";

const props = defineProps<{
    eventi: Evento[];
}>();

const emit = defineEmits<{
    (e: "rimuovi", evento: Evento): void;
    (e: 'modifica', evento: Evento): void;
}>();

const genereFiltro = ref("");
const statoFiltro = ref("");
const criterioOrdinamento = ref("");
const dataDa = ref("");
const dataA = ref("");
const testoRicerca = ref("");

// genera lista generi unici per il select
const generiUnici = computed(() => {
    const generi: string[] = [];
    props.eventi.forEach((e) => {
        if (!generi.includes(e.genere)) {
            generi.push(e.genere);
        }
    });
    return generi;
});

// filtraggio base
const eventiFiltrati = computed(() => {
    const lista = props.eventi.filter((evento) => {
        const matchGenere =
            !genereFiltro.value || evento.genere === genereFiltro.value;
        const matchStato =
            !statoFiltro.value || evento.stato === statoFiltro.value;
        const matchDataDa = !dataDa.value || evento.data >= dataDa.value;
        const matchDataA = !dataA.value || evento.data <= dataA.value;
        const matchTesto =
            !testoRicerca.value ||
            evento.titolo.toLowerCase().includes(testoRicerca.value.toLowerCase()) ||
            evento.artista.toLowerCase().includes(testoRicerca.value.toLowerCase());
        return matchGenere && matchStato && matchDataDa && matchDataA && matchTesto;
    });

    if (criterioOrdinamento.value === "dataAsc") {
        lista.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
    } else if (criterioOrdinamento.value === "dataDesc") {
        lista.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    } else if (criterioOrdinamento.value === "prezzoAsc") {
        lista.sort((a, b) => a.prezzo - b.prezzo);
    } else if (criterioOrdinamento.value === "prezzoDesc") {
        lista.sort((a, b) => b.prezzo - a.prezzo);
    }

    return lista;
});

function rimuoviEvento(evento: Evento) {
    emit("rimuovi", evento);
}

function selezionaEvento(evento: Evento) {
  emit('modifica', evento);
}
</script>

<template>
    <div class="event-list">
        <h1>Lista Eventi</h1>

        <!-- FILTRI BASE -->
        <div class="filters">
            <label>
                Genere:
                <select v-model="genereFiltro">
                    <option value="">Tutti</option>
                    <option v-for="g in generiUnici" :key="g" :value="g">{{ g }}</option>
                </select>
            </label>

            <label>
                Stato:
                <select v-model="statoFiltro">
                    <option value="">Tutti</option>
                    <option value="Programmato">Programmato</option>
                    <option value="Posticipato">Posticipato</option>
                    <option value="Cancellato">Cancellato</option>
                </select>
            </label>

            <label>
                Ordina per:
                <select v-model="criterioOrdinamento">
                    <option value="">Nessuno</option>
                    <option value="dataAsc">Data ↑</option>
                    <option value="dataDesc">Data ↓</option>
                    <option value="prezzoAsc">Prezzo ↑</option>
                    <option value="prezzoDesc">Prezzo ↓</option>
                </select>
            </label>

            <label>
                Data da: <input type="date" v-model="dataDa" />
            </label>
            <label>
                Data a: <input type="date" v-model="dataA" />
            </label>

            <label>
                Cerca: <input type="text" v-model="testoRicerca" placeholder="Titolo o artista" />
            </label>
        </div>

        <!-- LISTA EVENTI -->
        <div class="cards">
            <EventCard v-for="evento in eventiFiltrati" :key="evento.titolo + evento.data" :evento="evento"
                @rimuovi="rimuoviEvento"
                @modifica="selezionaEvento">
                <!-- esempio di slot: badge "SOLD OUT" -->
                <template v-if="evento.bigliettiDisponibili === 0">
                    <span class="badge">SOLD OUT</span>
                </template>
            </EventCard>

            <p v-if="eventiFiltrati.length === 0">Nessun evento trovato.</p>
        </div>
    </div>
</template>

<style scoped>
.event-list {
    padding: 1rem;
}

.filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

select {
    margin-left: 0.4rem;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.badge {
    display: inline-block;
    margin: 0.4rem;
    padding: 0.2rem 0.4rem;
    background-color: #e91e63;
    color: white;
    border-radius: 4px;
    font-size: 0.8rem;
}
</style>
