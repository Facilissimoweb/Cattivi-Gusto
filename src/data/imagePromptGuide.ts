/**
 * GUIDA UFFICIALE ALLA GENERAZIONE IMMAGINI DI "CATTIVO GUSTO"
 * =========================================================
 * Linee Guida di Stile Unificato: "Brutalista, Grottesco e Assurdo"
 */

/**
 * MASTER STYLE PROMPT ANCHOR (Da includere in ogni prompt di generazione immagine)
 */
export const CATTIVO_GUSTO_MASTER_STYLE = 
  "Grainy low-fi aesthetic, direct flash photography, raw high-contrast monochrome with jarring neon green (#A0FF00) accent pops, surrealist Italian pop-art satirical collage, intentional glitch and newsprint texture, off-white background (#F4F1EA), brutalist newsprint editorial style, 16:9 aspect ratio";

/**
 * Funzione per generare il prompt perfetto per qualsiasi articolo o soggetto.
 * @param subjectDescription Descrizione specifica del soggetto/scena dell'articolo
 */
export function buildArtisticImagePrompt(subjectDescription: string): string {
  return `${subjectDescription}, ${CATTIVO_GUSTO_MASTER_STYLE}`;
}

export interface ArticleImagePrompt {
  articleId: string;
  title: string;
  subject: string;
  fullPrompt: string;
  recommendedFileName: string;
}

export const ARTICLE_IMAGE_PROMPTS: ArticleImagePrompt[] = [
  {
    articleId: 'marcus-preghiera-successo-collasso',
    title: 'Manifesto Ispirazionale di Coach Marcus',
    subject: 'A surrealist Italian fitness coach in a white mesh tank top and orthopedic slippers standing in a gym doing a dramatic motivational pose with direct flash lighting',
    fullPrompt: buildArtisticImagePrompt('A surrealist Italian fitness coach in a white mesh tank top and orthopedic slippers standing in a gym doing a dramatic motivational pose with direct flash lighting'),
    recommendedFileName: '/images/marcus-manifesto.png'
  },
  {
    articleId: 'marcus-andare-in-bianco',
    title: 'Come Andare in Bianco con Dignità',
    subject: 'A grainy high-contrast photo of an eccentric Italian man sitting alone on a sofa next to a 1980s Fiat Duna car engine diagram, absurd romantic failure with flash photography',
    fullPrompt: buildArtisticImagePrompt('A grainy high-contrast photo of an eccentric Italian man sitting alone on a sofa next to a 1980s Fiat Duna car engine diagram, absurd romantic failure with flash photography'),
    recommendedFileName: '/images/marcus-andare-in-bianco.png'
  },
  {
    articleId: 'teresa-tarocchi-il-matto-pazza-gioia',
    title: 'Teresa e i Tarocchi: Il Matto',
    subject: 'A surreal fortune teller tarot card of The Fool carrying tax forms and mayonnaise stains on a low-fi monochrome background',
    fullPrompt: buildArtisticImagePrompt('A surreal fortune teller tarot card of The Fool carrying tax forms and mayonnaise stains on a low-fi monochrome background'),
    recommendedFileName: '/images/teresa-matto.png'
  },
  {
    articleId: 'teresa-tarocchi-come-non-leggere-i-tarocchi',
    title: 'Guida Pratica per Fallire nei Tarocchi',
    subject: 'A chaotic fortune teller table with greasy tarot cards, a dusty crystal ball, and direct harsh flash photography',
    fullPrompt: buildArtisticImagePrompt('A chaotic fortune teller table with greasy tarot cards, a dusty crystal ball, and direct harsh flash photography'),
    recommendedFileName: '/images/teresa-guida-tarocchi.png'
  },
  {
    articleId: 'dante-gemma-donati',
    title: 'Dante e Gemma Donati',
    subject: 'A brutalist satirical collage of Dante Alighieri holding a pen while his wife hands him a grocery list, low-fi monochrome with neon accents',
    fullPrompt: buildArtisticImagePrompt('A brutalist satirical collage of Dante Alighieri holding a pen while his wife hands him a grocery list, low-fi monochrome with neon accents'),
    recommendedFileName: '/images/dante-gemma.png'
  },
  {
    articleId: 'economia-disperazione-soldi-di-plastica-carmen-consoli',
    title: 'Economia e Disperazione: Soldi di Plastica',
    subject: 'Floating synthetic plastic credit cards with direct harsh flash photography, financial despair collage with neon green pops',
    fullPrompt: buildArtisticImagePrompt('Floating synthetic plastic credit cards with direct harsh flash photography, financial despair collage with neon green pops'),
    recommendedFileName: '/images/economia-disperazione.png'
  }
];
