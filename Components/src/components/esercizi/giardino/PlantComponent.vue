<script setup lang="ts">
import { computed } from "vue";

interface Props {
    id: number;
    name: string;
    stage: "seme" | "germoglio" | "fiore";
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: "grow", id: number): void;
}>();

// Icona o emoji in base allo stadio di crescita
const stageIcon = computed(() => {
    switch (props.stage) {
        case "seme":
            return "🌱";
        case "germoglio":
            return "🌿";
        case "fiore":
            return "🌸";
    }
});

// Permette alla pianta di “crescere” solo se non è già al massimo
function handleGrow() {
    if (props.stage !== "fiore") emit("grow", props.id);
}
</script>

<template>
    <div class="plant" @click="handleGrow">
        <div class="emoji">{{ stageIcon }}</div>
        <p>{{ name }}</p>
    </div>
</template>

<style scoped>
.plant {
    border: 2px solid #c8e6c9;
    border-radius: 12px;
    width: 100px;
    padding: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.3s;
    user-select: none;
}
.plant:hover {
    background-color: #e8f5e9;
    transform: scale(1.05);
}
.emoji {
    font-size: 2rem;
}
</style>
