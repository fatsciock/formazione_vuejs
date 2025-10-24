export interface Nave {
	nome: string;
	tipo: 'Crociera' | 'Peschereccio' | 'Militare' | 'Cargo';
	annoCostruzione: number;
	stazza: number;
	stato: 'In servizio' | 'In manutenzione' | 'Fuori uso';
}
