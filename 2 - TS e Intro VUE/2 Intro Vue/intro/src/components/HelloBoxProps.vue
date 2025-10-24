<script setup lang="ts">
const props = defineProps({
  msg: String
})

</script>

<template>
    <div class="box">
        <p>Ciao! Sono un componente riutilizzabile 👋</p>
        <p> {{ msg || 'Non è stato passato alcun messaggio' }}</p>
    </div>
</template>

<style scoped>
.box {
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 8px;
    border-radius: 6px;
}
</style>
