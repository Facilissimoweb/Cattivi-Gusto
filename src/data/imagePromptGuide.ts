/**
 * GUIDA UFFICIALE ALLA GENERAZIONE IMMAGINI DI "CATTIVO GUSTO"
 * =========================================================
 * Linee Guida di Stile Unificato: "Brutalista, Grottesco e Assurdo"
 * 
 * Basato sui principi stilistici forniti:
 * 1. Tecnica fotografica: "grainy, low-fi aesthetic", "high-contrast monochrome", "flash photography"
 * 2. Soggetti e composizione: "surrealist imagery", "intentional glitch effects"
 * 3. Coerenza cromatica: accenti stridenti in verde neon (#A0FF00) o blu elettrico su base "off-white" (#F4F1EA) e neri profondi.
 * 4. Layout "Broken": elementi sovrapposti e tipografia sovradimensionata (massive, overlapping typography).
 */

/**
 * MASTER STYLE PROMPT ANCHOR
 */
export const CATTIVO_GUSTO_MASTER_STYLE = 
  "Grainy low-fi aesthetic, direct flash photography, raw high-contrast monochrome with jarring neon green (#A0FF00) accent pops, surrealist Italian pop-art satirical collage, intentional glitch and newsprint texture, off-white background (#F4F1EA), brutalist newsprint editorial style, broken layout with massive overlapping typography, 16:9 aspect ratio";

/**
 * Genera il prompt per un articolo combinando il titolo H1, la categoria e il contesto dell'articolo.
 */
