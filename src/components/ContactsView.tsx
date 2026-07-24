import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, Feather, Sparkles, MessageCircle, AlertTriangle, CheckCircle2, RefreshCw, X, Radio, Cat, Flame, ArrowLeft } from 'lucide-react';

interface ContactsViewProps {
  onBackHome: () => void;
  onOpenGroqChat?: () => void;
}

export const ContactsView: React.FC<ContactsViewProps> = ({ onBackHome, onOpenGroqChat }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipoSegnalazione: 'gatto-finanza',
    metodoRisposta: 'nessuna',
    messaggio: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = 'NULLA-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(randomTicket);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      nome: '',
      email: '',
      tipoSegnalazione: 'gatto-finanza',
      metodoRisposta: 'nessuna',
      messaggio: '',
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10 font-typewriter animate-in fade-in duration-200">
      
      {/* Top Back Header */}
      <div className="flex items-center justify-between border-b-3 border-black pb-4">
        <button
          onClick={onBackHome}
          className="bg-black text-white font-anton text-xs sm:text-sm px-4 py-2 border-2 border-black hover:bg-[#A0FF00] hover:text-black transition shadow-[3px_3px_0px_#000] flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>TORNA ALLA PRIMA PAGINA</span>
        </button>

        <span className="bg-[#A0FF00] text-black font-mono text-xs px-2.5 py-1 border-2 border-black font-bold uppercase shadow-[2px_2px_0px_#000]">
          UFFICIO RECLAMI SURREALI
        </span>
      </div>

      {/* Main Title Hero */}
      <div className="bg-[#FFFEEB] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] space-y-4 text-center sm:text-left relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Cat className="w-64 h-64 text-black" />
        </div>

        <div className="inline-block bg-black text-[#A0FF00] font-anton text-xs px-3 py-1 uppercase tracking-widest border border-black">
          Sede Centrale della Dissociazione
        </div>

        <h1 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-black leading-none">
          CONTATTI ASSURDI & SEGNALAZIONI AL VUOTO
        </h1>

        <p className="font-typewriter text-sm sm:text-base text-neutral-800 leading-relaxed max-w-3xl">
          Hai avvistato un tostapane con complessi di superiorità? Vuoi denunciare il tuo gatto alla Guardia di Finanza per evasione di fusa? O cerchi appuntamento da Ginetta per un tatuaggio al macinato grasso in Vaticano? Compila il form qui sotto per far smarrire il tuo messaggio per sempre.
        </p>
      </div>

      {/* Grid of Absurd Contact Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Channel 1: Piccione */}
        <div className="bg-white border-3 border-black p-5 shadow-[5px_5px_0px_#000] space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <span className="font-anton text-lg uppercase text-black flex items-center gap-2">
                <Feather className="w-5 h-5 text-blue-600" />
                PICCIONE VIAGGIATORE
              </span>
              <span className="bg-[#A0FF00] text-black font-mono text-[10px] px-2 py-0.5 border border-black font-bold">
                CONSIGLIATO
              </span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              <strong>Nido Operativo:</strong> Balcone B3, Terzo Pilastro della Tangenziale Est, Roma.
            </p>
            <p className="text-xs text-neutral-600 italic">
              *Nota:* Il piccione risponde al nome di "Giacomo". Se lo vedete mangiare mortadella, non disturbatelo: è in pausa sindacale.
            </p>
          </div>
          <div className="pt-2 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
            Tempo di risposta: 3-8 settimane (meteo permettendo)
          </div>
        </div>

        {/* Channel 2: Telepatia */}
        <div className="bg-white border-3 border-black p-5 shadow-[5px_5px_0px_#000] space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <span className="font-anton text-lg uppercase text-black flex items-center gap-2">
                <Radio className="w-5 h-5 text-purple-600" />
                CANALE TELEPATICO
              </span>
              <span className="bg-purple-200 text-black font-mono text-[10px] px-2 py-0.5 border border-black font-bold">
                432 HZ
              </span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Accendi il tostapane di casa, fissa una fetta di salame e pensa intensamente all'articolo che vuoi proporre alla Redazione.
            </p>
            <p className="text-xs text-neutral-600 italic">
              Se avverti un leggero fischio al dito mignolo, significa che la proposta è stata categoricamente respinta.
            </p>
          </div>
          <div className="pt-2 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
            Disponibile solo durante le eclissi solari
          </div>
        </div>

        {/* Channel 3: Sede Vaticana Studio Ginetta */}
        <div className="bg-white border-3 border-black p-5 shadow-[5px_5px_0px_#000] space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <span className="font-anton text-lg uppercase text-black flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                SPORTELLO FISICO
              </span>
              <span className="bg-red-200 text-black font-mono text-[10px] px-2 py-0.5 border border-black font-bold">
                VATICANO
              </span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              <strong>Atelier Ginetta:</strong> Ala Ovest del Palazzo Apostolico, adiacente alle stanze del Papa (Roma).
            </p>
            <p className="text-xs text-neutral-600 italic">
              Riceviamo solo il 29 Febbraio dalle 03:15 alle 03:18 del mattino. Portare un omaggio in Scottona frollata.
            </p>
          </div>
          <div className="pt-2 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
            Ingresso subordinato al permesso delle Guardie Svizzeri
          </div>
        </div>

      </div>

      {/* Interactive Form for Sending Absurd Message */}
      <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] space-y-6">
        
        <div className="flex items-center justify-between border-b-3 border-black pb-4">
          <div className="space-y-1">
            <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-black flex items-center gap-2">
              <Send className="w-6 h-6 text-black" />
              INVIA SEGNALAZIONE AL VUOTO INTERIORE
            </h2>
            <p className="text-xs text-neutral-600">
              Modulo ufficiale di dispersione dati. Tutti i campi sono facoltativi tranne il livello di paranoia.
            </p>
          </div>
          <span className="bg-black text-[#A0FF00] font-mono text-xs px-2.5 py-1 border border-black hidden sm:inline-block">
            STAMPA 2026
          </span>
        </div>

        {submitted ? (
          <div className="bg-[#FFFEEB] border-3 border-black p-6 space-y-4 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#A0FF00] border-3 border-black rounded-full flex items-center justify-center mx-auto shadow-[4px_4px_0px_#000]">
              <CheckCircle2 className="w-10 h-10 text-black" />
            </div>

            <h3 className="font-anton text-2xl uppercase tracking-tight text-black">
              SEGNALAZIONE RICEVUTA E IMMEDIATAMENTE CESTINATA!
            </h3>

            <div className="bg-white border-2 border-black p-4 font-mono text-xs max-w-md mx-auto space-y-1 text-left">
              <div><strong>N. TICKET:</strong> {ticketNumber}</div>
              <div><strong>STATO:</strong> Disperso nella quarta dimensione</div>
              <div><strong>OPERATORE ASSEGNATO:</strong> Il gatto di redazione</div>
            </div>

            <p className="text-xs text-neutral-700 max-w-lg mx-auto leading-relaxed">
              Il tuo messaggio è stato stampato su un tovagliolino e trasformato in un pallina da gioco per il nostro felino di redazione. Nel caso in cui il gatto decida di rispondere, ti ricontatteremo mezzo segnale di fumo.
            </p>

            <button
              onClick={handleReset}
              className="bg-black text-[#A0FF00] font-anton text-sm px-6 py-2.5 border-2 border-black hover:bg-[#A0FF00] hover:text-black transition shadow-[3px_3px_0px_#000] inline-flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>INVIA UN'ALTRA ALLUCINAZIONE</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nome */}
              <div className="space-y-1">
                <label className="font-anton text-xs uppercase tracking-wider text-black block">
                  NOME / PSEUDONIMO DI COPERTURA
                </label>
                <input
                  type="text"
                  required
                  placeholder="Es. Mario Rossi o Il Guardiano del Tostapane"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-[#FAF8F5] border-2 border-black p-2.5 text-xs font-typewriter focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[2px_2px_0px_#000]"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="font-anton text-xs uppercase tracking-wider text-black block">
                  INDIRIZZO EMAIL (O TELEPATICO)
                </label>
                <input
                  type="email"
                  required
                  placeholder="Es. paranoia@nulla.it"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAF8F5] border-2 border-black p-2.5 text-xs font-typewriter focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[2px_2px_0px_#000]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Tipo di Segnalazione */}
              <div className="space-y-1">
                <label className="font-anton text-xs uppercase tracking-wider text-black block">
                  MOTIVO DELLA CONTRO-SEGNALAZIONE
                </label>
                <select
                  value={formData.tipoSegnalazione}
                  onChange={(e) => setFormData({ ...formData, tipoSegnalazione: e.target.value })}
                  className="w-full bg-[#FAF8F5] border-2 border-black p-2.5 text-xs font-typewriter focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[2px_2px_0px_#000] cursor-pointer"
                >
                  <option value="gatto-finanza">🐱 Voglio denunciare il mio gatto alla Finanza</option>
                  <option value="tostapane-parlante">🍞 Avvistamento Tostapane Cospirazionista</option>
                  <option value="tatuaggio-ginetta">🥩 Prenotazione Tatuaggio al Macinato da Ginetta</option>
                  <option value="temptation-pinnettu">🏝️ Reclamo su Temptation Island & Pinnettu</option>
                  <option value="primo-appuntamento-disastro">💘 Mossa da primo appuntamento andata malissimo</option>
                  <option value="filosofia-nulla">🧠 Consultazione sul Vuoto Esistenziale</option>
                </select>
              </div>

              {/* Metodo Risposta Desiderato */}
              <div className="space-y-1">
                <label className="font-anton text-xs uppercase tracking-wider text-black block">
                  CANALE DI RISPOSTA DESIDERATO
                </label>
                <select
                  value={formData.metodoRisposta}
                  onChange={(e) => setFormData({ ...formData, metodoRisposta: e.target.value })}
                  className="w-full bg-[#FAF8F5] border-2 border-black p-2.5 text-xs font-typewriter focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[2px_2px_0px_#000] cursor-pointer"
                >
                  <option value="nessuna">🚫 Nessuna risposta (Opzione Predefinita & Consigliata)</option>
                  <option value="telepatia">🔮 Telepatia alle 04:00 del mattino</option>
                  <option value="soffio">💨 Soffio di vento sotto la porta di casa</option>
                  <option value="piccione">🐦 Notifica da un piccione di passaggio</option>
                  <option value="gatto">🐾 Miagolio dal cortile</option>
                </select>
              </div>
            </div>

            {/* Messaggio */}
            <div className="space-y-1">
              <label className="font-anton text-xs uppercase tracking-wider text-black block">
                TESTO DEL MESSAGGIO O DELL'ALLUCINAZIONE
              </label>
              <textarea
                rows={4}
                required
                placeholder="Scrivi qui nei dettagli cosa ti sta turba l'esistenza oggi..."
                value={formData.messaggio}
                onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                className="w-full bg-[#FAF8F5] border-2 border-black p-3 text-xs font-typewriter focus:bg-white focus:outline-none focus:ring-2 focus:ring-black shadow-[2px_2px_0px_#000]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-black">
              <span className="text-[11px] text-neutral-500 italic">
                *Cattivo Gusto declina ogni responsabilità per eventuali risposte ricevute tramite elettrodomestici.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#A0FF00] text-black font-anton text-base px-8 py-3 border-3 border-black hover:bg-black hover:text-[#A0FF00] transition shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <Send className="w-5 h-5" />
                <span>INVIA AL VUOTO INTERIORE</span>
              </button>
            </div>

          </form>
        )}

      </div>

      {/* Chat Bot Direct Assistance Box */}
      {onOpenGroqChat && (
        <div className="bg-[#FAF8F5] border-3 border-black p-5 shadow-[5px_5px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-black text-[#A0FF00] border-2 border-black rounded-full">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-anton text-lg uppercase text-black">
                PREFERISCI UNA PARLATA A VOCE O IN CHAT SUBITO?
              </h4>
              <p className="text-xs text-neutral-600">
                Parla direttamente con Nina, l'Assistente AI Satirica con vocale integrato.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenGroqChat}
            className="bg-black text-[#A0FF00] font-anton text-xs px-5 py-2.5 border-2 border-black hover:bg-[#A0FF00] hover:text-black transition shadow-[3px_3px_0px_#000] whitespace-nowrap cursor-pointer uppercase"
          >
            PARLA CON NINA CHAT 🎙️
          </button>
        </div>
      )}

    </div>
  );
};
