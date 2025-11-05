<script setup lang="ts">
import UserDetails from '@/components/Users/UserDetails.vue';
import { fetchUserById } from '@/data/users';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const user = computed(() => {
    const userId = parseInt(route.params.id as string);

    if (isNaN(userId)) {
        return undefined;
    }

    return fetchUserById(userId);
});
</script>

<template>
    <div v-if="user">
        <UserDetails :user="user"/>
    </div>
    <div v-else class="not-found">
        <h2>Utente Non Trovato</h2>
        <p>Non è stato possibile trovare un utente con l'ID "{{ route.params.id }}".</p>
        <router-link to="/users">Torna alla lista</router-link>
    </div>
</template>