<script setup lang="ts">
defineProps<{
  title: string
  year: number
  rating: number
}>()
</script>

<template>
  <div class="card">
    <h3>{{ title }} ({{ year }})</h3>
    <p>⭐ Valutazione: {{ rating }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0.8rem;
  background: #fafafa;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
h3 {
  margin: 0 0 0.4rem 0;
}
</style>
