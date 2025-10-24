export interface Evento {
	titolo: string;
	artista: string;
	data: string; // formato YYYY-MM-DD
	venue: string;
	genere: string;
	bigliettiDisponibili: number;
	prezzo: number;
	stato: 'Programmato' | 'Posticipato' | 'Cancellato';

	// Proprietà opzionali (bonus)
	durata?: number; // in ore
	etaMinima?: number;
	linkEsterno?: string;
}
