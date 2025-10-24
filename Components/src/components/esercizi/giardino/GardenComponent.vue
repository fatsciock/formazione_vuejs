<script setup lang="ts">
import { ref, computed } from "vue";
import Plant from '@/components/esercizi/giardino/PlantComponent.vue';

interface PlantItem {
    id: number;
    name: string;
    stage: "seme" | "germoglio" | "fiore";
}
const newPlantName = ref("");
let id = 1;

const plants = ref<PlantItem[]>([
    { id: id++, name: "Rosa", stage: "seme" },
    { id: id++, name: "Girasole", stage: "seme" },
    { id: id++, name: "Lavanda", stage: "seme" },
]);

// Calcola quante piante sono arrivate a fiore
const totalFlowers = computed(() => {
    return plants.value.filter(p => p.stage === "fiore").length
});

function handleGrow(id: number) {
    const plant = plants.value.find(p => p.id === id);
    if (!plant) return;

    if (plant.stage === "seme") {
        plant.stage = "germoglio";
    }
    else if (plant.stage === "germoglio") {
        plant.stage = "fiore";
    }
}

// Funzione “Innaffia tutto”: tutte le piante crescono di un livello
function waterAll() {
    plants.value.forEach(p => {
        if (p.stage === "seme") {
            p.stage = "germoglio";
        }
        else if (p.stage === "germoglio") {
            p.stage = "fiore";
        }
    });
}

// Aggiunge una nuova pianta con nome e stato iniziale "seme"
function addPlant() {
    const name = newPlantName.value.trim();
    if (!name) return;

    const newPlant: PlantItem = {
        id: id++,
        name,
        stage: "seme"
    };

    plants.value.push(newPlant);
    newPlantName.value = ""; // reset input
}

</script>

<template>
    <div class="garden">
        <h1>🌿 Il mio giardino virtuale</h1>
        
        <div class="add-plant">
            <input
                v-model="newPlantName"
                type="text"
                placeholder="Aggiungi una nuova pianta..."
            />
            <button @click="addPlant">🌱 Aggiungi</button>
        </div>

        <button @click="waterAll">💧 Innaffia tutto</button>
        <p>🌸 Piante in fiore: {{ totalFlowers }} / {{ plants.length }}</p>

        <div class="plants">
            <Plant
                v-for="plant in plants"
                :key="plant.id"
                :id="plant.id"
                :name="plant.name"
                :stage="plant.stage"
                @grow="handleGrow"
            />
        </div>
    </div>
</template>

<style scoped>
.garden {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
}
.plants {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
}
button {
    background-color: #4caf50;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}
button:hover {
    background-color: #43a047;
}
.add-plant {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.add-plant input {
    padding: 0.4rem 0.6rem;
    border: 1px solid #ccc;
    border-radius: 6px;
}

</style>
