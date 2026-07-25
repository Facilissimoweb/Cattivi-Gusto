# CARTELLA IMMAGINI (`/public/images/`)

Inserisci in questa cartella i file immagine statici per la rivista *Cattivo Gusto* (formati supportati: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`, `.gif`).

### Come utilizzare le immagini nei componenti React e negli articoli:
- **Percorso diretto URL**: `/images/nome-immagine.jpg`
- **Esempio in JSX**:
  ```tsx
  <img src="/images/copertina-articolo.jpg" alt="Descrizione Immagine" />
  ```
- **Negli articoli (`src/data/articles.ts`)**:
  ```ts
  heroImage: '/images/nome-immagine.jpg'
  ```
