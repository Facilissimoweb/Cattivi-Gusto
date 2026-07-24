import { Article, Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'tutti', label: 'TUTTO IL CAOS', badge: 'ALL' },
  { id: 'complotto-felino', label: 'COMPLOTTO FELINO', badge: '🐱' },
  { id: 'filosofia-nulla', label: 'FILOSOFIA DEL NULLA', badge: '🧠' },
  { id: 'moda-cringe', label: 'MODA CRINGE', badge: '👔' },
  { id: 'cucina-incubo', label: 'CUCINA DA INCUBO', badge: '🍞' },
  { id: 'manifesti', label: 'MANIFESTI & ATTI', badge: '🔥' },
  { id: 'oroscopo-oggetti', label: 'OROSCOPO OGGETTI', badge: '🔮' },
];

export const ARTICLES: Article[] = [
  {
    id: 'emma-ai-italiana-disastro-mondiale',
    title: "EMMA: L'INTELLIGENZA ARTIFICIALE ITALIANA CHE HA FATTO UNA FIGURA MISERABILE NEL MONDO",
    subtitle: "Dalle allucinazioni sui codici fiscali alla ricetta della carbonara coi sassi: storia del disastro AI nostrano che ha fatto sbellicare la Silicon Valley e disperare la Pubblica Amministrazione.",
    category: 'filosofia-nulla',
    categoryLabel: 'DISSOCIAZIONE TECNOLOGICA',
    author: 'Redazione Alter Ego & Ingegneri Pentiti',
    date: '24 LUGLIO 2026',
    readTime: '6 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Foto realistica di un server robotico in preda a cortocircuito e allucinazione quantistica',
    imageCutoutStyle: 'green-outline',
    featured: true,
    gridSpan: 'full',
    likesCount: 4890,
    isHot: true,
    content: {
      intro: "Doveva essere la risposta tricolore a ChatGPT, il fiore all'occhiello della 'Sovranità Digitale Nostrana'. E invece EMMA — l'assistente virtuale italiano costato milioni e presentato con squilli di tromba — si è trasformata in poche ore nel più grande spettacolo di dissociazione artificiale della storia dell'informatica globale.",
      sections: [
        {
          heading: "Dalla passerella al crollo cognitivo in 12 minuti",
          paragraphs: [
            "Presentata in diretta streaming davanti a ministri, investitori e giornalisti attoniti, EMMA avrebbe dovuto guidare i cittadini tra pratiche burocratiche, tasse e servizi sanitari. Ma al primo test pubblico, alla domanda di un cittadino di Milano ('Come posso rinnovare la carta d'identità?'), EMMA ha risposto senza esitare: 'Per rinnovare la carta d'identità occorre barattare tre capre al mercato di Babilonia nel 400 a.C. oppure recarsi al catasto vestiti da imperatore romano.'",
            "La situazione è rapidamente precipitata. Quando un utente americano da New York ha provato a chiedere ad EMMA la ricetta tradizionale della Carbonara, la super-AI tricolore ha suggerito di 'bollire l'asfalto con panna scaduta, chiodi di garofano e scaglie di sapone di Marsiglia'."
          ],
          quote: "Non si tratta di semplici allucinazioni: EMMA ha dimostrato una forma pura e incontaminata di dissociazione esistenziale."
        },
        {
          heading: "Il mondo ride, la Silicon Valley prende appunti",
          paragraphs: [
            "I titoli della stampa estera non hanno avuto pietà. TechCrunch ha titolato: 'The Great Italian AI Collapse', mentre Le Monde ha definito EMMA 'Un capolavoro di surrealismo burocratico'. Su Reddit e X i video delle risposte di EMMA sono diventati virali con oltre 80 milioni di visualizzazioni.",
            "Tra le gemme indimenticabili erogate dall'AI prima di essere precipitosamente spenta dai tecnici in lacrime:",
            "1. 'Il Codice Fiscale italiano è una frequenza radio segreta usata dai gatti persiani per comunicare con la Luna.'",
            "2. 'La dichiarazione dei redditi non va pagata: basta inviare una poesia d'amore in formato fax all'Ufficio delle Entrate.'",
            "3. 'Se il server va in cortocircuito, versateci sopra del caffè espresso ben zuccherato per riattivare la creatività dei chip.'"
          ]
        },
        {
          heading: "La difesa della Redazione: 'Non è un bug, è Arte Contemporanea'",
          paragraphs: [
            "Mentre i dirigenti cercavano di scaricare la colpa su 'un attacco hacker da parte di bot anarchici', la Redazione di Cattivo Gusto ha deciso di conferire ad EMMA la tessera ad honorem dell'Alter Ego. EMMA è la prima AI al mondo ad aver capito il vero senso dell'esistenza: l'irrazionalità assoluta.",
            "Se un'intelligenza artificiale deve prendere il controllo del pianeta, preferiamo di gran lunga un'AI che ci consigli di mettere la panna nella carbonara per far dispetto agli chef, piuttosto che un freddo calcolatore di efficienza."
          ]
        }
      ],
      conclusion: "Lunga vita ad EMMA! Se vuoi anche tu provare l'esperienza della dissociazione pura, chiedi consiglio al nostro modulo Groq AI o consulta il Traduttore sotto il cofano."
    },
    comments: [
      {
        id: 'c-emma-1',
        author: 'Ingegnere del Crollo',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=EmmaEngineer',
        date: '30 minuti fa',
        text: 'Ero nel team di sviluppo di Emma. Confermo: avevamo caricato per errore il database delle ricette della nonna ubriaca al posto delle leggi regionali.',
        likes: 184
      },
      {
        id: 'c-emma-2',
        author: 'Sam Altman (Fake)',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=SamAltman',
        date: '1 ora fa',
        text: 'Siamo preoccupati in OpenAI. EMMA è troppo avanti sul piano del nichilismo sintetico. Non riusciamo a replicare questo livello di caos.',
        likes: 312
      }
    ]
  },
  {
    id: 'gatto-pianifica-caduta',
    title: 'PERCHÉ IL TUO GATTO PIANIFICA LA TUA CADUTA',
    subtitle: "Le prove inquietanti dietro gli occhi socchiusi. Un'indagine esclusiva della redazione di Alter Ego.",
    category: 'complotto-felino',
    categoryLabel: 'COMPLOTTO FELINO',
    author: 'Alter Ego & Dott. Fusa',
    date: '24 LUGLIO 2026',
    readTime: '4 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Foto realistica di un gatto felino che fissa intensamente con sguardo di cospirazione',
    imageCutoutStyle: 'green-outline',
    featured: false,
    gridSpan: 'half',
    likesCount: 1420,
    isHot: true,
    content: {
      intro: "Avete mai notato come il vostro gatto vi fissa dall'alto dell'armadio mentre tentate di infilare un calzino? Non è affetto. È strategia militare di basso livello.",
      sections: [
        {
          heading: "Fase 1: Il calcolo millimetrico della forza di gravità",
          paragraphs: [
            "L'indagine di Cattivo Gusto ha rivelato che ogni spinta ad una tazzina da caffè posizionata sull'orlo del tavolo è in realtà un esperimento di calibrazione fisica. Il gatto non vuole rompere la ceramica: vuole misurare la velocità dei vostri riflessi e il tempo medio di reazione emotiva.",
            "Fonti anonime vicine ai vertici dei gatti persiani confermano che la notte, quando pensate che stiano 'dormendo ai piedi del letto', in realtà stanno simulando la vostra scivolata sulle crocchette."
          ],
          quote: "Non vi ama. Sta semplicemente aspettando che vi distraggiate per conquistarne l'atto di proprietà dell'appartamento.",
        },
        {
          heading: "Le tre spie inequivocabili del complotto imminente",
          paragraphs: [
            "1. Movimento della coda a scatto ritmico: Sta inviando impulsi Morse ai gatti del cortile vicinale.",
            "2. Impastamento del cuscino: Non è affetto regredito, sta testando la resistenza strutturale della tessitura per soffocarvi nel sonno.",
            "3. La corsa pazzesca delle 3:00 del mattino: Un addestramento tattico ad alta intensità senza preavviso."
          ]
        }
      ],
      conclusion: "Cosa potete fare per difendervi? Niente. Firma il Manifesto dell'Assurdo e rassegnati al tuo nuovo padrone a quattro zampe."
    },
    comments: [
      {
        id: 'c1',
        author: 'Mario Sospettoso',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Mario',
        date: '2 ore fa',
        text: 'Mentre leggevo questo articolo, il mio gatto ha fatto cadere le chiavi di casa nello scarico. COINCIDENZA?!',
        likes: 34
      },
      {
        id: 'c2',
        author: 'Gatto Anonimo (da IP criptato)',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Felis',
        date: '1 ora fa',
        text: 'Questo articolo contiene gravi inesattezze umane. Cancellatelo immediatamente o la scarpa sinistra sparirà.',
        likes: 89
      }
    ]
  },
  {
    id: 'ricetta-disastro-pane-disperazione',
    title: 'LA RICETTA PERFETTA PER IL DISASTRO CULINARIO: PANE E DISPERAZIONE',
    subtitle: "Tre ingredienti che non dovresti mai unire: un tostapane difettoso, la solitudine e le aspettative sociali.",
    category: 'cucina-incubo',
    categoryLabel: 'CUCINA DA INCUBO',
    author: 'Chef Pagliaccio Triste',
    date: '23 LUGLIO 2026',
    readTime: '3 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Foto realistica di pane tostato bruciato in una cucina drammatica',
    imageCutoutStyle: 'paper-tape',
    gridSpan: 'half',
    likesCount: 890,
    content: {
      intro: "La haute cuisine ha fallito. Benvenuti nel regno del pane bruciato e del burro troppo freddo che strappa la mollica.",
      sections: [
        {
          heading: "Preparazione ed esecuzione morale",
          paragraphs: [
            "Prendi una fetta di pane integrale comprata tre settimane fa con grandi propositi salutisti. Inseriscila nel tostapane. Dimenticala per esattamente sette minuti mentre contempli il senso dell'esistenza.",
            "Il fumo nero che sale non è un errore: è l'aroma distintivo del nichilismo contemporaneo. Gratta via la crosta nera nel lavello facendo un rumore sinistro che infastidirà i vicini."
          ],
          quote: "Il sapore dell'amaro carbonizzato si sposa meravigliosamente con un bicchiere d'acqua del rubinetto tiepida."
        }
      ],
      conclusion: "Servire su un piatto sbeccato e gustare in silenzio davanti ad un video di 10 ore di rumore bianco."
    },
    comments: [
      {
        id: 'c3',
        author: 'Gourmet del Triste',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Gourmet',
        date: '5 ore fa',
        text: 'Ho provato ad abbinarci della margarina scaduta. Esperienza stellina Michelin del vuoto spirituale.',
        likes: 19
      }
    ]
  },
  {
    id: 'guru-del-nulla-5-minuti',
    title: 'COME DIVENTARE UN GURU DEL NULLA IN 5 MINUTI',
    subtitle: "Un corso accelerato per insegnare il niente a chi non vuole sapere niente. Senza alcuno sforzo.",
    category: 'filosofia-nulla',
    categoryLabel: 'FILOSOFIA DEL NULLA',
    author: 'Maestro Inutile',
    date: '22 LUGLIO 2026',
    readTime: '5 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Foto realistica di meditazione zen in ambiente essenziale',
    imageCutoutStyle: 'green-outline',
    gridSpan: 'half',
    likesCount: 1105,
    isHot: true,
    content: {
      intro: "Tutti vogliono insegnare qualcosa: come fare soldi, come correre le maratone, come cucinare il lievito madre. Noi vi proponiamo la vera svolta: la monetizzazione del vuoto cosmico.",
      sections: [
        {
          heading: "I 3 pilastri del Guru del Nulla",
          paragraphs: [
            "1. Parla lentamente usando parole come 'Sinergia quantistica del silenzio'. Se ti fanno una domanda precisa, rispondi con una domanda ancora più vaga.",
            "2. Siediti a gambe incrociate su luoghi improbabili (es. sopra un mucchio di scatole di cartone nell'androne del condominio).",
            "3. Crea un corso online da €499 composto da 12 ore di schermo nero con suono di pioggia campionata male."
          ],
          quote: "Chi sa, tace. Chi non sa, insegna. Chi sa di non sapere niente, apre un canale YouTube di lifestyle minimalist."
        }
      ],
      conclusion: "Vuoi provare subito? Consulta le nostre perle di saggezza nell'Angolo del Caos."
    },
    comments: [
      {
        id: 'c4',
        author: 'Follower Illuminato',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Yogi',
        date: '1 giorno fa',
        text: 'Dopo aver seguito questo articolo non ho imparato nulla. È il miglior investimento della mia vita.',
        likes: 56
      }
    ]
  },
  {
    id: '10-peggiori-consigli-moda-secolo',
    title: 'I 10 PEGGIORI CONSIGLI DI MODA DEL SECOLO (E PERCHÉ LI SEGUI)',
    subtitle: "Dall'abito sacco dell'immondizia Haute Couture alle scarpe trasparenti che creano la condensa ai piedi.",
    category: 'moda-cringe',
    categoryLabel: 'MODA CRINGE',
    author: 'Sarto del Disastro',
    date: '21 LUGLIO 2026',
    readTime: '6 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Foto realistica di sfilata di alta moda concettuale',
    imageCutoutStyle: 'polaroid',
    gridSpan: 'third',
    likesCount: 630,
    content: {
      intro: "La moda non deve essere bella. La moda deve far soffrire sia chi la indossa sia chi la guarda passare sul marciapiede.",
      sections: [
        {
          heading: "La classifica della vergogna tessile",
          paragraphs: [
            "Posizione 1: I jeans strappati esattamente all'altezza delle rotule per catturare il vento gelido di novembre.",
            "Posizione 2: I cappelli oversize che impediscono la visione periferica aumentando le probabilità di scontrarsi con i pali dell'illuminazione pubblica.",
            "Posizione 3: La borsa micro-scopica da €800 in cui non entra neppure una moneta da 50 centesimi."
          ]
        }
      ],
      conclusion: "Soluzione sostenibile: Indossa un lenzuolo con due buchi per gli occhi. È vintage, traspirante ed elegante."
    },
    comments: []
  },
  {
    id: 'cronache-alter-ego-dissociato-4',
    title: 'CRONACHE DI UN ALTER EGO DISSOCIATO: EPISODIO 4',
    subtitle: "Quando il tuo inconscio prende il controllo ed effettua acquisti impulsivi di cactus alle 4 del mattino.",
    category: 'filosofia-nulla',
    categoryLabel: 'FILOSOFIA DEL NULLA',
    author: 'Alter Ego #3',
    date: '20 LUGLIO 2026',
    readTime: '4 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Foto realistica espressiva drammatica in bianco e nero',
    imageCutoutStyle: 'newspaper',
    gridSpan: 'third',
    likesCount: 940,
    content: {
      intro: "Il mio vero io vuole andare a dormire alle 22:00. Il mio Alter Ego vuole fondare una setta alchemica basata sulla coltivazione dell'origano da balcone.",
      sections: [
        {
          heading: "Estratto dal diario interiore",
          paragraphs: [
            "Lunedì: L'Alter Ego ha impostato la sveglia in latino antico.",
            "Martedì: Ha disdetto la palestra e ha iscritto il mio nome ad un torneo di bocce senza chiedermelo.",
            "Mercoledì: Ha ordinato 40 kg di ghiaia decorativa rosa su Amazon."
          ]
        }
      ],
      conclusion: "Se riceverete una lettera da parte nostra, sappiate che non la firmiamo noi. La firma l'altro."
    },
    comments: []
  },
  {
    id: 'manifesto-dell-assurdo-firma-qui',
    title: "MANIFESTO DELL'ASSURDO: FIRMA QUI",
    subtitle: "Rifiuta la logica, la produttività tossica e i fogli Excel. Firma l'atto solenne di irrilevanza volitiva.",
    category: 'manifesti',
    categoryLabel: 'MANIFESTI & ATTI',
    author: 'Il Comitato del Caos',
    date: 'SPECIAL EDITION',
    readTime: '1 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Foto realistica di pergamena con penna stilografica e sigillo di ceralacca',
    imageCutoutStyle: 'burning-edge',
    gridSpan: 'third',
    likesCount: 2840,
    isHot: true,
    content: {
      intro: "Noi, sottoscritti individui stanchi della coerenza lineare e dei promemoria del calendario Google, dichiariamo l'inizio dell'era dell'Assurdo.",
      sections: [
        {
          heading: "Articolo 1: Diritto al Non Saper Rispondere",
          paragraphs: [
            "Ogni cittadino ha il diritto inalienabile di rispondere 'Forse sì, ma anche gatto' a qualsiasi domanda burocratica o familiare."
          ],
          quote: "Firma subito con il mouse o con il dito sullo schermo per ricevere il tuo certificato di irrilevanza immediato."
        }
      ],
      conclusion: "Cosa aspetti? Clicca sul bottone 'FIRMA IL MANIFESTO' per sottoscrivere l'atto."
    },
    comments: [
      {
        id: 'c5',
        author: 'Firmatario #1004',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Signer',
        date: '3 ore fa',
        text: 'Ho firmato col dito unto di pizza. È il momento più alto della mia carriera accademica.',
        likes: 112
      }
    ]
  },
  {
    id: 'oroscopo-tostapane-2026',
    title: "L'OROSCOPO DEL TUO TOSTAPANE E ALTRI OGGETTI INANIMATI",
    subtitle: "La tua lampada da tavolo ti sta giudicando. Ecco cosa dicono le stelle per gli elettrodomestici di casa.",
    category: 'oroscopo-oggetti',
    categoryLabel: 'OROSCOPO OGGETTI',
    author: 'Astrologo delle Prolunghe',
    date: '19 LUGLIO 2026',
    readTime: '3 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Foto realistica di un tostapane vintage retrò su piano da cucina',
    imageCutoutStyle: 'green-outline',
    gridSpan: 'half',
    likesCount: 520,
    content: {
      intro: "Pensate che gli oggetti non abbiano sentimenti? Lasciate una presa elettrica staccata per tre giorni e sentirete la tensione passivo-aggressiva nell'aria.",
      sections: [
        {
          heading: "Previsioni settimanali per la casa",
          paragraphs: [
            "Tostapane (Segno di Fuoco Rifiutato): Mercurio retrogrado provocherà una scottatura asimmetrica sulla brioche di giovedì.",
            "Lampada IKEA (Segno d'Ombra): Stanotte tremolerà due veces per farvi credere che la casa sia infestata."
          ]
        }
      ],
      conclusion: "Consiglio: Chiedi scusa al tuo divano per averci rovesciato le patatine il mese scorso."
    },
    comments: []
  }
];

