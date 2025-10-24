<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['filter-change'])
const minRating = ref(0)

watch(minRating, (newValue) => {
  emit('filter-change', newValue)
})
</script>

<template>
  <div class="filter">
    <label>
      🎚️ Mostra solo film con valutazione ≥
      <input type="number" v-model.number="minRating" min="0" max="10" />
    </label>
  </div>
</template>

<style scoped>
.filter {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
input {
  width: 60px;
  padding: 0.2rem;
}
</style>
