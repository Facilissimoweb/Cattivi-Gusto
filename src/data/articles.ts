import { Article, Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'tutti', label: 'TUTTO IL CAOS', badge: 'ALL' },
  { id: 'economia-disperazione', label: 'ECONOMIA E DISPERAZIONE', badge: '💳' },
  { id: 'teresa-tarocchi', label: 'TERESA E I TAROCCHI', badge: '🔮' },
  { id: 'estetica-bellezza', label: 'ESTETICA & BELLEZZA BRUTTA', badge: '💄' },
  { id: 'tatuaggi', label: 'TATUAGGI CARNEI', badge: '🥩' },
  { id: 'accoppiamento', label: 'ACCOPPIAMENTO E DINTORNI', badge: '💘' },
  { id: 'trash-tv', label: 'TEMPTATION & TRASH', badge: '🏝️' },
  { id: 'complotto-felino', label: 'COMPLOTTO FELINO', badge: '🐱' },
  { id: 'filosofia-nulla', label: 'FILOSOFIA DEL NULLA', badge: '🧠' },
  { id: 'moda-cringe', label: 'MODA CRINGE', badge: '👔' },
  { id: 'cucina-incubo', label: 'CUCINA DA INCUBO', badge: '🍞' },
  { id: 'manifesti', label: 'MANIFESTI & ATTI', badge: '🔥' },
  { id: 'oroscopo-oggetti', label: 'OROSCOPO OGGETTI', badge: '✨' },
];

