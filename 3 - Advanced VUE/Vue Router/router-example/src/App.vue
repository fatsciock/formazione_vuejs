<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
</script>

<template>
	<HeaderMenu />
  <main>
	<h1>La nostra prima app Multi-Pagina</h1>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
