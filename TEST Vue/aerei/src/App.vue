<script setup lang="ts">
import PlaneList from '@/components/PlaneList.vue';
</script>

<template>
  <div id="app">
    <header>
      <h1>🛩️ Catalogo Aerei</h1>
    </header>

    <main>
      <PlaneList />
    </main>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

header {
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  margin: 0;
}

main {
  display: flex;
  justify-content: center;
}
</style>
