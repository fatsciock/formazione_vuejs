<template>
    <div class="card">
        <p>Sono testo del figlio</p>
        <slot>
            <div>
                <p>Sono vuoto, nessuno mi ha passato nulla :(</p>
            </div>
            <button>:(</button>
        </slot>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid #ff0000;
    padding: 12px;
    border-radius: 8px;
    margin: 4px;
}
</style>