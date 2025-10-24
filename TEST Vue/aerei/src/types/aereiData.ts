import type { Aereo } from '@/types/aereo';

export const aerei: Aereo[] = [
  {
    modello: 'Boeing 737',
    compagnia: 'Ryanair',
    anno: 2015,
    tipo: 'Passeggeri',
    capacita: 189,
    autonomia: 5600,
    inManutenzione: false,
    velocitaMassima: 850,
    ultimoCheck: 2023
  },
  {
    modello: 'Airbus A320',
    compagnia: 'Lufthansa',
    anno: 2018,
    tipo: 'Passeggeri',
    capacita: 180,
    autonomia: 6100,
    inManutenzione: true,
    velocitaMassima: 830,
    ultimoCheck: 2024
  },
  {
    modello: 'C-130 Hercules',
    compagnia: 'US Air Force',
    anno: 2005,
    tipo: 'Militare',
    capacita: 92,
    autonomia: 3800,
    inManutenzione: false,
    velocitaMassima: 671,
    ultimoCheck: 2022
  },
  {
    modello: 'Gulfstream G700',
    compagnia: 'PrivateFly',
    anno: 2021,
    tipo: 'Privato',
    capacita: 19,
    autonomia: 13800,
    inManutenzione: false,
    velocitaMassima: 950,
    ultimoCheck: 2024
  },
  {
    modello: 'Antonov An-124',
    compagnia: 'Volga-Dnepr',
    anno: 1992,
    tipo: 'Cargo',
    capacita: 150,
    autonomia: 4800,
    inManutenzione: true,
    velocitaMassima: 865,
    ultimoCheck: 2023
  }
]
