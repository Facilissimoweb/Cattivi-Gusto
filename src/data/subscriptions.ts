import { SubscriptionPlan } from '../types';

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'piano-briciole',
    name: 'ABBONAMENTO BRICIOLE',
    price: '€ 0',
    billingPeriod: 'per sempre (purtroppo)',
    badge: 'GRATUITO',
    description: 'Il piano ideale per chi vuole leggere cose inutili senza spendere nemmeno un centesimo di euro.',
    perks: [
      'Accesso illimitato agli articoli pubblici',
      'Ricevi 0 email di spam alla settimana',
      'Delusioni digitali garantite 24/7',
      'Permesso di guardare le immagini di gatti cospiratori',
      'Nessun supporto clienti (siamo irreperibili)'
    ],
    callToAction: 'RESTA POVERO & FELICE',
    color: '#EDE9DF'
  },
  {
    id: 'piano-cattivo-gusto-digital',
    name: 'CATTIVO GUSTO DIGITAL VIP',
    price: '€ 4,99',
    billingPeriod: 'al mese',
    badge: 'IL PIÙ SCELTO DAI FOLLI',
    isPopular: true,
    description: 'Sostieni la causa dell\'assurdo e ricevi il distintivo di Alter Ego Honorario.',
    perks: [
      'Tutti i vantaggi del piano Briciole',
      'Accesso agli Articoli Segreti proibiti dal buon senso',
      'Stemma digitale ufficiale da mostrare agli amici scettici',
      'Diritto di firma prioritaria sul Manifesto dell\'Assurdo',
      'Generatore di risposte ciniche illimitato',
      'Sconto del 0% sul merchandising inesistente'
    ],
    callToAction: 'ABBONATI ORA AL CAOS',
    color: '#A0FF00'
  },
  {
    id: 'piano-sostenitore-caos',
    name: 'SOSTENITORE DEL CAOS SUPREMO',
    price: '€ 19,99',
    billingPeriod: 'al mese',
    badge: 'SOLO PER MECENATI DELL\'ASSURDO',
    description: 'Per chi possiede troppi soldi e desidera finanziarli per stampare volantini sul nulla.',
    perks: [
      'Tutti i privilegi dei piani precedenti',
      'Menzione d\'onore nel Registro del Vuoto',
      'Invio mensile di un foglio stropicciato a casa tua',
      'Un gatto anonimo pregherà per il tuo tostapane',
      'Acceso diretto alla chat privata con l\'Alter Ego',
      'Certificato cartaceo in carta pergamena dell\'Illuminato'
    ],
    callToAction: 'REGALA SOLDI AL CAOS',
    color: '#000000'
  }
];
