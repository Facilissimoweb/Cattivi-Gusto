import { Article, Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'tutti', label: 'TUTTO IL CAOS', badge: 'ALL' },
  { id: 'tatuaggi', label: 'TATUAGGI CARNEI', badge: '🥩' },
  { id: 'accoppiamento', label: 'ACCOPPIAMENTO E DINTORNI', badge: '💘' },
  { id: 'trash-tv', label: 'TEMPTATION & TRASH', badge: '🏝️' },
  { id: 'complotto-felino', label: 'COMPLOTTO FELINO', badge: '🐱' },
  { id: 'filosofia-nulla', label: 'FILOSOFIA DEL NULLA', badge: '🧠' },
  { id: 'moda-cringe', label: 'MODA CRINGE', badge: '👔' },
  { id: 'cucina-incubo', label: 'CUCINA DA INCUBO', badge: '🍞' },
  { id: 'manifesti', label: 'MANIFESTI & ATTI', badge: '🔥' },
  { id: 'oroscopo-oggetti', label: 'OROSCOPO OGGETTI', badge: '🔮' },
];

export const ARTICLES: Article[] = [
  {
    id: 'ginetta-tatuaggi-carne-vaticano',
    title: "GINETTA E I TATUAGGI A TEXTURE DI CARNE: APRE LO STUDIO SACRO ANNESSO ALLE STANZE DEL PAPA",
    subtitle: "Dalla Scottona di primo taglio per la muscolatura dei martiri al macinato grasso per lo sguardo della Madonna: viaggio nell'atelier d'alta macelleria sulla pelle dentro la Città del Vaticano.",
    category: 'tatuaggi',
    categoryLabel: 'TATUAGGI CARNEI & SACRI',
    author: 'Inviato Speciale in Vaticano & Redazione Cattivo Gusto',
    date: '24 LUGLIO 2026',
    readTime: '8 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Foto di uno studio di tatuaggi artistico ed esclusivo con illuminazione sacra',
    imageCutoutStyle: 'green-outline',
    featured: true,
    gridSpan: 'full',
    likesCount: 7890,
    isHot: true,
    content: {
      intro: "C'è chi si fa tatuare l'iniziale del partner, chi un'ancora vintage e chi sceglie l'Eterno. A Roma ha ufficialmente aperto i battenti lo studio di tatuaggi più esclusivo, teologicamente discusso e nutrizionalmente proteico della storia dell'arte contemporanea: 'Carne Sacra Tattoo', guidato dalla vulcanica tatuatrice Ginetta. La location? Non una via di periferia, bensì un'ala riservata del Palazzo Apostolico in Vaticano, direttamente adiacente agli appartamenti privati del Pontefice.",
      sections: [
        {
          heading: "La Filosofia della Maestra Ginetta: 'Solo Texture Carnica Autentica'",
          paragraphs: [
            "L'intuizione di Ginetta è semplice quanto sconvolgente: rifiutare i tradizionali inchiostri sintetici e i pigmenti vegetali per abbracciare l'unica vera forma di chiaroscuro iperrealistico: la resa cromatica dei tagli di carne bovina e suina.",
            "• 'L'inchiostro nero piatto è robetta da dilettanti' spiega Ginetta mostrando la sua pistola ad aghi con serbatoio in ceramica raffreddata. 'Se devi tatuare lo sguardo addolorato di una Madonna con Bambino, non puoi usare un grigio qualunque: serve un'emulsione di macinato magro e grasso all'80/20. La venatura bianca dell'adipe dà allo sguardo della Vergine un'umidità mistica che nemmeno Caravaggio sapeva replicare'."
          ],
          quote: "Il Papa dal corridoio affianco sente l'odore di rosmarino e salvia che usiamo per disinfettare gli aghi e ogni tanto si affaccia a darci la benedizione tra una Scottona e una controfiletta."
        },
        {
          heading: "Il Catalogo delle Pietanze e Tagli di Carne Tattoo",
          paragraphs: [
            "Nel menu-catalogo dello studio di Ginetta in Vaticano, ogni taglio corrisponde a uno stile figurativo e a una texture cutanea ben precisa:",
            "1. Texture di Scottona di Primo Taglio: Utilizzata per i bicipiti, i teschi barocchi e la muscolatura dei santi guerrieri. La fibra rossa compatta regala un effetto tridimensionale a prova di scottatura solare.",
            "2. Texture di Macinato Grasso Selezionato: Ideale per il chiaroscuro degli occhi, le rughe d'espressione della Madonna e i drappeggi dei mantelli. La parte grassa dona una luminosità satinata naturale.",
            "3. Marezzatura di Wagyu A5 Iper-Ingrassato: Riservata esclusivamente ai Cuori Sacri fiammeggianti e agli arcangeli. Le sottili venature di grasso nobile creano un reticolo marmoreo che incanta la Guardia Svizzera.",
            "4. Pancetta Tesa e Lardo di Colonnata: Utilizzati per i bordi decorativi, le aureole e le cornici dorate. Sulla pelle garantisce un effetto lucido permanente tipo 'pelle di cotenna di maiale al forno'.",
            "5. Filetto di Chianina Frollato 60 Giorni: Per i tatuaggi tribali d'alta quota e le scritte in latino ecclesiastico con tonalità bordeaux fondente."
          ]
        },
        {
          heading: "Sconto Promozionale 'Giubileo del Macinato' & Benedizione al Rosmarino",
          paragraphs: [
            "In occasione dell'inaugurazione vaticana, lo studio 'Carne Sacra' di Ginetta offre uno sconto speciale del 20% a chiunque si presenti con un rametto di rosmarino fresco e un vassoio di porchetta di Ariccia.",
            "Ogni seduta include la marinatura lenitiva post-tattoo con olio extravergine d'oliva benedetto e una spruzzata di sale rosa dell'Himalaya per fissare i pigmenti proteici."
          ]
        }
      ],
      conclusion: "Vuoi trasformare il tuo braccio in un bancone da macelleria rinascimentale approvato dalla Santa Sede? Prenota subito da Ginetta! E se hai dubbi teologici, passa prima dal nostro Traduttore Sotto il Cofano per farti spiegare la procedura in dialetto napoletano o in latino ecclesiastico."
    },
    comments: [
      {
        id: 'c-gin-1',
        author: 'Monsignor_Bistecca',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=MonsignorBistecca',
        date: '5 minuti fa',
        text: 'Ho fatto la Madonna in macinato grasso sulla schiena: quando vado in processione d\'estate emano un profumo di grigliata che converte anche gli atei!',
        likes: 890
      },
      {
        id: 'c-gin-2',
        author: 'GuardiaSvizzera_Hans',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=GuardiaHans',
        date: '18 minuti fa',
        text: 'Ginetta è una santona. Il mio san Michele Arcangelo in Wagyu A5 ha fatto piangere di commozione l\'intero Palazzo Apostolico.',
        likes: 1040
      }
    ]
  },
  {
    id: 'guida-primo-appuntamento-sabotaggio',
    title: "ACCOPPIAMENTO E DINTORNI: MANUALE PRATICO PER ESSERE SCARTATI CATEGORICAMENTE AL PRIMO APPUNTAMENTO",
    subtitle: "Dall'evocare l'ex come unità di misura del cibo al pagare il conto con 700 monetine di rame: 10 mosse infallibili per garantire un blocco immediato su WhatsApp.",
    category: 'accoppiamento',
    categoryLabel: 'ACCOPPIAMENTO & DINTORNI',
    author: 'Dott. Satira Amorosa & Redazione Cattivo Gusto',
    date: '24 LUGLIO 2026',
    readTime: '6 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Foto satirica di un primo appuntamento romantico andato storto al ristorante',
    imageCutoutStyle: 'green-outline',
    featured: true,
    gridSpan: 'full',
    likesCount: 3890,
    isHot: true,
    content: {
      intro: "Trovare l'anima gemella è un processo lungo, faticoso e pieno di incognite. Perché perdere tempo in corteggiamenti estenuanti quando puoi distruggere qualsiasi speranza di relazione nei primi venti minuti di cena? Benvenuti nella Guida Definitiva al Sabotaggio Relazionale, curata dagli esperti di corteggiamento al contrario della Redazione di Cattivo Gusto.",
      sections: [
        {
          heading: "1. Il 'Fattore Ex': Usala/o come unità di misura universale",
          paragraphs: [
            "Il primo grande segreto di un appuntamento fallimentare è far sentire costantemente la presenza di una terza persona invisibile al tavolo. Non limitarti a citare casualmente l'ex partner: trasformalo nello standard di paragone di qualsiasi piatto o conversazione.",
            "• 'I tagliolini al tartufo sono squisiti... ma sai chi li faceva davvero mantecati a dovere? La mia ex Marta. A proposito, ti mostro questa cartella condivisa su Google Drive con 1.400 foto delle nostre vacanze a Gabicce Mare nel 2021'.",
            "• 'Hai lo stesso identico tono di voce di quando il mio ex mi comunicava che voleva prendersi una pausa di riflessione. Scusa se mi commuovo mentre mastico il grissino'."
          ],
          quote: "Se alla fine del secondo antipasto il tuo interlocutore non ha finto un malessere improvviso per fuggire dalla finestra del bagno, stai sbagliando qualcosa."
        },
        {
          heading: "2. La Divisione Chirurgica del Conto con le Monetine di Rame",
          paragraphs: [
            "Quando il cameriere porta il conto a fine serata, sfoggia il tuo talento contabile spietato. Tira fuori dal giubbotto un taccuino millimetrato e un calibro digitale:",
            "• 'Allora: tu hai bevuto tre sorsi della mia acqua frizzante, hai toccato due volte il cestino del pane ed hai preso una spolverata di parmigiano extra. Il tuo quota parte esatto è 14,87€'.",
            "• Paga la tua quota esatta contando una ad una 743 monetine da due centesimi tenute dentro un sacchetto della farmacia, lamentandoti ad alta voce con il personale di sala per l'inflazione e il costo del coperto."
          ]
        },
        {
          heading: "3. La Diagnosi Psicoanalitica Non Richiesta al Secondo Bicchier d'Acqua",
          paragraphs: [
            "Anziché fare conversazione leggera sulle proprie passioni, trasforma la cena in una seduta d'assalto di psicoterapia d'emergenza:",
            "• 'Ho notato che hai tagliato la pizza in sei spicchi anziché in otto: questo rivela un latente complesso edipico non risolto e una strisciante paura del fallimento emotivo. Parlami di tua madre, voglio fare una mappa concettuale sui tovaglioli di carta'.",
            "• Metti al centro del tavolo una clessidra e concedi al partner esattamente 45 secondi per rispondere a domande intime sulla propria infanzia."
          ]
        },
        {
          heading: "4. Rivelazioni Cospirazionista-Felini sulle Onde 5G nel Cibo",
          paragraphs: [
            "Piegati verso il partner con sguardo cospiratorio, abbassa la voce e svela la verità sulla digestione umana:",
            "• 'Io non mangio mai la crosta del corClone perché rischia di attirare la frequenza telepatica dei gatti di quartiere. Se vuoi ti inoltro il canale Telegram dove spieghiamo come schermare i tostapane col foglio d'alluminio'."
          ]
        }
      ],
      conclusion: "Seguendo religiosamente questi quattro pilastri del disastro romantico, garantiamo un tasso di rifiuto del 100% con blocco preventivo su tutti i canali social e telefonici entro la mezzanotte. Unico rischio collaterale: incontrare un partner con lo stesso livello di squilibrio che decida di sposarvi sul posto."
    },
    comments: [
      {
        id: 'c-app-1',
        author: 'Gianluigi_CringeMaster',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=GianluigiCringe',
        date: '12 minuti fa',
        text: 'Ho applicato la tecnica delle 743 monetine da 2 centesimi ieri sera al ristorante. Ora vivo felicemente da solo con tre tostapane. Funziona alla perfezione!',
        likes: 312
      },
      {
        id: 'c-app-2',
        author: 'SeducenteAnonimo',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=AnonimoSeducente',
        date: '40 minuti fa',
        text: 'Io ho mostrato le diapositive PowerPoint sui gatti di redazione al terzo minuto di aperitivo. Mi hanno scortato fuori i vigili urbani. Voto 10/10.',
        likes: 540
      }
    ]
  },
  {
    id: 'temptation-island-perle-assurde',
    title: "TEMPTATION ISLAND: FALÒ, DISSOCIAZIONE E LE PERLE PIÙ ASSURDE DELLE COPPIE IN CRISI",
    subtitle: "Dall'iconico 'Ho visto cose che voi umani' alle corse disperate sulla spiaggia inseguiti dai cameraman: guida definitiva alla fenomenologia del crollo amoroso in diretta TV.",
    category: 'trash-tv',
    categoryLabel: 'TEMPTATION & DISSOCIAZIONE',
    author: 'Inviato del Pinnettu & Redazione Alter Ego',
    date: '24 LUGLIO 2026',
    readTime: '7 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Foto realistica di un villaggio turistico sul mare di notte con luci e falò drammatico',
    imageCutoutStyle: 'green-outline',
    featured: true,
    gridSpan: 'full',
    likesCount: 5620,
    isHot: true,
    content: {
      intro: "Ogni estate la Sardegna diventa il teatro del più grande esperimento sociologico del pianeta: prendere sei coppie sull'orlo del baratro, separarle in due villaggi ricchi di tentatori oliati, e far dire a Filippo Bisciglia con tono solenne la frase sacra: 'Ho un video per te'. Da quel momento in poi, la logica e la sintassi italiana smettono ufficialmente di esistere.",
      sections: [
        {
          heading: "Le 'Perle di Saggezza' che hanno riscritto la lingua italiana",
          paragraphs: [
            "Temptation Island non è solo televisione: è un generatore automatico di aforismi filosofici contemporanei. Durante il rito del Pinnettu o davanti ai tronchi del falò di confronto, i protagonisti danno il meglio del loro repertorio cognitivo:",
            "• 'Io sono venuto qui per capire se la rispetto... e invece l'ho vista ridere mentre mangiava un cocco con il tentatore! PER ME È FINITA!'",
            "• 'L'ho vista felice... E QUESTO NON GLIELO PERDONO! Se voleva essere felice poteva rimanere a casa a stirare le mie magliette!'",
            "• 'Filippo, io per lei ho fatto di tutto: ho lasciato la mia città, i miei amici, e persino il torneo di calcetto del giovedì. E lei mi ripaghi facendo acquagym con un single che si chiama Luan?!'",
            "• 'Io con te volevo fare un percorso di crescita interiore... ma prima volevo capire se mi manchi davvero o se mi mancava solo il tuo abbonamento a Netflix.'",
            "• 'Non è che l'ho tradita... stavo solo testando la stabilità strutturale del mio sentimento in un contesto di stress atmosferico!'"
          ],
          quote: "Filippo, se guarda un altro video io spacco la duna di sabbia e vado nell'altro villaggio a piedi nudi a riprendermi la mia dignità!"
        },
        {
          heading: "I comportamenti più assurdi da antologia del trash",
          paragraphs: [
            "Accanto al frasario, ci sono i gesti atletici ed emotivi che sono ormai entrati nel mito:",
            "1. La corsa sulla battigia: Il classico momento in cui il fidanzato scopre che la compagna ha scambiato due parole d'affetto e decide di superare i blocchi di sicurezza della produzione. Quattro cameraman in apnea e tre autori con le infradito cercano di placcarlo sulle rocce mentre lui urla il nome della fidanzata verso il mare aperto.",
            "2. La distruzione dei pouf e delle palme: Quando la rabbia sale, la vegetazione sarda e l'arredamento da giardino diventano le prime vittime. C'è chi ha tirato pugni a cuscinetti decorativi e chi ha cercato di abbattere un pino a mani nude per dimostrare la propria virilità ferita.",
            "3. Il bagno a mezzanotte in maglietta: Il segnale inequivocabile che il confine del 'percorso' è stato travalicato. Entrare in acqua vestiti con la t-shirt bianca della produzione equivale a firmare le carte del divorzio in mondovisione."
          ]
        },
        {
          heading: "Il Verdetto del Falò di Confronto Straordinario",
          paragraphs: [
            "Alla fine di ogni puntata, davanti al fuoco scoppiettante e alle domande imperturbabili di Filippo Bisciglia, avviene il miracolo: la coppia si insulta ininterrottamente per 45 minuti, rinfacciandosi ogni spesa dell'Eurospin dal 2019 ad oggi, per poi concludere con un clamoroso: 'Torniamo a casa insieme perché il nostro amore è troppo forte'.",
            "La Redazione di Cattivo Gusto conferisce il premio 'Premio Dissociazione dell'Anno' a tutti i partecipanti che sono riusciti a piangere disperatamente mentre sorseggiavano un drink alla frutta servito in un cocco cavo."
          ]
        }
      ],
      conclusion: "Vuoi capire a che punto è la tua storia d'amore? Non serve andare in Sardegna: basta fare il nostro test di paranoia o consultare il Traduttore Bizzarro sotto il cofano!"
    },
    comments: [
      {
        id: 'c-ti-1',
        author: 'Filippo Bisciglia (Fan Club)',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=FilippoFan',
        date: '10 minuti fa',
        text: 'Ho un video per voi! Nel video c\'è la vostra dignità che saluta dalla spiaggia e sale su un pedalò col tentatore!',
        likes: 420
      },
      {
        id: 'c-ti-2',
        author: 'Spettatore del Pinnettu',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=PinnettuViewer',
        date: '25 minuti fa',
        text: 'L\'espressione "L\'ho vista felice e questo non glielo perdono" merita di essere scolpita sul marmo davanti al Ministero della Cultura.',
        likes: 610
      }
    ]
  },
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

