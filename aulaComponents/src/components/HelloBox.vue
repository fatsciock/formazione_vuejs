<script setup lang="ts">
const props = defineProps<{
    msg: string,
    num: number   
}>();

console.log(props.msg);
</script>

<template>
    <div class="box">
        <p>Ciao! Sono un componente riutilizzabile 👋</p>
        <p>{{ msg }}</p>
        <p>Contatore: {{ num }}</p>
    </div>
</template>

<style scoped>
.box {
    padding: 10px;
    border: 1px solid #ff0000;
    margin-bottom: 8px;
    border-radius: 6px;
}

p {
  font-weight: lighter;
  color: crimson;
}
</style>