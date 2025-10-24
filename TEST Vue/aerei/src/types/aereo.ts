export interface Aereo {
  modello: string
  compagnia: string
  anno: number
  tipo: 'Passeggeri' | 'Cargo' | 'Militare' | 'Privato'
  capacita?: number
  autonomia?: number
  inManutenzione?: boolean
  velocitaMassima?: number
  ultimoCheck?: number
}
