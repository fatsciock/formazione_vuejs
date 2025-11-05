// NOTA PER LA LEZIONE: In un'applicazione reale, non salveremmo MAI
// le password in chiaro! Questo è solo a scopo didattico.
import type { User } from "@/data/user";

interface CompleteUser extends User {
	password: string;
}

export const mockUsers: CompleteUser[] = [
	{
		id: 1,
		name: 'Mario Rossi',
		email: 'mario@email.com',
		password: 'password123',
		website: 'www.miosito.mario.rossi.it',
		address: {
			street: 'Via Levante 15',
			city: 'Roma',
			zipcode: '45685'
		}
	},
	{
		id: 2,
		name: 'Laura Bianchi',
		email: 'laura@email.com',
		password: 'securepassword',
		website: 'www.laurabianchi.xyz',
		address: {
			street: 'Viale della Resistenza 458a',
			city: 'Locorotondo',
			zipcode: '35715'
		}
	}
];