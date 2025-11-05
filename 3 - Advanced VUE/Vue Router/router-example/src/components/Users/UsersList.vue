<script setup lang="ts">
import type { User } from '@/data/users';
import { useRouter } from 'vue-router';

defineProps<{
    users: User[]
}>();

const router = useRouter();
function navigateToUser(userId: number) {
    //router.push('users/' + userId);
    //router.push(`users/${userId}`);

    router.push({
        name: 'user-details',
        params: {
            id: userId
        }
    });
}
</script>

<template>
   <ul class="user-list">
        <li v-for="user in users" @click="navigateToUser(user.id)">
            <span class="user-name">{{ user.name }}</span>
			<span class="user-username">@{{ user.username }}</span>
        </li>
   </ul> 
</template>

<style scoped>
.user-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.user-list li {
  margin-bottom: 0.5rem;
  display: block;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
  cursor: pointer; /* <-- ESSENZIALE per la UX! */
}

.user-list li:hover,
.user-list li:focus {
  border-color: #42b983;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  outline: none;
}

.user-list a {
	display: block;
	padding: 1rem;
	border: 1px solid #ddd;
	border-radius: 8px;
	text-decoration: none;
	color: #2c3e50;
	transition: all 0.3s ease;
}

.user-list a:hover {
	border-color: #42b983;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transform: translateY(-2px);
}

.user-name {
	font-weight: bold;
}

.user-username {
	margin-left: 0.5rem;
	color: #7f8c8d;
	font-size: 0.9em;
}
</style>