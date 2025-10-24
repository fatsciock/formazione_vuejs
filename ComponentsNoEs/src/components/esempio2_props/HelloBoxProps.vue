<script setup lang="ts">
// const props = defineProps({
//   msg: String,
//   num: Number
// })

const props = defineProps<{
    msg: string,
    num: number
}>();

console.log(props.msg)
</script>

<template>
    <div class="box">
        <p>Ciao! Sono un componente riutilizzabile 👋</p>
        <p> {{ msg || 'Non è stato passato alcun messaggio' }}</p>
        <p>Contatore: {{ num }}</p>
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
