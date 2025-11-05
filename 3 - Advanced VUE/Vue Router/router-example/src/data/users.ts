export interface User {
    id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		city: string;
		zipcode: string;
	};
	website: string;
}

const users: User[] = [
	{
		id: 1,
		name: 'Mario Rossi',
		username: 'MarioR',
		email: 'mario.rossi@example.com',
		address: {
			street: 'Via Roma 10',
			city: 'Milano',
			zipcode: '20121'
		},
		website: 'mariorossi.it'
	},
	{
		id: 2,
		name: 'Laura Bianchi',
		username: 'LauraB',
		email: 'laura.bianchi@example.com',
		address: {
			street: 'Corso Vittorio Emanuele 25',
			city: 'Torino',
			zipcode: '10123'
		},
		website: 'laurabianchi.com'
	},
	{
		id: 3,
		name: 'Paolo Verdi',
		username: 'PaoloV',
		email: 'paolo.verdi@example.com',
		address: {
			street: 'Piazza del Popolo 1',
			city: 'Roma',
			zipcode: '00187'
		},
		website: 'paoloverdi.dev'
	},
	{
		id: 4,
		name: 'Giulia Neri',
		username: 'GiuliaN',
		email: 'giulia.neri@example.com',
		address: {
			street: 'Via Indipendenza 50',
			city: 'Bologna',
			zipcode: '40121'
		},
		website: 'giulianeri.art'
	},
	{
		id: 5,
		name: 'Marco Gialli',
		username: 'MarcoG',
		email: 'marco.gialli@example.com',
		address: {
			street: 'Via Toledo 100',
			city: 'Napoli',
			zipcode: '80134'
		},
		website: 'marcogialli.photo'
	}
];

export function fetchAllUsers(): User[] {
    return users;
}

export function fetchUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}