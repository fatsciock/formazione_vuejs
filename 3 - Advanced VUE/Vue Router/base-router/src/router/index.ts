import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			// Importazione STATICA: il componente viene caricato subito all'avvio dell'app.
			// Ideale per le pagine principali e più visitate.
			component: HomeView
		},
		{
			path: '/about',
			name: 'about',
			// Importazione DINAMICA (Lazy Loading):
			// Il codice di questa vista viene scaricato dal browser solo quando l'utente
			// visita effettivamente questa rotta. Ottimizza il caricamento iniziale dell'app.
			// La sintassi è `() => import('path/al/componente.vue')`.
			component: () => import('@/views/AboutView.vue')
		},
		{
			path: '/users',
			name: 'users',
			// Usiamo il lazy loading anche per la lista utenti.
			component: () => import('@/views/UsersView.vue')
		},
		{
			// Questa è una ROTTA DINAMICA. La parte ':id' è un segnaposto (parametro).
			// Corrisponderà a /users/1, /users/johndoe, /users/123, ecc.
			path: '/users/:id',
			name: 'user-detail',
			component: () => import('@/views/UserDetailsView.vue')
		},
		// --- NUOVA ROTTA 404 ---
    	// QUESTA ROTTA DEVE ESSERE SEMPRE L'ULTIMA DELLA LISTA!
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('@/views/NotFoundView.vue')
		}
	],
})

export default router
