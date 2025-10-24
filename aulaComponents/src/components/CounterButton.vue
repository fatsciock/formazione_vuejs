<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
  id: number
}>();

const emit = defineEmits(['increment', 'onDestruction']);

const counter = ref(0);

function handleIncrement() {
    counter.value++;
    emit('increment', counter.value, props.id);
}

onUnmounted(() => {
    emit('onDestruction', counter.value, props.id);
})
</script>

<template>
    <div style="margin: 5px;">
        <button @click="handleIncrement">
            Incrementa
        </button>
       <span style="margin: 5px;">
        {{ counter }}
       </span> 
    </div>
</template>