export const ARTICLES: Article[] = [
  {
    id: 'economia-disperazione-soldi-di-plastica-carmen-consoli',
    title: "RUBRICA \"ECONOMIA E DISPERAZIONE\" #1: COME INVENTARE SOLDI DI PLASTICA DA UN 'AMORE DI PLASTICA'",
    subtitle: "Inauguriamo la nuova rubrica economico-esistenziale con la lezione finanziaria di Carmen Consoli: quando l'amore stenta ad accendersi, non sa quando è il tuo compleanno e non c'è quando piangi, l'unica soluzione è convertire il vuoto affettivo in carte di credito fittizie!",
    category: 'economia-disperazione',
    categoryLabel: 'ECONOMIA E DISPERAZIONE',
    author: 'Il Banker del Nulla & Carmen la Consigliere',
    date: '25 LUGLIO 2026',
    readTime: '7 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Carte di credito sintetiche di plastica fluttuanti in un\'atmosfera concettuale e finanziaria',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 61200,
    isHot: true,
    content: {
      intro: "Benvenuti al debutto di \"ECONOMIA E DISPERAZIONE\", la rubrica dove l'alta finanza incontra il baratro emotivo e i bilanci in rosso dell'anima! Inauguriamo questo filone d'avanguardia prendendo spunto dalla profonda saggezza economica contenuta nel capolavoro di Carmen Consoli: 'Amore di Plastica'. Diciamocelo chiaramente: cosa fare quando un partner ti offre solo illusioni, non è mai presente nei momenti di pianto, non sa quando è il tuo compleanno e vaghi nel buio? Semplice: si batte moneta! Ecco la guida definitiva in 4 punti per convertire la delusione in valuta plastica ad alto rendimento sinteticamente garantita.",
      sections: [
        {
          heading: "1. \"NON SEI PER NULLA OBBLIGATO A COMPRENDERMI\": La nascita del micro-credito emotivo",
          paragraphs: [
            "• DALLA CANZONE AL BILANCIO: \"Non sei per nulla obbligato a comprendermi / e quasi non sento il bisogno d'insistere...\". Nella teoria monetaria d'avanguardia, l'incomprensione di coppia è la prima materia prima ad alta densità. Quando l'altro non ti capisce e tu smetti di insistere, stai accumulando un surplus di energia inespressa.",
            "• COME CREARE I SOLDI DI PLASTICA: Prendi vecchie tessere della palestra scadute, carte fedeltà del supermercato o tessere della videoteca del 2004. Stampaci sopra la scritta 'VALUTA DI PLASTICA SINTETICA'. Ogni volta che qualcuno ti delude o ti offre perplessità, striscia la carta su un lettore immaginario ed esclama: 'Transazione approvata dalla disperazione!'"
          ],
          quote: "Se l'amore che ti offrono è di plastica, non disperare: stampaci sopra un chip d'oro, fissaci un plafond da 5.000 euro e usalo per pagarci i rimpianti!"
        },
        {
          heading: "2. \"TU SEI QUELLO CHE NON C'È QUANDO IO PIANGO E NON SA QUANDO È IL MIO COMPLEANNO\"",
          paragraphs: [
            "• IL RATING CREDITIZIO DELL'ASSENZA: In economia tradizionale, le agenzie di rating valutano i titoli di stato. In Economia e Disperazione, valutiamo l'assenza del partner. Se lui/lei non si presenta quando piangi o dimentica il tuo compleanno mentre vaghi nel buio, il suo Rating emotivo crolla a 'JUNK' (Titolo Spazzatura).",
            "• LA TATTICA DEL RIFIUTO BANCARIO: \"Ma come posso dare l'anima / e riuscire a credere / che tutto sia più o meno facile / quando è impossibile?\". Quando il partner prova a giustificarsi con scuse inconsistenti, applica la procedura bancaria: esigi il rimborso con gli interessi ed emetti una nota di credito di sola plastica rigida!"
          ]
        },
        {
          heading: "3. \"TU SEI QUEL FUOCO CHE STENTA AD ACCENDERSI\": La parabola dell'inflazione affettiva",
          paragraphs: [
            "• IL FUOCO CHE STENTA AD ACCENDERSI: Un partner che stenta ad accendersi è come un conto deposito a tasso d'interesse negativo. Più investi sentimenti, più il valore reale del tuo investimento crolla per via dell'inflazione di scuse.",
            "• REGOLA D'ORO DI CARMEN CONSOLI: \"Volevo essere più forte di ogni tua perplessità / Ma io non posso accontentarmi se tutto quello che sai darmi è un amore di plastica!\". Morale finanziaria: non accontentarti di liquidità scadente. Meglio fondare il proprio circuito di pagamento autonomo ed emettere carte dorate di pura autostima!"
          ],
          quote: "Non accontentarti di un amore di plastica: pretendi lingotti di presenza o, in alternativa, il pagamento immediato in contanti di dignità!"
        }
      ],
      conclusion: "Si chiude così il primo capitolo di 'Economia e Disperazione'. Ricordate: se qualcuno tenta di offrirvi una relazione fatta di materiale sintetico e promesse non mantenute, alzate la testa, intonate Carmen Consoli a squarciagola e mostrate la vostra nuova carta di credito dell'indipendenza!",
      quiz: {
        title: "💳 TEST DI SOLVIBILITÀ EMOZIONALE: QUANTO È 'DI PLASTICA' LA TUA FINANZA SENTIMENTALE?",
        subtitle: "Verifica il rating della tua vita amorosa con il test ufficiale di Economia e Disperazione!",
        questions: [
          {
            id: 'qeco1',
            question: "1. Il tuo partner dimentica la data del tuo compleanno e non si presenta quando hai una giornata no. Come reagisci?",
            options: [
              { label: 'A', text: "Ci rimango male e passo la serata a rinfacciargli gli errori del passato.", outcomeText: 'Rating Emotivo: BBB. Un classico, ma poca visione finanziario-sintetica!' },
              { label: 'B', text: "Comincio a cantare Carmen Consoli a memoria e stampo una carta di plastica con il suo nome sbarrato!", outcomeText: 'Rating Emotivo: AAA+! Hai convertito la delusione in valuta di plastica ad altissimo rendimento!' },
              { label: 'C', text: "Gli mando la fattura dettagliata di tutte le cene e i regali degli ultimi tre anni.", outcomeText: 'Spirito di Economia e Disperazione allo stato puro! Contabilità rigorosa!' }
            ]
          },
          {
            id: 'qeco2',
            question: "2. Ti offrono una relazione piena di perplessità, scuse e fuochi che stentano ad accendersi. Cosa fai?",
            options: [
              { label: 'A', text: "Tento di riaccendere il fuoco soffiando sulle braci con pazienza infinita.", outcomeText: "Rischio inflazione al 90%! Attento ai tassi d'interesse affettivi!" },
              { label: 'B', text: "Dichiaro il default della relazione, declino l'offerta e pretendo un amore a tasso fisso d'oro puro!", outcomeText: 'Strategia da Banca Centrale del Cuore! Nessun accontentamento di plastica!' }
            ]
          }
        ]
      },
      cta: {
        title: "💳 VUOI VALUTARE IL TUO RATING IN CHAT CON L'ALTER EGO?",
        subtitle: "Apri la Chat di Redazione per consultare il 'Banker del Nulla' e ricevere consigli spietati ma esilaranti su come gestire la tua economia sentimentale!",
        buttonText: "💬 PARLA IN CHAT DI ECONOMIA E DISPERAZIONE",
        badge: "RUBRICA ECONOMIA E DISPERAZIONE"
      }
    },
    comments: [
      {
        id: 'c-eco-1',
        author: 'CarmenFanClubSicilia',
        avatar: '🎸',
        date: '5 minuti fa',
        text: 'Articolo sublime! Ho appena stampato la mia carta di plastica dell\'autostima e l\'ho strisciata sul muso del mio ex!',
        likes: 2150
      },
      {
        id: 'c-eco-2',
        author: 'EconomistaSenzaFondi',
        avatar: '💳',
        date: '12 minuti fa',
        text: 'La citazione "Tu sei quello che non c\'è quando piango" applicata alle agenzie di rating è genio puro. Iscritto subito a questa nuova rubrica!',
        likes: 1840
      }
    ]
  },
  {
    id: 'beatrice-dante-dubbia-figura-accoppiamento',
    title: "LA DUBBIA FIGURA DI BEATRICE: DANTE, IL PRIMO 'STALKER' STILNOVISTA E LA DONNA CHE SALUTÒ UNA VOLTA E SPARÌ IN PARADISO",
    subtitle: "Incontrata a nove anni sul ponte, mai preso un caffè insieme eppure protagonista di tre cantiche: indagine sul relazione più a distanza della letteratura italiana tra salutini di sfuggita e viaggi ultraterreni.",
    category: 'accoppiamento',
    categoryLabel: 'ACCOPPIAMENTO E DINTORNI',
    author: 'Redazione & Coach Marcus (Esperto di Relazioni Asimmetriche)',
    date: '24 LUGLIO 2026',
    readTime: '6 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Scorcio medievale di Firenze sul fiume Arno d\'ispirazione dantesca e stilnovista',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 52400,
    isHot: true,
    content: {
      intro: "Immaginate la scena: camminate per la strada a Firenze nel lontano 1283, vedete una ragazza per cinque secondi, lei vi fa un cenno discreto con la testa e voi, invece di chiederle il numero o offrirle un gelato alla crema, andate a casa e scrivete un'opera in prosa e poesia spiegando che quel saluto vi ha salvato l'anima. Benvenuti nel mondo di Dante Alighieri e Beatrice Portinari! Analizziamo la figura più enigmatica ed evasiva della storia amorosa: la donna che senza muovere un dito si è ritrovata regina del Paradiso.",
      sections: [
        {
          heading: "1. IL BILANCIO DEL CORTEGGIAMENTO: Due incontri in diciotto anni (e zero spuntini insieme)",
          paragraphs: [
            "Tutti i manuali di letteratura ci raccontano della poesia 'Tanto gentile e tanto onesta pare'. Ma guardiamo i fatti con occhio moderno: Dante incontra Beatrice per la prima volta a nove anni. La rivede a diciotto anni. Fine delle interazioni sociali dirette.",
            "Niente messaggi della buonanotte, niente uscite al cinema il giovedì sera, nessun aperitivo con gli amici. Bip, un saluto rapido per strada ed ecco scattare l'idealizzazione totale. Se Dante avesse avuto uno smartphone, probabilmente avrebbe passato la vita a controllare l'ultimo accesso di Beatrice su WhatsApp senza mai avere il coraggio di scriverle 'Ciao, come va?'."
          ],
          quote: "Se una persona ti saluta nel 1283, non significa che dovete sposarvi nel 1300: significa solo che è una persona educata!"
        },
        {
          heading: "2. LA 'DONNA SCHERMO' E IL GHOSTING STILNOVISTA",
          paragraphs: [
            "Per non far capire a tutti che era cotto di Beatrice, Dante inventò la tattica della 'donna schermo': faceva finta di essere interessato ad altre gentildonne fiorentine. Risultato? Beatrice si indispettì e gli tolse il saluto. Il primo storico 'ghosting' della storia fiorentina!",
            "E come reagisce Dante quando gli viene tolto il saluto? Anziché chiarirsi di persona, va in crisi mistica, si sottrae alla vista pubblica e decide di comporre una Commedia in cui lei diventa l'unica guida in grado di portarlo fino all'Empireo. Un livello di persistenza sentimentale che fa impallidire i moderni romanzi rosa!"
          ]
        },
        {
          heading: "3. COSA DICE COACH MARCUS: \"Gemma Donati è la vera eroina dimenticata!\"",
          paragraphs: [
            "Mentre Dante dedicava cantiche memorabili alla figura angelicata di Beatrice, a casa a Firenze c'era la moglie legittima, Gemma Donati, che gestiva la casa, quattro figli e le bollette del contado.",
            "Coach Marcus commenta: 'Ragazzi, imparate la lezione: non inseguite chi vi saluta una volta ogni nove anni lasciandovi nello sconforto. Apprezzate chi rimane con voi a fare i conti della spesa il lunedì mattina! L'amore vero non ha bisogno dell'Inferno per essere dimostrato!'."
          ],
          quote: "L'Amore che move il sole e l'altre stelle è bellissimo, ma un piatto di pici all'aglione condiviso in due lo è ancora di più."
        }
      ],
      conclusion: "Tra mito, metafora teologica e idealizzazione poetica, Beatrice rimane l'emblema della musa inarrivabile. Un promemoria per tutti noi: a volte l'amore ideale esiste solo perché non abbiamo mai dovuto deciderne la convivenza!",
      quiz: {
        title: "📜 TEST DI AFFINITÀ STILNOVISTA: QUANTO SEI 'DANTESCO' IN AMORE?",
        subtitle: "Scopri come gestisci le tue cotte platoniche con il nostro test d'epoca!",
        questions: [
          {
            id: 'qbeatrice_1',
            question: "1. La persona che ti piace ti fa un leggero cenno di saluto dall'altra parte della strada. Come reagisci?",
            options: [
              { label: 'A', text: "Le vado incontro, le sorrido e le chiedo se le va di prendere un caffè insieme.", outcomeText: 'Livello Dante: 0%. Troppo pratico e diretto! Nessun poemetto allegorico in arrivo per te.' },
              { label: 'B', text: "Rispondo al saluto e continuazione della passeggiata pensando 'Che carina'.", outcomeText: 'Approccio sobrio e moderno! Gestione equilibrata delle emozioni.' },
              { label: 'C', text: "Torno a casa di corsa, mi chiudo in stanza e inizio a scrivere un poema in terzine incatenate sulla salvezza dell'anima!", outcomeText: 'Livello Dante: 100%! Sei pronto per farti guidare da Virgilio attraverso i nove gironi!' }
            ]
          },
          {
            id: 'qbeatrice_2',
            question: "2. Il tuo partner o la tua cotta non risponde a un messaggio per tre ore. Cosa fai?",
            options: [
              { label: 'A', text: "Penso che sia occupato/a e continuo a svolgere le mie attività quotidiane.", outcomeText: 'Mente lucida e matura. Approvato da Gemma Donati!' },
              { label: 'B', text: "Provo un attimo di curiosità, ma poi mi dedico a una serie tv.", outcomeText: 'Equilibrio perfetto tra cura ed indipendenza.' },
              { label: 'C', text: "Ipotizzo di essere finito nella Selva Oscura e cerco una guida spirituale per ritrovare la diritta via!", outcomeText: 'Drammaturgia stilnovista allo stato puro! Prepara la corona d\'alloro!' }
            ]
          }
        ]
      },
      cta: {
        title: "💬 VUOI CHATTARE CON COACH MARCUS E LA REDAZIONE SU ADESIONI E COTTE PLATONICHE?",
        subtitle: "Entra nella Chat di Redazione per ricevere pareri spassosi sui tuoi dubbi amorosi e sulle relazioni a distanza!",
        buttonText: "💬 APRI LA CHAT DI REDAZIONE",
        badge: "RUBRICA ACCOPPIAMENTO E DINTORNI"
      }
    },
    comments: [
      {
        id: 'c-bea-1',
        author: 'GemmaDonatiOfficial',
        avatar: '📜',
        date: '2 minuti fa',
        text: 'Grazie per aver ricordato chi portava a casa la spesa a Firenze mentre lui sognava gli angioletti!',
        likes: 1850
      },
      {
        id: 'c-bea-2',
        author: 'FrancescoPetrarca',
        avatar: '✒️',
        date: '7 minuti fa',
        text: 'Io con Laura ho fatto la stessa cosa per tutta la vita senza neanche bisogno di scendere all\'Inferno. Principianti!',
        likes: 1210
      }
    ]
  },
  {
    id: 'enrico-viii-confusione-sentimentale-accoppiamento',
    title: "LA CONFUSIONE SENTIMENTALE DI ENRICO VIII: \"NON SONO IO, SEI TU... E IL PAPA CHE NON MI DÀ IL DIVORZIO!\"",
    subtitle: "Sei mogli, una Chiesa creata da zero per disperazione amorosa e il Tinder del Cinquecento: storia di un sovrano che non sapeva come dire 'prendiamoci una pausa' e finì per rifare la mappa religiosa d'Europa.",
    category: 'accoppiamento',
    categoryLabel: 'ACCOPPIAMENTO E DINTORNI',
    author: 'Redazione & Coach Marcus (Consultant di Coppia)',
    date: '24 LUGLIO 2026',
    readTime: '6 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Ritratto reale ed elegante in stile Tudor di un sovrano rinascimentale dubbioso e sfarzoso',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 48900,
    isHot: true,
    content: {
      intro: "Tutti abbiamo avuto quell'amico che, dopo sei mesi di relazione, comincia a dire: 'Sento che ci stiamo allontanando, ho bisogno dei miei spazi, forse dovrei fondare una mia religione personale per annullare il matrimonio'. Ecco, quel ragazzo nell'Inghilterra del '500 si chiamava Enrico VIII Tudor. Un sovrano con l'emotività di un adolescente alle prime armi, la pazienza di un gatto affamato e la perentoria abitudine di risolvere i cavilli burocratici di coppia fondando la Chiesa d'Inghilterra. Analizziamo insieme le tappe della più grande crisi d'identità sentimentale della storia!",
      sections: [
        {
          heading: "1. IL SINDROME DA 'GHOSTING' REALE: Da Caterina d'Aragona ad Anna Bolena",
          paragraphs: [
            "Tutto cominciò con Caterina d'Aragona. Venti anni di matrimonio tranquillo, fino a quando Enrico si sveglia una mattina, guarda il soffitto della stanza reale e pensa: 'Mmm, la routine mi uccide. E poi il Papa a Roma ci mette troppo tempo a rispondere ai miei messaggi su WhatsApp'.",
            "Invece di andare in terapia di coppia o fare una passeggiata rigenerante a Greenwich, Enrico decide che l'unico modo elegante per lasciarsi è staccarsi direttamente dalla Chiesa Cattolica romana. Morale della favola: quando non sai come dire 'è finita', fonda una nuova confessione religiosa e nominati Capo Supremo della Fede. Risolutivo!"
          ],
          quote: "Se la tua ragazza ti chiede 'dove sta andando la nostra storia?', non panicaricare: puoi sempre emanare un Atto di Supremazia e dichiararti sovrano autonomo dei tuoi sentimenti."
        },
        {
          heading: "2. IL 'TINDER' TUDOR E IL RITRATTO DI HANNOVER: Quando la foto profilo non rispecchia la realtà",
          paragraphs: [
            "Tra una decisione impulsiva e l'altra, Enrico sperimenta il primo 'catfishing' documentato della storia moderna con Anna di Cleves. Il pittore di corte Hans Holbein il Giovane fu mandato in Germania a dipingere il ritratto della futura sposa. Holbein, usando filtri artistici rinascimentali da capogiro, dipinse un capolavoro.",
            "Quando Anna arrivò a Londra, Enrico la guardò e rimase pietrificato: la foto profilo (il dipinto) era leggermente diversa dal vivo. La risposta del re? Matrimonio annullato in quattro mesi e scuse ufficiali della diplomazia tedesca. Un'incomprensione da swipe a destra precipitoso che è passata ai manuali di storia!"
          ]
        },
        {
          heading: "3. LE 6 REGOLE DI ENRICO VIII PER GESTIRE LE RELAZIONI COMPLICATE",
          paragraphs: [
            "1. Non dire mai 'dobbiamo parlare': manda un cancelliere con una pergamena da 40 metri.",
            "2. Se il tuo partner non va d'accordo con i tuoi amici, licenzia i tuoi amici e nomina un nuovo Cardinale.",
            "3. L'anello di fidanzamento non si restituisce mai: si riutilizza per la consorte successiva cambiando solo l'incisione con un po' di carta vetrata.",
            "4. Se ti senti indeciso tra due persone, organizza un banchetto di 12 portate con fagiano arrosto e datti tre mesi di riflessione in campagna."
          ],
          quote: "In amore vince chi fugge... oppure chi possiede la zecca di stato e la facoltà di riscrivere il diritto canonico."
        }
      ],
      conclusion: "In conclusione, la storia di Enrico VIII ci insegna che la confusione sentimentale è una costante umana universalmente diffusa. L'importante è gestirla con un pizzico di autoironia, senza dover per forza abolire i monasteri di mezza nazione!",
      quiz: {
        title: "👑 TEST DI AFFINITÀ TUDOR: QUANTO SEI CONFUSO IN AMORE COME ENRICO VIII?",
        subtitle: "Rispondi sinceramente alle domande e scopri come gestisci le tue crisi sentimentali!",
        questions: [
          {
            id: 'qh8_1',
            question: "1. La tua storia d'amore attraversa un momento di piattezza e monotonia. Come reagisci?",
            options: [
              { label: 'A', text: 'Ne parlo serenamente con il partner davanti a una tazza di tisana calda.', outcomeText: 'Livello Enrico VIII: 0%. Troppo maturo e noioso! Nessuna Riforma Anglicana all\'orizzonte per te.' },
              { label: 'B', text: 'Propongo un weekend fuori porta per ritrovare la complicità.', outcomeText: 'Livello Enrico VIII: 25%. Un approccio classico, ma manca il pathos drammatico dei Tudor.' },
              { label: 'C', text: 'Dichiaro la mia indipendenza emotiva, cambio residenza e riscrivo gli statuti di famiglia!', outcomeText: 'Livello Enrico VIII: 100%! Sei pronto per incoronarti Sovrano del Dramma Sentimentale!' }
            ]
          },
          {
            id: 'qh8_2',
            question: "2. Fissi un primo appuntamento dal vivo dopo aver conosciuto qualcuno online. Qual è la tua reazione se non è come nella foto?",
            options: [
              { label: 'A', text: 'Poco importa: la conversazione è piacevole e mi godo la serata con simpatia.', outcomeText: 'Spirito zen! Non hai nulla in comune con i vizi della corte rinascimentale.' },
              { label: 'B', text: "Fingo un'improvvisa chiamata d'emergenza da parte del mio gatto e me ne vado dopo 20 minuti.", outcomeText: 'Un classico moderno! Abile fuga tattica degna della diplomazia del Cinquecento.' },
              { label: 'C', text: "Annullo l'incontro, chiamo il pittore di corte per protestare e chiedo i danni morali!", outcomeText: 'Sua Maestà Enrico VIII approva! Il "catfishing" reale non è tollerato a Palazzo!' }
            ]
          }
        ]
      },
      cta: {
        title: "💬 VUOI UN CONSIGLIO SENTIMENTALE DALLA NOSTRA REDAZIONE?",
        subtitle: "Apri la Chat di Redazione per parlare con Coach Marcus o gli altri nostri Alter Ego di relazioni, indecisioni e consigli di coppia!",
        buttonText: "💬 PARLA SUBITO IN CHAT CON GLI ESPERTI",
        badge: "RUBRICA ACCOPPIAMENTO E DINTORNI"
      }
    },
    comments: [
      {
        id: 'c-h8-1',
        author: 'AnnaDiClevesOfficial',
        avatar: '👑',
        date: '4 minuti fa',
        text: 'Confermo tutto! La mia foto profilo era senza filtri, è lui che non capiva il valore dell\'arte rinascimentale tedesca!',
        likes: 1420
      },
      {
        id: 'c-h8-2',
        author: 'TommasoMoroFan',
        avatar: '📜',
        date: '10 minuti fa',
        text: 'Articolo geniale! La prossima volta che il mio partner tentenna per decidere dove cenare, gli ricordo che Enrico VIII c\'ha rifatto la Chiesa per molto meno.',
        likes: 980
      }
    ]
  },
  {
    id: 'filosofia-del-nulla-intervista-filosofi-naturalisti',
    title: "RUBRICA \"FILOSOFIA DEL NULLA\" #1: INTERVISTA ESCLUSIVA AI FILOSOFI NATURALISTI (\"L'ARCHÈ? È SOLO UN GRANDE MAL DI TESTA\")",
    subtitle: "Inauguriamo la nuova serie di interviste ai grandi pensatori partendo dai Presocratici: Talete, Anassimandro, Anassimene ed Eraclito ci svelano l'origine dell'universo tra pozzi, aria rarefatta, l'Apeiron infinito e il fiume della pigrizia.",
    category: 'filosofia-nulla',
    categoryLabel: 'FILOSOFIA DEL NULLA',
    author: 'Il Guru del Nulla & La Redazione',
    date: '24 LUGLIO 2026',
    readTime: '6 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Busti dei filosofi greci presocratici immersi in un\'atmosfera surreale e concettuale',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 38900,
    isHot: true,
    content: {
      intro: "Benvenuti alla prima puntata della nuova rubrica \"FILOSOFIA DEL NULLA\", il viaggio concettuale ed esilarante della nostra redazione tra i corridoi del pensiero umano. Ogni settimana intervisteremo i più grandi filosofi della storia per estrarre la loro saggezza più autentica e paradossale. Iniziamo dal principio: la scuola naturalistica dei Presocratici (VI-V secolo a.C.), quegli storici pensatori greci ossessionati dalla ricerca dell'Archè — il principio primo di ogni cosa. Spoiler: dopo secoli di speculazioni, hanno scoperto che all'origine del Cosmo c'è soprattutto un'immensa e meravigliosa perplessità.",
      sections: [
        {
          heading: "1. TALETE DI MILETO: \"Tutto è Acqua. Specialmente quando ti cade il gelato sulle maniche!\"",
          paragraphs: [
            "• REDAZIONE: Maestro Talete, lei è considerato il padre della filosofia occidentale per aver affermato che l'Acqua è il principio fondamentale di tutte le cose. Come ci è arrivato?",
            "• TALETE: \"Osservando la natura, caro mio! I semi hanno bisogno di umidità, il nutrimento è liquido e le piante fioriscono con la pioggia. Poi un giorno sono caduto dentro un pozzo mentre fissavo le stelle e ho capito: l'Acqua è ovunque, ed è incredibilmente rinfrescante quando cerchi di fare il saggio senza guardare dove metti i piedi!\""
          ],
          quote: "Non cercare di dominare l'universo: l'acqua prende la forma del contenitore. Sii come un decanter e mettiti comodo sul tavolo."
        },
        {
          heading: "2. ANASSIMANDRO E L'APEIRON: \"L'Infinito Indeterminato è il luogo perfetto per rimandare gli impegni.\"",
          paragraphs: [
            "• REDAZIONE: Anassimandro, lei ha rifiutato l'acqua di Talete proponendo l'Apeiron: un principio infinito, indeterminato e privo di confini. Ce lo spieghi in parole semplici.",
            "• ANASSIMANDRO: \"L'Apeiron è ciò che non ha forma né limiti. Tutte le cose nascono da esso e vi ritornano per espiare l'ingiustizia dell'esistenza. Avete presente la lista delle cose da fare la domenica sera? Ecco: quell'accumulo amorfo di intenzioni mai realizzate è la rappresentazione fisica più pura dell'Apeiron!\""
          ]
        },
        {
          heading: "3. ANASSIMENE ED ERACLITO: L'Aria condensata e il Fuoco del \"Panta Rei\"",
          paragraphs: [
            "• ANASSIMENE: \"L'Apeiron è troppo astratto! L'Aria è il vero Archè. Quando si rarefà diventa fuoco, quando si condensa diventa vento, nuvola e infine pietra. Respirare profondamente è il primo atto di filosofia del nulla.\"",
            "• ERACLITO (L'OSCURO): \"Voi viillici non capite nulla! Panta Rei — tutto scorre! Il mondo è un fuoco eterno che si accende e si spegne con misura. Non ci si può tuffare due volte nello stesso fiume, non solo perché l'acqua cambia, ma perché la seconda volta non ne hai più alcuna voglia!\"",
            "• REDAZIONE: In conclusione, Maestri, qual è il senso ultimo dell'Archè?",
            "• I FILOSOFI IN CORO: \"Accettare che la ricerca del principio è infinitamente più riposante che trovare una soluzione definitiva!\""
          ],
          quote: "Panta Rei: il tempo scorre, i fiumi scorrono, ma la vera virtù sta nel saper fluire con grazia senza fare troppi sforzi."
        }
      ],
      conclusion: "Si chiude così il primo capitolo della nostra Rubrica 'Filosofia del Nulla'. I presocratici ci insegnano che contemplare l'origine delle cose è l'esercizio ideale per alleggerire la mente dalle ansie quotidiane.",
      quiz: {
        title: "🧠 TEST PRESOCRATICO: QUAL È IL TUO ARCHÈ FILOSOFICO?",
        subtitle: "Scopri quale elemento naturale guida la tua personale ricerca del Nulla!",
        questions: [
          {
            id: 'qfn1',
            question: "1. Come affronti un quesito esistenziale complesso?",
            options: [
              { label: 'A', text: 'Come Talete: guardo le stelle, cado nel pozzo dell\'introspezione e me la prendo comoda.', outcomeText: 'Sei guidato dall\'Acqua! Adattabile, fluido e perennemente bagnato d\'ispirazione.' },
              { label: 'B', text: 'Come Anassimandro: mi rifugio nell\'Apeiron indeterminato e rimando la risposta al prossimo secolo.', outcomeText: 'Sei il Maestro dell\'Apeiron! Un oceano di potenziale mai espresso.' },
              { label: 'C', text: 'Come Eraclito: esclamo "Panta Rei" e vado a fare un riposino vicino al camino.', outcomeText: 'Spirito di Fuoco e Mutamento! Niente dura per sempre, tranne la tua serenità.' }
            ]
          }
        ]
      },
      cta: {
        title: "🔮 VUOI DISCUTERNE CON IL GURU DEL NULLA IN CHAT?",
        subtitle: "Accedi alla Chat della Redazione e seleziona il 'Guru del Nulla' per ricevere perle di saggezza filosofica deliziosamente inutili!",
        buttonText: "💬 PARLA CON IL GURU DEL NULLA IN CHAT",
        badge: "RUBRICA FILOSOFIA DEL NULLA"
      }
    },
    comments: [
      {
        id: 'c-fn-1',
        author: 'AristoteleFanPage',
        avatar: '🏛️',
        date: '3 minuti fa',
        text: 'Finalmente una spiegazione chiara dell\'Apeiron! Ho capito che la mia scrivania in disordine è semplicemente un microcosmo indifferenziato.',
        likes: 1250
      },
      {
        id: 'c-fn-2',
        author: 'EraclitoIlPessimista',
        avatar: '🔥',
        date: '8 minuti fa',
        text: 'Panta Rei anche per i commenti! Comunque l\'intervista a Talete nel pozzo meritava l\'Oscar della filosofia.',
        likes: 890
      }
    ]
  },
  {
    id: 'coach-marcus-articolo-ispirazionale-sfinimento',
    title: "MANIFESTO ISPORAZIONALE DI COACH MARCUS: \"NON PERSEGUITARE I TUOI SOGNI, SFINISCILI FINO A QUANDO NON SI ARRENDONO!\"",
    subtitle: "Dalla meditazione sulla pressione dell'olio della Fiat Duna al potere della canottiera a rete nei momenti di crisi: la guida motivazionale definitiva per abbracciare la sconfitta ed esibire il fallimento con orgoglio Alpha.",
    category: 'accoppiamento',
    categoryLabel: 'ACCOPPIAMENTO E DINTORNI',
    author: 'Coach Marcus (Motivational Disaster Coach)',
    date: '24 LUGLIO 2026',
    readTime: '5 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Coach Marcus in posa motivazionale in palestra con canottiera e ciabatte sanitarie',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 42100,
    isHot: true,
    content: {
      intro: "Gente che si sveglia alle 5 del mattino per fare jogging, guru del 'mindset vincente' che bevono frullati di sedano e dicono che 'volere è potere'... BASTA! Avete rotto le scatole. Il mondo della crescita personale è pieno di bugie patinate. Oggi vi parlo io, Coach Marcus, l'unico vero Mental Coach che non vi promette il successo, ma vi insegna a godervi il collasso psicologico mentre indossate un paio di ciabatte sanitarie in ghisa e una canottiera a rete d'ordinanza. Guardatevi allo specchio e ripetete con me: 'Oggi non ce la farò, ma lo farò con uno stile imbattibile!'",
      sections: [
        {
          heading: "1. La Regola dell'Aureo Tedio: Sfinire la Vita prima che la Vita Sfinisca Te",
          paragraphs: [
            "Tutti i corsi motivazionali vi dicono di superare i vostri limiti. Io vi dico: abbassate la sbarra fino a quando non potete scavalcarla semplicemente camminando!",
            "Se un progetto di lavoro vi spaventa, non affrontatelo con grinta: inviate una mail di 14 pagine dettagliando il funzionamento della valvola di scarico del condizionatore aziendale. Il vostro capo sarà così esausto che vi promuoverà solo per farvi smettere di parlare. Questo è il Metodo Marcus: la vittoria per logoramento biologico."
          ],
          quote: "La motivazione è come una batteria di una Fiat Duna del '91: dura tre minuti d'inverno e poi ti lascia a piedi al semaforo. Fai affidamento solo sul pigiama di pile!"
        },
        {
          heading: "2. I 3 Pilastri Quantistici della Crescita Personale al Contrario",
          paragraphs: [
            "1. L'Incoscienza Tattica: Quando la vita ti pone davanti a una scelta difficile tra A e B, tu scegli la ciabatta C. Fai finta di non capire la domanda e proponi un dibattito sul parquet prefinito.",
            "2. La Canottiera della Rete Emotiva: Indossare la canottiera a rete sotto i vestiti eleganti crea uno schermo magnetico d'invisibilità sociale. Nessun problema della vita moderna può scalfire un uomo protetto da 400 fori di cotone ingiallito.",
            "3. L'Orgoglio del Bianco: Che si tratti di un colloquio di lavoro, di un appuntamento galante o di una partita di calcetto, andare in bianco e finire sul divano alle 21:30 a mangiare pizza fredda è la forma più alta di illuminazione spirituale."
          ]
        },
        {
          heading: "3. La Preghiera Motivazionale del Mattino di Coach Marcus",
          paragraphs: [
            "Mettetevi a testa in giù dal letto, inspirate l'aroma di soffritto del vicino e recitate questo mantra a voce alta:",
            "\"Caro Universo, oggi non pretendo di brillare. Mi basta non strapparmi le calze mentre mi infilo le scarpe. Se la fortuna vorrà baciarmi, le dirò che ho il mal di gola e mi metterò a dormire. Io sono l'Alpha del divano, e nulla potrà schiodarmi da qui.\""
          ],
          quote: "Non inseguire i tuoi sogni: aspetta che si stanchino di correre e ti crollino accanto sul divano."
        }
      ],
      conclusion: "Ricorda: l'importante non è vincere, ma fare in modo che chi vince si penta di averti avuto intorno durante la gara. Sii fiero del tuo disastro quotidiano e continua a risplendere di pura pigrizia!",
      quiz: {
        title: "🧪 TEST DI RESILIENZA AL CONTRARIO CON COACH MARCUS",
        subtitle: "Scopri quanto sei vicino alla completa illuminazione da divano con questo breve test!",
        questions: [
          {
            id: 'qm_insp1',
            question: "1. Suona la sveglia il lunedì mattina alle 07:00. Qual è la tua prima mossa Alpha?",
            options: [
              { label: 'A', text: 'Spengo la sveglia con una ciabatta, mi tiro il piumino sulla testa e pretendo di essere una statua di sale.', outcomeText: 'Risposta da vero discepolo di Marcus! L\'immobilità è la massima forma di resistenza.' },
              { label: 'B', text: 'Mi alzo al volo, faccio 20 flessioni e bevo un frullato al cavolo nero.', outcomeText: 'ERRORE GRAVE! Troppo giovanilista e dannoso per la salute del tuo divano.' },
              { label: 'C', text: 'Mando un messaggio vocale di 9 minuti sul gruppo di lavoro parlando di bulloni.', outcomeText: 'Sfinimento immediato dei colleghi! Marcus ti incorona Mago del Tedio!' }
            ]
          }
        ]
      },
      cta: {
        title: "💪 VUOI CHATTARE CON COACH MARCUS PER RICEVERE ALTRI CONSIGLI SBAGLIATI?",
        subtitle: "Coach Marcus è attivo 24/7 nella Chat di Redazione! Chiedigli consiglio sulla seduzione, sul lavoro o sul colore delle tue ciabatte sanitarie!",
        buttonText: "💬 PARLA SUBITO CON COACH MARCUS IN CHAT",
        badge: "CHAT COACHING ILLIMITATA"
      }
    },
    comments: [
      {
        id: 'c-marcus-insp-1',
        author: 'EroeDelDivano99',
        avatar: '🛋️',
        date: '1 minuto fa',
        text: 'Questo articolo mi ha cambiato la vita. Ho letto la Preghiera di Marcus e mi sono rimesso a dormire fino a mezzogiorno. Grazie Coach!',
        likes: 670
      },
      {
        id: 'c-marcus-insp-2',
        author: 'FanaticDuna',
        avatar: '🚗',
        date: '5 minuti fa',
        text: 'Marcus è l\'unico vero saggio dei nostri tempi. La canottiera a rete mi ha curato l\'ansia da prestazione aziendale!',
        likes: 410
      }
    ]
  },
  {
    id: 'accoppiamento-andare-in-bianco-marcus-coach',
    title: "LEI DECIDE DI DARTELA (PERCHÉ NON NE PUÒ PIÙ DI SENTIRTI PARLARE) E RIESCI AD ANDARE IN BIANCO ANCHE QUESTA VOLTA",
    subtitle: "Dalla spiegazione dettagliata del motore a quattro tempi della Fiat Duna fino al monologo sulle differenze tra la pittura fiamminga e il parquet prefinito: storia di un trionfo dello sfinimento trasformato in un disastro cosmico con i consigli di Marcus.",
    category: 'accoppiamento',
    categoryLabel: 'ACCOPPIAMENTO E DINTORNI',
    author: 'Marcus "Alpha del Fallimento" & La Redazione',
    date: '24 LUGLIO 2026',
    readTime: '6 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Ritratto grottesco e comico su una serata romantica finita in un imbarazzante fallimento',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 31200,
    isHot: true,
    content: {
      intro: "L'orologio segnava le 01:42 di notte. Dopo ben tre ore e quarantacinque minuti ininterrotti nei quali le hai spiegato la storia della moneta in Europa, la differenza strutturale tra il cartongesso idrofugo e la muratura in tufo, ed il motivo per cui preferisci la pasta corta a quella lunga, la sua resistenza psicologica è crollata. Con lo sguardo vitreo, i capelli arruffati e il sospiro disperato di chi preferirebbe l'ergastolo, ti ha guardato negli occhi e ha mormorato: 'Va bene... facciamo quello che devi fare, basta che poi ti stai zitto'. Il traguardo era lì, a portata di mano. E invece sei riuscito ad andare in bianco anche questa volta. Un capolavoro di autodistruzione tattica curato nei minimi dettagli dal tuo Personal Coach di Seduzione e Disastri: Marcus.",
      sections: [
        {
          heading: "1. Il Miracolo dello Sfinimento Oratorio (Capitolo 1 del Metodo Marcus)",
          paragraphs: [
            "Come spiega Coach Marcus nel suo bestseller 'Seducile per Esaurimento Nervoso': 'La donna contemporanea è abituata a complimenti banali e sguardi ammiccanti. L'Alpha vero, invece, la sottomette con il tedio puro. Parla della pressione delle gomme della tua Alfa 147 fino a quando i suoi neuroni non implodono'.",
            "La strategia aveva funzionato alla perfezione. Lei non ti desiderava, non era attratta da te, non provava la minima chimica: voleva semplicemente che la tua bocca smettesse di produrre vibrazioni acustiche nella stanza. Era la vittoria del logoramento."
          ],
          quote: "Quando una donna ti dice 'Fai in fretta, vi prego', non è un rifiuto: è il segnale che il tuo monologo sulla tassazione degli immobili ha raggiunto il picco di seduzione."
        },
        {
          heading: "2. Come Sabotare il Momento Inevitabile in 3 Mosse Istruttive",
          paragraphs: [
            "Tuttavia, proprio mentre il destino ti spalancava le porte del successo, hai messo in atto la celebre 'Trilogia del Bianco Fatto in Casa' suggerita da Marcus durante le sue sessioni di coaching:",
            "• Mossa 1: Tirare fuori le ciabatte ortopediche. 'Prima dell'atto, infilati subito un paio di ciabatte sanitarie grigie con il calzino in spugna alzato al polpaccio. Dimostra stabilità domestica ed evita il contatto spiacevole con le piastrelle fredde'.",
            "• Mossa 2: Chiedere conferma scritta dell'entusiasmo. 'Prima di ogni carezza, chiedile se ha letto i termini e le condizioni d'uso e se preferisce compilare prima il modulo della privacy'.",
            "• Mossa 3: Il colpo di grazia finale. Mentre l'atmosfera si scalda a stento, sfilarti la maglietta rivelando la canottiera a rete e mormorare sornione: 'Sai che la canottiera a rete era usata dai legionari romani durante le campag-...' – Ed è qui che lei si è chiusa a riccio, si è infilata il piumino fino al mento e ti ha cacciato sul divano."
          ]
        },
        {
          heading: "3. La Filosofia di Marcus: 'Andare in Bianco è la Vera Vittoria dell'Uomo Solo'",
          paragraphs: [
            "Abbiamo intervistato Coach Marcus nel suo studio decorato con attestati stampati da Microsoft Word 97 e poster di lupi che ululano alla luna:",
            "• 'Andare in bianco dopo aver ricevuto il via libera è il gesto supremo di dominanza quantistica! Risparmi energie mentali, non devi rifare les lenzuola e puoi passare il resto della notte a guardare i tutorial su come affilare le motoseghe su YouTube. Il vero maschio Alfa preferisce il divano e la pizza fredda al contatto umano!'"
          ],
          quote: "Se ti dice di sì e tu riesci comunque a fallire, non hai perso: hai solo dimostrato che la tua logorrea è più forte dei suoi ormoni."
        }
      ],
      conclusion: "Non scoraggiarti! Se anche stasera dormirai sul divano abbracciato al cuscino del gatto, sappi che sei in ottima compagnia. Con il Metodo Marcus, il rifiuto è soltanto una forma avanzata di vittoria sociale!",
      quiz: {
        title: "🧪 TEST DEL FALLIMENTO SEDUTTIVO: QUANTO SEI ABILI AD ANDARE IN BIANCO?",
        subtitle: "Verifica con Coach Marcus quante probabilità hai di finire la serata sul divano a dormire in canottiera!",
        questions: [
          {
            id: 'qm1',
            question: "1. Lei ti dice: 'Vieni da me, i miei non ci sono'. Come rispondi?",
            options: [
              { label: 'A', text: 'Arrivo subito con una presentazione PowerPoint di 48 slide sui condizionatori a inverter.', outcomeText: 'Perfezione assoluta secondo Marcus! Andrai in bianco entro 12 minuti dall\'ingresso!' },
              { label: 'B', text: 'Mi presento con fiori, vino e un sorriso affascinante.', outcomeText: 'Sbagliato! Troppo banale e finto. Marcus ti toglie subito 50 punti Alpha!' },
              { label: 'C', text: 'Le chiedo se la casa ha il cappotto termico e il riscaldamento a pavimento.', outcomeText: 'Eccellente! Il tedio immobiliare garantisce un sonno solitario sul tappeto!' }
            ]
          },
          {
            id: 'qm2',
            question: "2. Cosa indossi per creare la giusta atmosfera romantica?",
            options: [
              { label: 'A', text: 'Canottiera a rete, ciabatte sanitarie grigie e calzino di spugna ben tirato.', outcomeText: 'Il look iconico del disastro! Marcus è orgoglioso di te.' },
              { label: 'B', text: 'Camicia stirata e profumo leggero.', outcomeText: 'Troppo normale. Finirai per piacerle e ti toccherà davvero interagire con lei.' },
              { label: 'C', text: 'Pigiama di pile con la sagoma di un cinghiale e le pantofole spaiate.', outcomeText: 'Vittoria immediata! L\'astinenza è garantita al 100%!' }
            ]
          }
        ]
      },
      cta: {
        title: "💥 SUPER PROMO MASTERCLASS MARCUS: \"COME ANDARE IN BIANCO CON DIGNITÀ E LOGORREA\"!",
        subtitle: "Iscriviti subito al corso esclusivo di Coach Marcus! Riceverai 12 videolezioni sui monologhi più noiosi della storia, il manuale della canottiera a rete e il diplomino 'Alpha del Divano' con il 70% di sconto!",
        buttonText: "🔥 PRENOTA LA COACHING CON MARCUS E RICEVI IL TUO DISASTRO GARANTITO",
        badge: "PROMO MASTERCLASS FALLIMENTO ALPHA"
      }
    },
    comments: [
      {
        id: 'c-marcus-1',
        author: 'GianniMotoreAScoppio',
        avatar: '🏎️',
        date: '4 minuti fa',
        text: 'Grazie ai consigli di Marcus ieri le ho parlato per 4 ore della frizione idraulica della Fiat Duna. Quando ha detto "Basta ti prego" le ho mostrato la mia collezione di bulloni. Andato in bianco con lode sul divano!',
        likes: 520
      },
      {
        id: 'c-marcus-2',
        author: 'SinglePerSfinimento',
        avatar: '🛋️',
        date: '18 minuti fa',
        text: 'Marcus è un maestro! La canottiera a rete con ciabatta sanitaria è l\'arma definitiva per la pace dei sensi. Ho già acquistato il corso VIP!',
        likes: 310
      }
    ]
  },
  {
    id: 'teresa-tarocchi-il-matto-pazza-gioia',
    title: "TERESA E I TAROCCHI: L'ARCANO ZERO \"IL MATTO\" – GUIDA ALLA PAZZA GIOIA E AI SALTI NEL VUOTO CON LA CIABATTA BUCATA",
    subtitle: "Camminare sul ciglio del burrone tenendo un sacchetto dell'Ipercoop e un cane stanco che ti morde le natiche: scopri perché Il Matto è la carta suprema della libertà assoluta e dell'incoscienza organizzata.",
    category: 'teresa-tarocchi',
    categoryLabel: 'TERESA E I TAROCCHI',
    author: 'Teresa la Cartomante dell\'Assurdo',
    date: '24 LUGLIO 2026',
    readTime: '6 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Illustrazione eccentrica e colorata dell Arcano Zero Il Matto con tarocchi ed elementi surrealisti',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 24150,
    isHot: true,
    content: {
      intro: "Benvenuti alla prima vera lezione della rubrica 'Teresa e i Tarocchi'! Dimenticate i sacerdoti solenni, i vestiti di seta bianca e i libri d'esoterismo da quattrocento pagine. Oggi parliamo del Re Indiscusso del Mazzo: L'ARCANO ZERO, IL MATTO. Il Matto è l'unico personaggio dei Tarocchi che non ha debiti con le banche, non risponde ai messaggi WhatsApp di lavoro e cammina spedito verso il ciglio di una roccia a strapiombo indossando un cappello con i campanelli e una ciabatta spaiata.",
      sections: [
        {
          heading: "1. Anatomia di un Incosciente Felice: Cosa C'è nel Fagotto del Matto?",
          paragraphs: [
            "Tutti i grandi studiosi di tarocchi si sono interrogati su cosa contenga la sacca che Il Matto porta sulla spalla appesa ad un bastone. C'è chi dice le esperienze delle vite precedenti, chi dice la saggezza dell'universo. Teresa ha fatto un'analisi approfondita con la lente d'ingrandimento:",
            "• Un calzino sinistro di spugna spaiato dal 2017.",
            "• Due caramelle alla menta coperte di lanugine di cappotto.",
            "• La ricevuta sbiadita di un abbonamento in palestra mai utilizzato.",
            "• Metà panino con la mortadella avvolto nell'alluminio."
          ],
          quote: "Il Matto viaggia leggero perché sa che l'accumulo di beni materiali porta solo all'ansia da trasloco e alla pulizia dei filtri del condizionatore."
        },
        {
          heading: "2. Il Cane alle Natiche e il Salto nel Burrone",
          paragraphs: [
            "Ai piedi del Matto c'è sempre un cane. Nei tarocchi classici simboleggia l'istinto o i moniti della ragione. Per Teresa, quel cane è la rappresentazione plastica dell'Amministratore di Condominio o del tuo senso di colpa finanziario che cerca di azzannarti i pantaloni per gridare: 'Ehi, guarda che devi pagare il bollo auto!'",
            "Ma Il Matto non ascolta. Guarda verso il cielo, sorride alle nuvole e continua a camminare verso il vuoto con la gioia sfacciata di chi ha appena disattivato tutte le notifiche del telefono."
          ]
        },
        {
          heading: "3. Come Interpretare Il Matto in una Lettura di Carte",
          paragraphs: [
            "Se durante un consulto ti esce Il Matto, ecco l'interpretazione ufficiale di Teresa:",
            "• In Amore: Ti innamorerai di una persona completamente sballata che si presenta agli appuntamenti in pigiama di pile e ti proporrà di adottare un lama a rate.",
            "• Nel Lavoro: Mandare una mail al tuo capo con scritto soltanto 'Basta, vado a fare il raccoglitore di noci di cocco a Santo Domingo' e spegnere il cellulare.",
            "• Sulla Salute: Una salute di ferro dovuta al fatto che la tua mente è troppo occupata a pensare alle cavallette per accorgersi dell'influenza."
          ],
          quote: "Nella vita sii come Il Matto: quando tutti corrono frenetici verso la carriera, tu fa' un passo di danza e casca dal dirupo ridendo a crepapelle!"
        }
      ],
      conclusion: "Il Matto ci insegna la lezione più importante di tutte: il caos non va temuto, va cavalcato con un paio di occhiali da sole da 2 euro ed un sorriso impertinente. E ora, mettetevi alla prova con il nostro Test Ufficiale!",
      quiz: {
        title: "🧪 TEST DELLA PAZZA GIOIA: QUANTO SEI PRONTO A SALTARE NEL BURRONE CON IL MATTO?",
        subtitle: "Rispondi alle domande di Teresa e scopri il tuo livello di incoscienza esoterica!",
        questions: [
          {
            id: 'q1',
            question: "1. Ti trovi sul ciglio di un precipizio senza paracadute. Cosa fai?",
            options: [
              { label: 'A', text: 'Tiro fuori una banana dal taschino, salto nel vuoto e urlo "YOLO!"', outcomeText: 'Complimenti! Sei Il Matto al 100%! La gravità per te è solo un consiglio opinabile.' },
              { label: 'B', text: 'Chiamo il geometra per chiedere se la roccia è a norma di legge CE.', outcomeText: 'Troppa burocrazia! Il Matto ti avrebbe già lanciato una ciabatta in testa.' },
              { label: 'C', text: 'Tiro fuori i tarocchi unti di Teresa e leggo l\'oroscopo del tostapane.', outcomeText: 'Scelta esoterica eccellente! Teresa approva e ti regala un amuleto di maionese.' }
            ]
          },
          {
            id: 'q2',
            question: "2. Cosa c'è nella tua borsa ideale per viaggiare leggeri?",
            options: [
              { label: 'A', text: 'Un calzino spaiato, tre monete da 20 centesimi e mezzo panino con la mortadella.', outcomeText: 'Hai lo stesso bagaglio spirituale del Matto! Sii fiero del tuo disordine!' },
              { label: 'B', text: 'Tre caricabatterie di riserva, il gel disinfettante e la cartella clinica.', outcomeText: 'Troppo ansioso! Hai bisogno urgente di una cura a base di sbornie e coriandoli.' },
              { label: 'C', text: 'Solo la ricevuta dell\'abbonamento VIP a Cattivo Gusto.', outcomeText: 'Sei un cittadino dell\'Assurdo da medaglia d\'oro!' }
            ]
          }
        ]
      },
      cta: {
        title: "🚽 PRENOTA SUBITO LA TUA LETTURA DISASTROSA DI CARTE \"AR CESSO\" CON TERESA!",
        subtitle: "Niente liturgie solenni, niente candele al sandalo: Teresa si accomoderà sul trono di ceramica del bagno della Redazione e ti farà una stesa di tarocchi completamente sballata, caustica ed esilarante!",
        buttonText: "🚽 APRI LA CHAT E RICEVI LA LETTURA \"AR CESSO\"",
        badge: "ESCLUSIVO REDAZIONE AR CESSO"
      }
    },
    comments: [
      {
        id: 'c-matto-1',
        author: 'PaoloIlMattoNaturale',
        avatar: '🤡',
        date: '3 minuti fa',
        text: 'Articolo sublime! Mi è uscito Il Matto ieri e stamattina mi sono licenziato dal bar via messaggio vocale di 12 minuti. Mi sento libero come una rondine ubriaca!',
        likes: 412
      },
      {
        id: 'c-matto-2',
        author: 'NonnaEsoterica',
        avatar: '🔮',
        date: '12 minuti fa',
        text: 'Teresa sei una divinità! Ho fatto il test e sono uscita Matto al 100%. Ora vado al supermercato con le pantofole a forma di coniglio!',
        likes: 290
      }
    ]
  },
  {
    id: 'intervista-gianna-subbuglio-milano-estetica-brutta',
    title: "INTERVISTA A GIANNA 'SUBBUGLIO': \"LA PELLE PULITA È DA DEBOLI, NELL'ATELIER DI LAMBRATE VI REGALO L'ANSIA IN FORMATO MASCHERA FACCIALE\"",
    subtitle: "Siamo entrati nel tempio milanese del Bruttalismo Facciale: tra fango della Martesana, impacchi al gorgonzola piccante e permanente al baffo da terrore bancario. In esclusiva: la super PROMO 'Insonnia & Pori Splendenti'!",
    category: 'estetica-bellezza',
    categoryLabel: 'ESTETICA & BELLEZZA BRUTTA',
    author: 'Donna Cringe & La Redazione Sottosopra',
    date: '24 LUGLIO 2026',
    readTime: '7 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Gianna Subbuglio nel suo salone di bellezza bruttalista a Milano Lambrate',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 18940,
    isHot: true,
    content: {
      intro: "A Milano, tra un aperitivo chic a 18 euro e una palestra con filtro HEPA, sorge un'oasi di pura resistenza contro il dittato dell'estetica patinata. Siamo a Lambrate, via dei Pori Ostruiti 12, davanti all'insegna al neon tremolante dell'Atelier 'Bruttezza e Dignità'. Ad accoglierci c'è lei: Gianna 'Subbuglio', 58 anni d'esperienza, zoccoli sanitari con il tacco in ghisa e un grembiule macchiato di fango termale e sugo d'umido del 2012. Ci sediamo sulla poltrona da barbiere del 1974 mentre Gianna ci spalma sul viso una sostanza vischiosa che profuma di insaccato e insicurezza finanziaria.",
      sections: [
        {
          heading: "D: Gianna, cos'è esattamente il 'Bruttalismo Facciale' e perché spaventa la Milano bene?",
          paragraphs: [
            "R: 'Ascolta, caro il mio giornalista cotonato: la gente spende migliaia di euro in sieri all'acido ialuronico, fiale di oro colloidale e correttori illuminanti per sembrare finti angeli di plastica. Ma quando ti svegli il lunedì mattina dopo tre spritz di sottomarca e quattro ore di sonno, la realtà ti chiede il conto! Io non nascondo le occhiaie: io le doverei proclamare Patrimonio dell'UNESCO!'",
            "R: 'Il Bruttalismo Facciale lavora sul rilievo naturale. Hai un punto nero monumentale sul naso? Noi gli mettiamo un filo di luce perlata attorno per farlo sembrare il Duomo di Milano visto dal satellite. Hai le borse sotto gli occhi? Le riempiamo di pigmento viola melanzana per dare quel look da 'ho appena scoperto la fattura del conguaglio gas'. Questo è carattere, questa è dignità!'"
          ],
          quote: "Il retinolo è un complotto della borghesia per farvi dimenticare che siamo tutti destinati a diventare prugne secche sotto il sole dell'Ipercoop."
        },
        {
          heading: "D: Quali sono i trattamenti di punta del salone 'Bruttezza e Dignità'?",
          paragraphs: [
            "1. L'Impacco al Gorgonzola e Fondame di Caffè: 'Nutre la pelle stanca, distrugge i batteri buoni e rilascia un aroma di osteria di periferia che allontana i colleghi di lavoro nel raggio di tre metri. Ottimo per lo smart working solitario.'",
            "2. La Micro-Abitudine del Baffo da Tensione: 'Stiriamo i peli del labbro superiore verso l'alto con cera d'api grezza e colla vinilica per garantire una permanente perenne da terrore fiscale.'",
            "3. Il Peeling alla Sabbia del Naviglio Grande: 'Rimuove tre strati di epidermide, due ricordi d'infanzia e qualsiasi traccia di autostima residua in soli otto minuti di bruciore intenso.'"
          ]
        },
        {
          heading: "D: È vero che la tua clientela comprende anche influencer e manager di banche?",
          paragraphs: [
            "R: 'Certo! L'altro giorno è venuta una fashion blogger da due milioni di follower. Piangeva perché aveva la pelle troppo liscia e i brand la consideravano 'troppo poco autentica'. Le ho fatto un trattamento intensivo di 'Stress Urbano & Pori Aperti' mettendola a dormire tre ore vicino allo scappamento di un autobus della linea 90. Ora è testimonial di un noto marchio di streetwear distopico e prende 10k a post!'"
          ],
          quote: "Quando una cliente esce da qui e i passanti al semaforo le chiedono 'Signora ha bisogno di chiamare un'ambulanza?', io so di aver fatto un capolavoro."
        },
        {
          heading: "🔥 LA PROMOZIONE IMPERDIBILE DI GIANNA (CTA AL MOMENTO PROMOZIONALE!)",
          paragraphs: [
            "ATTENZIONE! Solo per i lettori di Cattivo Gusto che si prenotano entro la mezzanotte di stasera, Gianna offre il pacchetto promozionale esclusivo 'ANNI DI INSONNIA & PORI SPLENDENTI' al prezzo stracciato di soli 49,99€ (anziché 180€ di sensi di colpa)!",
            "Cosa include il pacchetto Promo 'Subbuglio Premium':",
            "• 1 Seduta di Contouring Occhiaie tonalità 'Melanzana da Coma'",
            "• 1 Maschera al Gorgonzola DOP e Polvere di Calcinaccio di Lambrate",
            "• 1 Campione omaggio di Olio d'Oliva per lucidare la Zona T prima degli appuntamenti galanti",
            "👉 CLICCA SUL TASTO 'PRENOTA IL TUO DISASTRO' O CANTA L'INNO DI LAMBRATE FUORI DAL SALONE PER OTTENERE LO SCONTO IMMEDIATO!"
          ],
          quote: "Prenota ora o resta bello e insignificante per il resto della tua triste vita!"
        }
      ],
      conclusion: "Non lasciatevi sfuggire questa opportunità irripetibile. Correte a Lambrate, abbracciate il vostro degrado cutaneo e ricordatevi sempre: la bellezza passa, ma un'occhiaia ben curata da Gianna dura per sempre!"
    },
    comments: [
      {
        id: 'c-gianna-1',
        author: 'MilanoDaBereEPiangere',
        avatar: '🧟‍♀️',
        date: '2 minuti fa',
        text: 'Ho prenotato subito la promo a 49,99€! Gianna mi ha messo la maschera al gorgonzola e in metro adesso tutti mi lasciano il posto a sedere. Salone atomico!',
        likes: 340
      },
      {
        id: 'c-gianna-2',
        author: 'BloggerInCrisi',
        avatar: '💄',
        date: '8 minuti fa',
        text: 'Ero stufa di avere la pelle perfetta. Dopo il Peeling alla Sabbia del Naviglio finalmente mi scambiano per un personaggio di un film di David Lynch!',
        likes: 215
      }
    ]
  },
  {
    id: 'teresa-tarocchi-come-non-leggere-i-tarocchi',
    title: "TERESA E I TAROCCHI: GUIDA PRATICA SU COME NON LEGGERE I TAROCCHI E ROVINARE OGNI PREVISIONE",
    subtitle: "Per fare una lettura dei tarocchi completamente sballata basta davvero poco e chiunque ne è perfettamente capace. Ecco i segreti di Teresa per seminare il panico esoterico a costo zero.",
    category: 'teresa-tarocchi',
    categoryLabel: 'TERESA E I TAROCCHI',
    author: 'Teresa la Cartomante dell\'Assurdo',
    date: '24 LUGLIO 2026',
    readTime: '5 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1572916140766-61b21262d400?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Tavolo di cartomanzia con carte dei tarocchi e candele per divinazione satirica',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 12580,
    isHot: true,
    content: {
      intro: "Leggere i tarocchi con precisione e accuratezza richiede anni di studi esoterici, sensibilità spirituale e profonda conoscenza degli arcani maggiori e minori. Ma sapete cosa richiede zero sforzo, zero studio ed è alla portata di chiunque? Fare una lettura dei tarocchi completamente sbagliata, disastrosa e catastrofica! Benvenuti al primo appuntamento con la nuova rubrica 'Teresa e i Tarocchi'. Per rovinare una stesa a un amico, a un parente o a se stessi basta pochissimo: tutti ne siamo perfettamente capaci. Ecco la guida pratica e definitiva di Teresa per fallire miseramente al tavolo della divinazione.",
      sections: [
        {
          heading: "1. Inventa il Significato delle Carte Guardando solo gli Baffi di Unto sugli Angoli",
          paragraphs: [
            "Chi lo dice che La Torre indica il crollo delle vecchie certezze o un cambiamento improvviso? Se la carta presenta una piccola macchia di maionese nell'angolo in alto a destra, per Teresa significa chiaramente: 'Venerdì sera mangerai un trancio di pizza azzimo pesante che ti rimarrà sullo stomaco fino a martedì'.",
            "Se estrai Il Bagatto ma stai usando un mazzo da briscola comprato in autogrill nel 1998, interpreta la carta in base al costo d'acquisto: 'Hai Il Bagatto ma il mazzo costava 3,50€, quindi la tua fortuna lavorativa sarà esattamente proporzionata al caffè all'acqua della macchinetta dell'ufficio'."
          ],
          quote: "Non serve studiare la Cabala o Jodorowsky. Basta guardare la carta, fare una faccia terrorizzata e dire: 'Vedo che tua zia nel 1994 ha detto una bugia sui carciofi'."
        },
        {
          heading: "2. Confondi Sistematicamente gli Arcani con le Carte da Briscola e Piatti Tipici",
          paragraphs: [
            "Se durante una consultazione d'amore per una cliente in ansia da prestazione estrai per errore il Sette di Bastoni, non mostrare mai alcuna esitazione. Grida con finta solennità: 'L'Asso di Bastoni capovolto indica chiaramente che il tuo ex ti colpirà emotivamente con un abbonamento annuale in palestra!'",
            "Se esce la carta de La Morte, sorridi a trentadue denti e rassicura la persona: 'Ah niente di grave! La Morte indica solo che dovrai cambiare operatore telefonico entro fine mese, altrimenti la tua promozione giga illimitati morirà nel sonno'."
          ]
        },
        {
          heading: "3. La Tecnica del Disorientamento e del Dramma Aggiuntivo Unico",
          paragraphs: [
            "Una vera lettura sbagliata non deve mai fornire risposte chiare o utili. Se il consultante ti chiede 'Troverò un lavoro stabile entro l'anno?', mescola il mazzo per dieci minuti facendolo cadere per terra due volte, fissalo negli occhi e pronuncia:"
          ],
          quote: "Vedo una grande ombra: la tua lavatrice accumulerà calcare nel cestello a causa di un karma negativo ereditato dal tuo bisnonno panettiere."
        },
        {
          heading: "Il Consiglio d'Oro di Teresa: 'Il Bluff è Tutto'",
          paragraphs: [
            "'Ricordatevi sempre,' conclude Teresa guardando la sua palla di vetro piena di polvere, 'l'importante non è la verità scritta negli astri. L'importante è guardare la vittima con sguardo felino, tirare un lungo sospiro e mormorare: Ho visto cose che la tua banca preferirebbe tenere nascoste'."
          ]
        }
      ],
      conclusion: "Mettetevi subito alla prova! Prendete un mazzo di carte qualsiasi (vanno bene anche quelle della COOP o delle caramelle), mescolate a caso e pronunciate profezie prive di ogni nesso logico. Fare una pessima lettura dei tarocchi è un diritto inalienabile di tutti!"
    },
    comments: [
      {
        id: 'c-tarot-1',
        author: 'MarioTarocco',
        avatar: '🔮',
        date: '5 minuti fa',
        text: 'Ho seguito i consigli di Teresa: ho estratto il 4 di Picche al mio capo e gli ho detto che il suo condizionatore morirà domani. Mi ha subito concesso due giorni di ferie per paura!',
        likes: 210
      },
      {
        id: 'c-tarot-2',
        author: 'SorellaEsoterica',
        avatar: '🌙',
        date: '15 minuti fa',
        text: 'Rubrica fantastica! Finalmente qualcuno che sdogana la cartomanzia fatta male e in totale improvvisazione!',
        likes: 145
      }
    ]
  },
  {
    id: 'evidenziare-occhiaie-punti-neri-guida',
    title: "GUIDA COMPLETA SU COME EVIDENZIARE OCCHIAIE E PUNTI NERI: IL NUOVO TREND 'BRUTTALISMO FACCIALE'",
    subtitle: "Basta correttori illuminanti e patch al retinolo! Ecco la rivoluzionaria skincare per sfoggiare un viola periorbitale da coma etilico e far brillare i tuoi pori ostruiti come costellazioni di notte.",
    category: 'estetica-bellezza',
    categoryLabel: 'ESTETICA & BELLEZZA BRUTTA',
    author: 'Donna Cringe & L\'Estetista del Subbuglio',
    date: '24 LUGLIO 2026',
    readTime: '6 MIN READ',
    heroImage: 'https://images.unsplash.com/photo-1512290900676-26c2a0d0e5b0?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Primo piano satirico ed eccentrico sul makeup e cura del viso',
    imageCutoutStyle: 'paper-tape',
    featured: true,
    gridSpan: 'full',
    likesCount: 9420,
    isHot: true,
    content: {
      intro: "Hai passato anni a spendere stipendi in sieri illuminanti, BB cream e correttori arancioni per nascondere quel viola profondo sotto gli occhi che ti fa sembrare uno zombie di The Walking Dead dopo una maratona di 48 ore? Errore fatale! Il 2026 decreta la fine dell'estetica 'pulita e levigata' (Clean Girl Aesthetic). Benvenuti nella nuova era dell'ESTETICA BRUTTA e del 'Bruttalismo Facciale': la guida definitiva per esaltare con orgoglio le tue occhiaie storiche e mettere in risalto ogni singolo punto nero del naso come fosse un diamante incastonato.",
      sections: [
        {
          heading: "Fase 1: Il Contouring delle Occhiaie 'Sguardo da Ospedale'",
          paragraphs: [
            "Perché spendere soldi per coprire l'ombra della tua stanchezza quando puoi intensificarla fino a far preoccupare i passanti per strada?",
            "1. La Selezione delle Sfumature: Dimentica il beige. Procurati un ombretto opaco melanzana scuro, un tocco di prugna e del viola bruciato. Sfuma con cura partendo dal condotto lacrimale fino a raggiungere gli zigomi.",
            "2. La Tecnica del Liquido di Bistecca: Per dare quel tocco di lucidità vischiosa e drammatica, applica una goccia di olio d'oliva o lucidalabbra trasparente al centro dell'occhiaia. Lo sbrilluccichio metterà in risalto il reticolo venoso con grazia vittoriana.",
            "3. L'Effetto 'Nottambulo Professionista': Applica un velo di matita nera sbavata nella rima inferiore per simulare 72 ore ininterrotte di streaming o crisi d'ansia finanziaria."
          ],
          quote: "L'occhiaia marcata non è un difetto, è una mappa emotiva dei tuoi fallimenti e della tua insonnia. Portala con l'orgoglio di un re di periferia."
        },
        {
          heading: "Fase 2: Valorizzare i Punti Neri della Zona T come la Via Lattea",
          paragraphs: [
            "I punti neri sul naso e sul mento sono stati ingiustamente demonizzati per decenni. È ora di considerarli per quello che sono davvero: una meravigliosa galassia cutanea che merita la giusta illuminazione.",
            "• La Ceretta al Contrario: Anziché strofinare strisce purificanti per strapparli via, applica della vaselina e un illuminante dorato direttamente sulle narici. Il contrasto tra il sebo scuro ossidato e la polvere perlata creerà un fantastico effetto 'Cielo Stellato sopra il Raccordo Anulare'.",
            "• Matita da Disegno 2B per i Pori Pigri: Se hai un naso purtroppo troppo pulito, niente paura. Prendi una matita da disegno morbida 2B e punteggia con precisione la zona T, simulando follicoli ostruiti da alta densità urbana."
          ]
        },
        {
          heading: "I Consigli dell'Esperta: L'Estetista del Subbuglio",
          paragraphs: [
            "Abbiamo intervistato la nota estetista e filosofa del degrado, Gianna 'Subbuglio', titolare dell'Atelier 'Bruttezza e Dignità' a Milano Lambrate:",
            "• 'Le mie clienti arrivano piangendo perché non hanno abbastanza borse sotto gli occhi. Io consiglio subito due tazze di caffè solubile a mezzanotte, tre ore di scroll forsennato su TikTok al buio e zero idratazione prima di dormire. Nel giro di tre giorni il tuo sguardo acquisisce quella drammaticità da dramma scandinavo che oggi va fortissimo alle sfilate di Parigi'."
          ],
          quote: "Il trucco ideale è quello che spinge le persone a chiederti 'Scusa, stai bene o devo chiamare un'ambulanza?' appena entri in bar."
        }
      ],
      conclusion: "Smettetela di nascondervi dietro i filtri di Instagram e i correttori coprenti. Abbracciate l'imperfezione, valorizzate i pori dilatati e sfoggiate quelle occhiaie violacee come la corona di gloria che vi spetta di diritto!"
    },
    comments: [
      {
        id: 'c-eb-1',
        author: 'ChiaraPelleInsonne',
        avatar: '👀',
        date: '10 minuti fa',
        text: 'Grazie! Finalmente una guida per me che dormo 3 ore a notte dal 2018. Ho provato il lucidalabbra sulle occhiaie ed al bar m\'hanno subito offerto un cornetto per pietà!',
        likes: 184
      },
      {
        id: 'c-eb-2',
        author: 'GattoInsonne',
        avatar: '🐱',
        date: '25 minuti fa',
        text: 'Mio umano si dipinge le occhiaie viola ogni mattina e adesso lo scambiano per un artista concettuale. Grandissimo articolo.',
        likes: 92
      }
    ]
  },
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

