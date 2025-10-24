<template>
    <div class="card">
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
    border: 1px solid #aaa;
    padding: 12px;
    border-radius: 8px;
    margin: 4px;
}
</style>
