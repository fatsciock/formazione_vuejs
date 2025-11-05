import { mockUsers } from '@/data/authUsers';
import type { User } from '@/data/user'

export const AuthService = {
	async login (email: string, password: string): Promise<User> {
		return new Promise((resolve, reject) => {
			// Simuliamo il ritardo di una chiamata di rete
			setTimeout(() => {
				const user = mockUsers.find(u => u.email === email);

				if (user && user.password === password) {
					// Se l'utente esiste e la password è corretta,
					// la Promise ha successo e ritorna l'oggetto utente SENZA la password.
					const { password, ...userWithoutPassword } = user;
					resolve(userWithoutPassword);
				} else {
					// Se le credenziali sono errate, la Promise fallisce.
					reject(new Error('Credenziali non valide.'));
				}
			}, 1000); // 1 secondo di ritardo
		});
		/**
		 * In un'applicazione reale la chiamata potrebbe essere di questo tipo:
		 * const response = await fetch(URL_API_LOGIN, {
		 * 	method: POST,
		 * 	body: {
		 * 		email: email,
		 * 		password: password
		 * 	}
		 * })
		 * 
		 * if (response.ok) {
		 * 	const result = await response.json();
		 * 	return result;
		 * } else {
		 * 	const error = await response.json();
		 * 	console.error(error);
		 * 	return null;
		 * }
		 */
	}
};