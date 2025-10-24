/** Interfaccia base utente GitHub ritornata dalla ricerca */
export interface UtenteGitHub {
	id: number;
	login: string;
	avatar_url: string;
	html_url: string;
	url: string;
	repos_url: string;
	followers_url: string;
	following_url: string;
	organizations_url: string;
	type: string;
	site_admin: boolean;
	score: number;
}

/** Risultato della chiamata GET /search/users?q= */
export interface RequestResult {
	items: UtenteGitHub[];
	total_count: number;
}

/** Dettagli di un utente GitHub presi da GET /users/:username */
export interface DettagliUtenteGitHub {
	name: string | null;
	company: string | null;
	location: string | null;
	bio: string | null;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
}
