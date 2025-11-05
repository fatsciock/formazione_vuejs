<script setup lang="ts">
import UsersList from '@/components/Users/UsersList.vue';
import { fetchAllUsers, type User } from '@/data/users';
import { onMounted, ref } from 'vue';

const allUsers = ref<User[]>([]);

onMounted(() => {
    allUsers.value = fetchAllUsers();
});
</script>

<template>
    <UsersList 
        :users="allUsers"
    ></UsersList>
</template>