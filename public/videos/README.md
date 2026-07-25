# CARTELLA VIDEO (`/public/videos/`)

Inserisci in questa cartella i file video multimediali statici per la rivista *Cattivo Gusto* (formati supportati: `.mp4`, `.webm`, `.ogv`, `.mov`).

### Come utilizzare i video nei componenti React e nei contenuti:
- **Percorso diretto URL**: `/videos/nome-video.mp4`
- **Esempio in JSX con tag HTML5 `<video>`**:
  ```tsx
  <video 
    src="/videos/promo-cattivo-gusto.mp4" 
    controls 
    autoPlay 
    muted 
    loop 
    className="w-full border-2 border-black shadow-[4px_4px_0px_#000]"
  >
    Il tuo browser non supporta la riproduzione dei video.
  </video>
  ```