export function buildPromptFromArticle(h1Title: string, categoryLabel?: string, extraContext?: string): string {
  const cleanTitle = h1Title.replace(/RUBRICA|#\d+|"|'/g, '').trim();
  const context = extraContext ? `Context: ${extraContext}.` : '';
  const category = categoryLabel ? `Topic: ${categoryLabel}.` : '';
  
  return `Surrealist satirical illustration for Italian magazine H1 Headline: "${cleanTitle}". ${category} ${context} Visual style: ${CATTIVO_GUSTO_MASTER_STYLE}`;
}

export interface ArticleImagePrompt {
  articleId: string;
  h1Title: string;
  categoryLabel: string;
  subjectDescription: string;
  fullPrompt: string;
  recommendedFileName: string;
}

export const ARTICLE_IMAGE_PROMPTS: ArticleImagePrompt[] = [
  {
    articleId: 'economia-disperazione-soldi-di-plastica-carmen-consoli',
    h1Title: "RUBRICA \"ECONOMIA E DISPERAZIONE\" #1: COME INVENTARE SOLDI DI PLASTICA DA UN 'AMORE DI PLASTICA'",
    categoryLabel: 'ECONOMIA E DISPERAZIONE',
    subjectDescription: 'Floating synthetic plastic credit cards with direct harsh flash photography, financial despair collage with neon green pops and Carmen Consoli quotes in broken newsprint typography',
    fullPrompt: buildPromptFromArticle("COME INVENTARE SOLDI DI PLASTICA DA UN AMORE DI PLASTICA", "ECONOMIA E DISPERAZIONE", "Carte di credito sintetiche ed eque disperazioni finanziario-sentimentali con flash diretto"),
    recommendedFileName: '/images/economia-disperazione-soldi-plastica.png'
  },
  {
    articleId: 'beatrice-dante-dubbia-figura-accoppiamento',
    h1Title: "LA DUBBIA FIGURA DI BEATRICE: DANTE, IL PRIMO 'STALKER' STILNOVISTA E LA DONNA CHE SALUTÒ UNA VOLTA E SPARÌ IN PARADISO",
    categoryLabel: 'ACCOPPIAMENTO E DINTORNI',
    subjectDescription: 'Brutalist satirical collage of medieval Dante Alighieri looking at Beatrice from afar on a Florentine bridge, direct flash photography, grainy monochrome with neon green glitch typography',
    fullPrompt: buildPromptFromArticle("LA DUBBIA FIGURA DI BEATRICE: DANTE, IL PRIMO STALKER STILNOVISTA", "ACCOPPIAMENTO E DINTORNI", "Dante e Beatrice sul ponte con sguardi attoniti e volantini di stalking stilnovista"),
    recommendedFileName: '/images/dante-beatrice-stalker.png'
  },
  {
    articleId: 'enrico-viii-confusione-sentimentale-accoppiamento',
    h1Title: "ENRICO VIII E LA CONFUSIONE SENTIMENTALE: COME CAMBIARE SEI MOGLI, FONDARE UNA RELIGIONE E DARE SEMPRE LA COLPA AGLI ALTRI",
    categoryLabel: 'ACCOPPIAMENTO E DINTORNI',
    subjectDescription: 'Pop art collage of King Henry VIII with multiple severed-relationship marriage certificates, raw high-contrast flash photography, grainy monochrome with neon pops',
    fullPrompt: buildPromptFromArticle("ENRICO VIII E LA CONFUSIONE SENTIMENTALE: SEI MOGLI E UNA RELIGIONE PER DISPETTO", "ACCOPPIAMENTO E DINTORNI", "Enrico VIII attonito con corone di cartone e pergamene divorziste"),
    recommendedFileName: '/images/enrico-viii-confusione.png'
  },
  {
    articleId: 'filosofia-del-nulla-intervista-filosofi-naturalisti',
    h1Title: "FILOSOFIA DEL NULLA: INTERVISTA AI FILOSOFI NATURALISTI CHE HANNO CERCATO L'ARCHÈ NEL VUOTO E NELLE CIABATTE",
    categoryLabel: 'FILOSOFIA DEL NULLA',
    subjectDescription: 'Ancient Greek philosophers sitting in a bathtub looking into the void, grainy low-fi aesthetic, direct flash photography with neon green glitch accents',
    fullPrompt: buildPromptFromArticle("FILOSOFIA DEL NULLA: INTERVISTA AI FILOSOFI NATURALISTI NEL VUOTO", "FILOSOFIA DEL NULLA", "Filosofi greci in ciabatte che contemplano un punto vuoto con flash violento"),
    recommendedFileName: '/images/filosofia-nulla-arche.png'
  },
  {
    articleId: 'coach-marcus-articolo-ispirazionale-sfinimento',
    h1Title: "MANIFESTO ISPORAZIONALE DI COACH MARCUS: \"NON PERSEGUITARE I TUOI SOGNI, SFINISCILI FINO A QUANDO NON SI ARRENDONO!\"",
    categoryLabel: 'MANIFESTI & ATTI',
    subjectDescription: 'A satirical Italian fitness coach in a white mesh tank top and orthopedic slippers standing in a gym doing a dramatic motivational pose with direct flash lighting and massive overlapping text',
    fullPrompt: buildPromptFromArticle("MANIFESTO ISPIRAZIONALE DI COACH MARCUS: SFINISCI I TUOI SOGNI", "MANIFESTI", "Coach Marcus in canottiera a rete e ciabatte sanitarie in posa motivazionale"),
    recommendedFileName: '/images/coach-marcus-manifesto.png'
  },
  {
    articleId: 'accoppiamento-andare-in-bianco-marcus-coach',
    h1Title: "IL TRIONFO DELL'ANDARE IN BIANCO: GUIDA PRATICA ALLA LOGORREA TATTICA E ALLA SEDUZIONE AL CONTRARIO CON COACH MARCUS",
    categoryLabel: 'ACCOPPIAMENTO E DINTORNI',
    subjectDescription: 'An eccentric Italian man sitting on a couch in a living room next to a 1980s Fiat Duna car engine, absurd romantic failure with flash photography and raw monochrome texture',
    fullPrompt: buildPromptFromArticle("IL TRIONFO DELL ANDARE IN BIANCO: GUIDA ALLA LOGORREA TATTICA", "ACCOPPIAMENTO E DINTORNI", "Uomo in canottiera che spiega la frizione della Fiat Duna a una ragazza esausta"),
    recommendedFileName: '/images/marcus-andare-in-bianco.png'
  },
  {
    articleId: 'teresa-tarocchi-il-matto-pazza-gioia',
    h1Title: "TERESA E I TAROCCHI #1: L'ARCANO ZERO \"IL MATTO\" - CAMMINARE VERSO IL BURRONE IN CIABATTE E SENZA DEBITI",
    categoryLabel: 'TERESA E I TAROCCHI',
    subjectDescription: 'A surreal fortune teller tarot card of The Fool wearing mismatched slippers and carrying tax forms, dog barking, grainy low-fi aesthetic with neon green pops',
    fullPrompt: buildPromptFromArticle("TERESA E I TAROCCHI #1: L ARCANO ZERO IL MATTO IN CIABATTE", "TERESA E I TAROCCHI", "Tarocco del Matto in ciabatte con sacchetto di bollette e cane attonito"),
    recommendedFileName: '/images/teresa-il-matto.png'
  },
  {
    articleId: 'teresa-tarocchi-come-non-leggere-i-tarocchi',
    h1Title: "TERESA E I TAROCCHI: GUIDA PRATICA PER FARE UNA LETTURA COMPLETAMENTE SBAGLIATA E SEMINARE IL PANICO ESOTERICO",
    categoryLabel: 'TERESA E I TAROCCHI',
    subjectDescription: 'Chaotic fortune teller table with greasy tarot cards, a dusty crystal ball, a mayonnaise stain, direct flash photography, raw monochrome texture with neon pops',
    fullPrompt: buildPromptFromArticle("TERESA E I TAROCCHI: GUIDA PRATICA PER FARE UNA LETTURA COMPLETAMENTE SBAGLIATA", "TERESA E I TAROCCHI", "Tavolo esoterico caotico con carte dei tarocchi unte di maionese e sfera di vetro"),
    recommendedFileName: '/images/teresa-guida-tarocchi.png'
  },
  {
    articleId: 'intervista-gianna-subbuglio-milano-estetica-brutta',
    h1Title: "ESTETICA BRUTTA #1: INTERVISTA A GIANNA SUBBUGLIO, LA STYLIST CHE HA ABOLITO IL BUONGUSTO A MILANO",
    categoryLabel: 'ESTETICA & BELLEZZA BRUTTA',
    subjectDescription: 'An avant-garde ugly fashion model wearing mismatched neon socks, plastic bags and oversized sunglasses in Milan, flash photography with glitch effect',
    fullPrompt: buildPromptFromArticle("ESTETICA BRUTTA #1: INTERVISTA A GIANNA SUBBUGLIO", "ESTETICA & BELLEZZA BRUTTA", "Stylist milanese vestita di sacchetti della spesa e occhiali futuristici brutti"),
    recommendedFileName: '/images/gianna-subbuglio-estetica-brutta.png'
  },
  {
    articleId: 'evidenziare-occhiaie-punti-neri-guida',
    h1Title: "MAKE-UP GROTTESCO: COME VALORIZZARE LE OCCHIAIE VIOLA E I PUNTI NERI PER UN LOOK 'STRESS DA FATTURATO'",
    categoryLabel: 'ESTETICA & BELLEZZA BRUTTA',
    subjectDescription: 'Extreme close up of eye makeup highlighting violet dark circles and exhaustion, direct flash photography, high contrast monochrome with bright purple and green pops',
    fullPrompt: buildPromptFromArticle("MAKE-UP GROTTESCO: VALORIZZARE LE OCCHIAIE E I PUNTI NERI", "ESTETICA & BELLEZZA BRUTTA", "Trucco comico che esalta le occhiaie da stanchezza aziendale e stress"),
    recommendedFileName: '/images/makeup-occhiaie-grottesco.png'
  },
  {
    articleId: 'ginetta-tatuaggi-carne-vaticano',
    h1Title: "TATUAGGI CARNEI: GINETTA E L'ARTE DI TATUARE IL COTECHINO PRIMA DI CUCINARLO",
    categoryLabel: 'TATUAGGI CARNEI',
    subjectDescription: 'A butcher shop kitchen with raw meat tattooed with anchors and hearts, harsh flash photography, grainy monochrome with neon green contrast',
    fullPrompt: buildPromptFromArticle("TATUAGGI CARNEI: GINETTA E L ARTE DI TATUARE IL COTECHINO", "TATUAGGI CARNEI", "Cotechino crudo in macelleria con tatuaggi vintage marinari e cuore con scritta Mamma"),
    recommendedFileName: '/images/ginetta-cotechino-tatuato.png'
  },
  {
    articleId: 'guida-primo-appuntamento-sabotaggio',
    h1Title: "SABOTAGGIO SENTIMENTALE: 10 STRATEGIE PER ROVINARE IL PRIMO APPUNTAMENTO IN MENO DI 8 MINUTI",
    categoryLabel: 'ACCOPPIAMENTO E DINTORNI',
    subjectDescription: 'A awkward date at a restaurant where a man pulls out a 50-page spreadsheet, direct flash photography, surrealist satirical collage',
    fullPrompt: buildPromptFromArticle("SABOTAGGIO SENTIMENTALE: 10 STRATEGIE PER ROVINARE IL PRIMO APPUNTAMENTO", "ACCOPPIAMENTO E DINTORNI", "Cena romantica disastrosa con uomo che mostra grafici Excel di fallimento"),
    recommendedFileName: '/images/sabotaggio-primo-appuntamento.png'
  },
  {
    articleId: 'temptation-island-perle-assurde',
    h1Title: "TEMPTATION ISLAND & TRASH: ANALISI SOCIOLOGICA DEI RIFALCATELLI CHE PIANGONO DAVANTI AI PINNETTU",
    categoryLabel: 'TEMPTATION & TRASH',
    subjectDescription: 'A trash TV beach scene with a man crying in front of a wooden hut bonfire, flash photography, glitchy pop art text overlay',
    fullPrompt: buildPromptFromArticle("TEMPTATION ISLAND & TRASH: RIFALCATELLI CHE PIANGONO DAVANTI AI PINNETTU", "TEMPTATION & TRASH", "Uomo in costume da bagno che piange davanti a un falò di legno sulla spiaggia"),
    recommendedFileName: '/images/temptation-trash-pinnettu.png'
  },
  {
    articleId: 'emma-ai-italiana-disastro-mondiale',
    h1Title: "EMMA AI: L'INTELLIGENZA ARTIFICIALE ITALIANA CHE RISPONDE SOLO \"BOH\" E \"POI VEDIAMO\"",
    categoryLabel: 'COMPLOTTO FELINO',
    subjectDescription: 'A vintage bulky computer screen displaying an AI error message in Italian with a glowing cat watching, direct flash photography, glitch monochrome',
    fullPrompt: buildPromptFromArticle("EMMA AI: L INTELLIGENZA ARTIFICIALE ITALIANA CHE RISPONDE SOLO BOH", "COMPLOTTO FELINO", "Server informatico italiano d epoca con gatto sopra che emette il messaggio BOH"),
    recommendedFileName: '/images/emma-ai-boh.png'
  },
  {
    articleId: 'gatto-pianifica-caduta',
    h1Title: "COMPLOTTO FELINO: IL MIO GATTO STA PIANIFICANDO LA MIA CADUTA SUGLI SCALINI CON UNA BIGLIA DI VETRO",
    categoryLabel: 'COMPLOTTO FELINO',
    subjectDescription: 'Extreme close-up of an evil tabby cat holding a marble near a staircase, dark low-fi aesthetic, harsh flash lighting, neon green accents',
    fullPrompt: buildPromptFromArticle("COMPLOTTO FELINO: IL GATTO PIANIFICA LA CADUTA SUGLI SCALINI", "COMPLOTTO FELINO", "Gatto soriano diabolico al buio che spinge una biglia verso gli scalini con la zampa"),
    recommendedFileName: '/images/gatto-complotto-biglia.png'
  },
  {
    articleId: 'ricetta-disastro-pane-disperazione',
    h1Title: "CUCINA DA INCUBO: IL PANE DELLA DISPERAZIONE A LIEVITAZIONE APATICA (148 ORE)",
    categoryLabel: 'CUCINA DA INCUBO',
    subjectDescription: 'A flat rock-hard brick of bread sitting on a kitchen table, direct harsh flash photography, monochrome newsprint texture with neon green title tag',
    fullPrompt: buildPromptFromArticle("CUCINA DA INCUBO: IL PANE DELLA DISPERAZIONE A LIEVITAZIONE APATICA", "CUCINA DA INCUBO", "Pagnotta dura come una pietra su un tagliere con misuratore di disperazione"),
    recommendedFileName: '/images/pane-disperazione-incubo.png'
  },
  {
    articleId: 'guru-del-nulla-5-minuti',
    h1Title: "MODA CRINGE: IL RETRO-GURU CHE TI INSEGNA A MEDITARE SUI RIFIUTI INDIFFERENZIATI",
    categoryLabel: 'MODA CRINGE',
    subjectDescription: 'A hipster guru sitting cross-legged on a pile of trash bags wearing a tweed suit and neon socks, flash photography, brutalist collage',
    fullPrompt: buildPromptFromArticle("MODA CRINGE: IL RETRO-GURU CHE MEDITA SUI RIFIUTI INDIFFERENZIATI", "MODA CRINGE", "Guru moderno in giacca a quadri che medita a gambe incrociate sui sacchi della spazzatura"),
    recommendedFileName: '/images/guru-rifiuti-moda.png'
  },
  {
    articleId: '10-peggiori-consigli-moda-secolo',
    h1Title: "MODA CRINGE: I 10 PEGGIORI CONSIGLI DI STILE DEL SECOLO CHE DOVRESTI SEGUIRE SUBITO",
    categoryLabel: 'MODA CRINGE',
    subjectDescription: 'Fashion disaster runway model wearing socks with sandals, tie over turtleneck, high contrast flash photography, low-fi monochrome style',
    fullPrompt: buildPromptFromArticle("MODA CRINGE: I 10 PEGGIORI CONSIGLI DI STILE DEL SECOLO", "MODA CRINGE", "Sfilata di moda assurda con calzini nei sandali e cravatta sopra la felpa"),
    recommendedFileName: '/images/moda-cringe-peggiori-consigli.png'
  },
  {
    articleId: 'manifesto-dell-assurdo-firma-qui',
    h1Title: "MANIFESTO UFFICIALE DELL'ASSURDO: FIRMA ANCHE TU PER IL DIRITTO DI RIDERNE",
    categoryLabel: 'MANIFESTI & ATTI',
    subjectDescription: 'An official manifesto paper with burning candle wax, neon green signatures, brutalist newsprint collage style with direct flash photography',
    fullPrompt: buildPromptFromArticle("MANIFESTO UFFICIALE DELL ASSURDO: FIRMA PER IL DIRITTO DI RIDERNE", "MANIFESTI & ATTI", "Documento pergamena bruciacchiato con firme a pennarello verde neon e timbro dell assurdo"),
    recommendedFileName: '/images/manifesto-assurdo-firma.png'
  },
  {
    articleId: 'oroscopo-tostapane-2026',
    h1Title: "OROSCOPO OGGETTI 2026: COSA PREVEDE IL TUO TOSTAPANE PER I PROSSIMI 12 MESI",
    categoryLabel: 'OROSCOPO OGGETTI',
    subjectDescription: 'A retro chrome toaster with glowing mystical eyes emitting bread slice prophecies, harsh flash lighting, grainy low-fi aesthetic with neon green accents',
    fullPrompt: buildPromptFromArticle("OROSCOPO OGGETTI 2026: COSA PREVEDE IL TUO TOSTAPANE", "OROSCOPO OGGETTI", "Tostapane elettrico cromo d epoca che emette fumo cosmico e fette di pane oracolari"),
    recommendedFileName: '/images/oroscopo-tostapane-2026.png'
  }
];

export function getBrutalistAiImageUrl(h1Title: string, categoryLabel?: string, seedOffset: number = 0): string {
  const promptText = buildPromptFromArticle(h1Title, categoryLabel);
  const encoded = encodeURIComponent(promptText);
  let seed = 99 + seedOffset;
  for (let i = 0; i < h1Title.length; i++) {
    seed += h1Title.charCodeAt(i) * (i + 1);
  }
  return `https://image.pollinations.ai/prompt/${encoded}?width=1200&height=675&nologo=true&seed=${seed}&model=flux`;
}
