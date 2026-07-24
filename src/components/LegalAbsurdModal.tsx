import React, { useState } from 'react';
import { X, ShieldAlert, FileText, Lock, Eye, AlertTriangle, Check, RefreshCw, Sparkles, Download, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LegalAbsurdModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms';
}

export const LegalAbsurdModal: React.FC<LegalAbsurdModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);
  const [acceptedCookies, setAcceptedCookies] = useState<Record<string, boolean>>({
    breadcrumbs: true,
    catGaze: true,
    toasterTelepathy: true,
    existentialDread: false,
  });
  const [isSigned, setIsSigned] = useState(false);

  if (!isOpen) return null;

  const toggleCookie = (key: string) => {
    setAcceptedCookies(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAcceptAll = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setIsSigned(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#F4F1EA] border-4 border-black p-6 sm:p-8 w-full max-w-3xl shadow-[12px_12px_0px_#000] relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black text-white p-1.5 border-2 border-black hover:bg-[#A0FF00] hover:text-black transition cursor-pointer"
          title="Chiudi finestra legale"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Badge */}
        <div className="flex items-center gap-2 mb-2">
          <ShieldAlert className="w-6 h-6 text-black fill-[#A0FF00]" />
          <span className="bg-[#A0FF00] text-black font-anton text-xs px-2.5 py-1 border border-black uppercase font-bold">
            DOCUMENTO LEGALE GROTTESCO E VINCOLANTE
          </span>
        </div>

        <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-black mb-4">
          BUROCRAZIA DELL'ALTER EGO
        </h2>

        {/* Tab Selector */}
        <div className="flex border-b-2 border-black mb-6 gap-2">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`font-anton text-sm sm:text-base px-4 py-2 border-t-2 border-x-2 border-black uppercase transition cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-black text-[#A0FF00] shadow-[2px_-2px_0px_#000]'
                : 'bg-white text-black hover:bg-[#A0FF00]'
            }`}
          >
            🔒 PRIVACY POLICY (GATTOCRATICA)
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`font-anton text-sm sm:text-base px-4 py-2 border-t-2 border-x-2 border-black uppercase transition cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-black text-[#A0FF00] shadow-[2px_-2px_0px_#000]'
                : 'bg-white text-black hover:bg-[#A0FF00]'
            }`}
          >
            📜 TERMINI D'USO GROTTESCHI
          </button>
        </div>

        {/* PRIVACY POLICY CONTENT */}
        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-black p-5 font-typewriter text-xs sm:text-sm text-neutral-800 space-y-4 shadow-[4px_4px_0px_#000]">
              <div className="border-b-2 border-black pb-2 flex items-center justify-between">
                <span className="font-bold text-black uppercase font-mono text-xs">REGOLAMENTO UE/GROTTESCO N. 402/2026</span>
                <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 font-bold">STRETTAMENTE RISERVATO</span>
              </div>

              <h3 className="font-anton text-xl uppercase text-black">1. QUALI DATI SEGRETI TI RUBIAMO SENZA CHIEDERE PERMESSO?</h3>
              <p>
                Navigando su <em>Cattivo Gusto</em>, accetti che l'Alter Ego e il suo tostapane di fiducia trattino i seguenti dati personali e meta-fisici:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                <li><strong>Impronte Digitali delle Briciole:</strong> Il peso medio delle briciole staccatesi dalla tua brioche e cadute sul divano nelle ultime 48 ore.</li>
                <li><strong>Frequenza dei Sospiri:</strong> La quantità di aria emessa con rassegnazione durante la lettura delle notizie di attualità.</li>
                <li><strong>Telepatia Feline:</strong> L'angolo preciso con cui il tuo gatto ti fissa mentre tenti di digitare sulla tastiera.</li>
                <li><strong>Coordinate del Vuoto Interiore:</strong> La posizione geografica e spirituale della tua noia domenicale.</li>
              </ul>

              <h3 className="font-anton text-xl uppercase text-black pt-2">2. FINALITÀ DEL TRATTAMENTO (O ASSENZA DI ESSO)</h3>
              <p>
                I tuoi dati non saranno mai venduti a terzi o ad agenzie pubblicitarie serie. Saranno invece trasmessi via radio-frequenza direttamente al frigorifero di un cittadino di Reykjavik per influenzare le sue decisioni sulla maionese.
              </p>

              <h3 className="font-anton text-xl uppercase text-black pt-2">3. I TUOI DIRITTI (DIRITTO ALL'OBLIO E ALLA CARTA STAGNOLA)</h3>
              <p>
                Hai il diritto inalienabile di richiedere la cancellazione di tutti i tuoi dati. Per farlo, dovrai pronunciare per tre volte di fila la parola <em>"Crocchetta"</em> di fronte allo specchio del bagno a mezzanotte mantenendo in mano un calzino spaiato.
              </p>
            </div>

            {/* Interactive Cookie Toggles */}
            <div className="bg-[#FFFEEB] border-2 border-black p-5 shadow-[4px_4px_0px_#000] space-y-3">
              <h4 className="font-anton text-lg uppercase text-black flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#A0FF00] fill-black" />
                <span>PANNELLO CONSENSO COOKIE ED ESTRONZI DIGITALI</span>
              </h4>

              <div className="space-y-2 font-mono text-xs">
                <label className="flex items-center justify-between bg-white border border-black p-2.5 cursor-pointer hover:bg-neutral-50">
                  <span>🍞 Cookie Briciole sul Divano (Obbligatori per la fisica)</span>
                  <input
                    type="checkbox"
                    checked={acceptedCookies.breadcrumbs}
                    onChange={() => toggleCookie('breadcrumbs')}
                    className="w-4 h-4 accent-black"
                  />
                </label>

                <label className="flex items-center justify-between bg-white border border-black p-2.5 cursor-pointer hover:bg-neutral-50">
                  <span>🐱 Monitoraggio Sguardo Sospettoso del Gatto</span>
                  <input
                    type="checkbox"
                    checked={acceptedCookies.catGaze}
                    onChange={() => toggleCookie('catGaze')}
                    className="w-4 h-4 accent-black"
                  />
                </label>

                <label className="flex items-center justify-between bg-white border border-black p-2.5 cursor-pointer hover:bg-neutral-50">
                  <span>⚡ Sincronizzazione Telepatica Tostapane-Router</span>
                  <input
                    type="checkbox"
                    checked={acceptedCookies.toasterTelepathy}
                    onChange={() => toggleCookie('toasterTelepathy')}
                    className="w-4 h-4 accent-black"
                  />
                </label>

                <label className="flex items-center justify-between bg-white border border-black p-2.5 cursor-pointer hover:bg-neutral-50">
                  <span>🌀 Angoscia Esistenziale di Ritorno (Consigliata)</span>
                  <input
                    type="checkbox"
                    checked={acceptedCookies.existentialDread}
                    onChange={() => toggleCookie('existentialDread')}
                    className="w-4 h-4 accent-black"
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* TERMS OF USE CONTENT */}
        {activeTab === 'terms' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-black p-5 font-typewriter text-xs sm:text-sm text-neutral-800 space-y-4 shadow-[4px_4px_0px_#000]">
              <div className="border-b-2 border-black pb-2 flex items-center justify-between">
                <span className="font-bold text-black uppercase font-mono text-xs">CONTRATTO DI ASSOGGETTAMENTO ALL'ASSURDO</span>
                <span className="text-[10px] bg-[#A0FF00] text-black px-2 py-0.5 font-bold border border-black">VERSICOLO 2026.1</span>
              </div>

              <h3 className="font-anton text-xl uppercase text-black">ARTICOLO I: LA NATURA DELL'ILLUSIONE</h3>
              <p>
                L'accesso a questo sito implica la presa d'atto che tutto ciò che leggete è stato scritto durante una trance provocata dal vapore dell'acqua della pasta bollita. Nessuna affermazione ha valore scientifico, legale o morale.
              </p>

              <h3 className="font-anton text-xl uppercase text-black pt-2">ARTICOLO II: OBBLIGHI DELL'UTENTE E DIVIETO DI SERIETÀ</h3>
              <p>
                È severamente vietato leggere la rivista <em>Cattivo Gusto</em> mantenendo un'espressione grave o cercando un senso logico negli articoli. Qualora l'utente dovesse riscontrare un sintomo di razionalità, è tenuto a chiudere la scheda e guardare una pianta per 3 minuti.
              </p>

              <h3 className="font-anton text-xl uppercase text-black pt-2">ARTICOLO III: CESSIONE TEMPORANEA DELL'ANIMA AL TOSTAPANE</h3>
              <p>
                Cliccando su qualsiasi bottone del sito, l'utente concede in comodato d'uso gratuito il proprio calzino sinistro all'Alter Ego. Il calzino verrà restituito entro il 2099 o smarrito definitivamente nell'oblio della lavatrice.
              </p>

              <h3 className="font-anton text-xl uppercase text-black pt-2">ARTICOLO IV: CLAUSOLA DI MANCATA DANNOSITÀ</h3>
              <p>
                La redazione non risponde di eventuali bruciature di toast, cadute improvvide di tazzine dal tavolo o discussioni filosofiche sorte con il proprio animale domestico durante la notte.
              </p>
            </div>
          </div>
        )}

        {/* Acceptance / Action Bottom Bar */}
        <div className="mt-8 pt-4 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-typewriter text-xs text-neutral-700">
            {isSigned ? (
              <span className="text-green-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-green-700" /> HAI UFFICIALMENTE CEDUTO IL TUO CALZINO SINISTRO!
              </span>
            ) : (
              <span>Premendo il bottone sotto, accetti solennemente il Caos e la Privacy Grottesca.</span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleAcceptAll}
              className="w-full sm:w-auto bg-[#A0FF00] text-black font-anton text-base px-6 py-2.5 border-2 border-black hover:bg-black hover:text-[#A0FF00] transition shadow-[3px_3px_0px_#000] cursor-pointer flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4 fill-black" />
              <span>{isSigned ? 'ACCETTATO SOLENNEMENTE!' : 'ACCETTA TUTTO IL CAOS'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
