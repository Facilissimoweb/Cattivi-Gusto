import { InanimateObjectFortune, VoidWeatherForecast } from '../types';

export const INANIMATE_FORTUNES: InanimateObjectFortune[] = [
  {
    id: 'tostapane',
    objectName: 'Il Tuo Tostapane',
    iconName: 'Flame',
    mood: 'Giudicante e Caldo',
    fortune: 'Oggi il tostapane brucerà un solo lato del pane per insegnarti la relatività della vita.',
    advice: 'Non toccare la leva due volte consecutive: soffre di ansia da prestazione termica.'
  },
  {
    id: 'lampada',
    objectName: 'La Lampada da Comò',
    iconName: 'Lightbulb',
    mood: 'Sospettosa',
    fortune: 'Stasera tremolerà per 0.4 secondi esattamente quando stai pensando a qualcosa di imbarazzante del 2017.',
    advice: 'Cambia la lampadina con una a luce rossa per dare un tono da film noir ai tuoi fallimenti.'
  },
  {
    id: 'divano',
    objectName: 'Il Divano di Casa',
    iconName: 'Armchair',
    mood: 'Accogliente e Vendicativo',
    fortune: 'Nasconde la monetina da 2 euro e un telecomando che credevi perso nel 2021.',
    advice: 'Fai un\'offerta di due patatine fritte nella fessura tra i cuscini come tributo di pace.'
  },
  {
    id: 'router',
    objectName: 'Il Router Wi-Fi',
    iconName: 'Wifi',
    mood: 'Capriccioso',
    fortune: 'La spia internet diventerà rossa soltanto durante la riunione di lavoro più importante.',
    advice: 'Spegni e riaccendi. Se non funziona, abbraccialo e chiedigli come sta.'
  },
  {
    id: 'calzino',
    objectName: 'Il Calzino Spaiato',
    iconName: 'Footprints',
    mood: 'Solitario',
    fortune: 'Il suo compagno si trova attualmente in un universo parallelo a godersi un mojito.',
    advice: 'Indossalo comunque con una ciabatta spaiata per protestare contro l\'omologazione dei piedi.'
  }
];

export const VOID_WEATHER: VoidWeatherForecast = {
  location: 'Nel Vuoto Interiore',
  temperature: 'Ø° Absurd',
  condition: 'Attualmente Inesistente con possibilità di Pioggia di Briciole',
  description: 'Umidità spirituale al 99%. Venti moderati di nostalgia improvvisa per gli anni 90.',
  recommendation: 'Si consiglia di indossare un cappello di stagnola e di non guardare negli occhi gli specchi.'
};

export const GURU_QUOTES: string[] = [
  "Non cercare la strada: la strada è occupata dai lavori in corso per il rifacimento della fibra ottica.",
  "Chi cammina a passo lento arriva più tardi, ma ha visto più formiche lungo il percorso.",
  "Se una porta si chiude, è probabilmente perché c'è corrente d'aria in corridoio.",
  "Siediti in silenzio per 10 minuti. Se senti un sibilo, è la caffettiera o la tua sanità mentale.",
  "Un problema rinviato a domani è un problema che domani ti farà arrabbiare il doppio.",
  "Bevi un bicchiere d'acqua tiepida e pretendi che sia un cocktail da 18 euro in un bar del centro.",
  "Guarda il soffitto finché le macchie d'umidità non prendono la forma di un filosofo presocratico.",
  "Respira dentro: entra aria. Respira fuori: esce sconforto. Ripeti finché non ti stanchi."
];

export const CAT_PARANOIA_TESTS = [
  { question: "Come ti guarda il tuo gatto quando entri in stanza?", options: ["Sguardo vuoto che trapassa la mia anima", "Sotto i baffi con disprezzo aristocratico", "Come se fossi un ostacolo tra lui e il cibo", "Fa finta che io sia un ologramma"] },
  { question: "Dove si posiziona durante la notte?", options: ["Sulla mia gola per misurare il respiro", "Sulla tastiera del laptop aperto", "Dietro la porta per farmi sgambetto", "In cima all'armadio a preparare l'attacco"] },
  { question: "Cosa fa quando fai cadere un oggetto?", options: ["Mi guarda e ne fa cadere un altro per sfida", "Corre via come se fosse esplosa una bomba atomica", "Annota mentalmente l'errore nel suo registro", "Continua a leccarsi una zampa in modo provocatorio"] }
];
