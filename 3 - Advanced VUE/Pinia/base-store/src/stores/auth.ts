import { defineStore } from 'pinia';
import { AuthService } from '@/services/AuthService';
import type { User } from '@/data/user';

export const useAuthStore = defineStore('auth', {
	// --- STATO INIZIALE DINAMICO ---
	// All'avvio dello store, controlliamo se esiste una sessione salvata.
	// Diamo priorità a localStorage (Ricordati di me), poi a sessionStorage.
	state: () => ({
		user: JSON.parse(
			localStorage.getItem('user') || sessionStorage.getItem('user') || 'null'
		) as User | null
	}),

	getters: {
		isLoggedIn: (state) => !!state.user,
		userName: (state) => state.user?.name || 'Ospite'
	},
	actions: {
		async login(email: string, password: string, rememberMe: boolean) {
			try {
				const userData = await AuthService.login(email, password);
				this.user = userData;

				// Logica di persistenza:
				// Pulisce sempre le sessioni precedenti per evitare duplicati
				localStorage.removeItem('user');
				sessionStorage.removeItem('user');

				// Salva i dati dell'utente nel posto giusto in base alla scelta
				if (rememberMe) {
					// localStorage persiste anche dopo la chiusura del browser
					localStorage.setItem('user', JSON.stringify(userData));
				} else {
					// sessionStorage viene cancellato alla chiusura della scheda/browser
					sessionStorage.setItem('user', JSON.stringify(userData));
				}

				return true;
			} catch (error) {
				console.error('Login fallito:', error);

				// In caso di fallimento, assicuriamoci che lo stato e la persistenza siano puliti
				this.user = null;
				localStorage.removeItem('user');
				sessionStorage.removeItem('user');

				throw error;
			}
		},

		logout() {
			this.user = null;
			
			// Quando l'utente effettua il logout, dobbiamo pulire ENTRAMBI i possibili
			// spazi di archiviazione per essere sicuri di rimuovere la sessione.
			localStorage.removeItem('user');
			sessionStorage.removeItem('user');
		}
	}
});