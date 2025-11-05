import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: HomeView
		},
		{
			path: '/profile',
			name: 'profile',
			component: ProfileView,
			// AGGIUNGIAMO I METADATI
			// I metadati sono informazioni aggiuntive che associamo a una rotta.
			// Qui, li usiamo per "marcare" le rotte che richiedono autenticazione.
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView
		}
	]
})

// IMPLEMENTIAMO LA GUARDIA DI NAVIGAZIONE GLOBALE
// router.beforeEach viene eseguito PRIMA di ogni singola navigazione.
router.beforeEach((to, from) => {
	// È necessario istanziare lo store DENTRO la guardia,
	// per assicurarsi che il sistema Pinia sia già attivo.
	const authStore = useAuthStore();

	// Logica 1: Proteggere le rotte che richiedono autenticazione
	// Se la rotta di destinazione (`to`) ha il meta 'requiresAuth'
	// E l'utente NON è loggato...
	if (to.meta.requiresAuth && !authStore.isLoggedIn) {
		// ... allora lo reindirizziamo alla pagina di login.
		// Ritornare un oggetto rotta è il modo corretto per reindirizzare.
		return { name: 'login' };
	}

	// Logica 2: Impedire l'accesso alla pagina di login se si è già loggati
	// Se la destinazione è la pagina di login E l'utente È già loggato...
	if (to.name === 'login' && authStore.isLoggedIn) {
		// ... allora lo reindirizziamo al suo profilo.
		return { name: 'profile' };
	}

	// Se nessuna delle condizioni sopra è vera, la navigazione può procedere
	// normalmente. Non è necessario ritornare `true`.
})

export default router