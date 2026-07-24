import React, { useRef, useState, useEffect } from 'react';
import { X, Flame, Download, Check, RefreshCw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManifestoModal: React.FC<ManifestoModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [signerName, setSignerName] = useState('');
  const [selectedTitle, setSelectedTitle] = useState("Grand'Ufficiale delle Briciole");
  const [signedCertificate, setSignedCertificate] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Drawing Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx?.beginPath();
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleSignManifesto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signerName.trim()) {
      alert("Firma obbligatoria! Digita il tuo nome o pseudonimo.");
      return;
    }

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });

    const certCode = `MANIFESTO-${Math.floor(1000 + Math.random() * 9000)}-CG`;
    setSignedCertificate(certCode);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#F4F1EA] border-4 border-black p-6 sm:p-8 w-full max-w-2xl shadow-[12px_12px_0px_#000] relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black text-white p-1.5 border-2 border-black hover:bg-[#A0FF00] hover:text-black transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!signedCertificate ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-6 h-6 text-black fill-[#A0FF00]" />
              <span className="bg-[#A0FF00] text-black font-anton text-xs px-2.5 py-1 border border-black uppercase font-bold">
                DOCUMENTO SOLENNE UFFICIALE
              </span>
            </div>

            <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-black mb-3">
              MANIFESTO DELL'ASSURDO
            </h2>

            {/* Articles of the Manifesto */}
            <div className="bg-white border-2 border-black p-4 sm:p-5 font-typewriter text-xs sm:text-sm space-y-3 mb-6 shadow-[3px_3px_0px_#000] max-h-48 overflow-y-auto">
              <p><strong>Articolo 1 (Rifiuto della Logica):</strong> Dichiaro solennemente che il lunedì mattina è una costruzione mentale non comprovata da dati fisici.</p>
              <p><strong>Articolo 2 (Uguaglianza degli Elettrodomestici):</strong> Riconosco alla mia lampada da tavolo il diritto di spegnersi quando è stanca di illuminare la mia noia.</p>
              <p><strong>Articolo 3 (Diritto al Caos):</strong> Qualsiasi risposta a domande serie può consistere in un 'Mah' accompagnato da uno sguardo rivolto al soffitto.</p>
              <p><strong>Articolo 4 (Ispettorato Feline):</strong> Accetto che il mio gatto sia l'amministratore unico di questa abitazione.</p>
            </div>

            {/* Signature Form */}
            <form onSubmit={handleSignManifesto} className="space-y-4">
              <div>
                <label className="block font-anton text-sm uppercase mb-1">
                  IL TUO NOME O PSEUDONIMO
                </label>
                <input
                  type="text"
                  required
                  placeholder="Es. Mario Rossi / Alter Ego #402"
                  value={signerName}
                  onChange={(e) => setSignerName(e.target.value)}
                  className="w-full bg-white border-2 border-black p-3 font-mono text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-anton text-sm uppercase mb-1">
                  TITOLO ONORIFICO RIVENDICATO
                </label>
                <select
                  value={selectedTitle}
                  onChange={(e) => setSelectedTitle(e.target.value)}
                  className="w-full bg-white border-2 border-black p-3 font-mono text-sm focus:outline-none"
                >
                  <option value="Grand'Ufficiale delle Briciole">Grand'Ufficiale delle Briciole</option>
                  <option value="Ispettore del Tostapane">Ispettore del Tostapane</option>
                  <option value="Cospiratore Felino Livello 5">Cospiratore Felino Livello 5</option>
                  <option value="Custode del Vuoto Interiore">Custode del Vuoto Interiore</option>
                  <option value="Guru del Nulla Certificato">Guru del Nulla Certificato</option>
                </select>
              </div>

              {/* Canvas Signature Pad */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-anton text-sm uppercase">
                    FIRMA MANUALE (DISEGNA COL DITO O MOUSE)
                  </label>
                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="text-[11px] font-mono underline hover:text-red-600 cursor-pointer"
                  >
                    Pulisci Firma 🗑️
                  </button>
                </div>
                <div className="bg-white border-2 border-black h-28 relative cursor-crosshair">
                  <canvas
                    ref={canvasRef}
                    width={500}
                    height={110}
                    onMouseDown={startDrawing}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onMouseMove={draw}
                    onTouchStart={startDrawing}
                    onTouchEnd={stopDrawing}
                    onTouchMove={draw}
                    className="w-full h-full"
                  />
                  <span className="absolute bottom-2 right-2 text-[10px] font-typewriter text-neutral-400 pointer-events-none">
                    Firma qui ✍️
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#A0FF00] text-black font-anton text-lg py-3 uppercase border-2 border-black hover:bg-black hover:text-[#A0FF00] transition shadow-[4px_4px_0px_#000]"
              >
                SOTTOSCRIVI SOLENNEMENTE ORA
              </button>
            </form>
          </div>
        ) : (
          /* Certified Result */
          <div className="text-center space-y-4">
            <div className="bg-[#A0FF00] text-black font-anton text-xs px-3 py-1 border border-black inline-block uppercase">
              CERTIFICATO DI IRRILEVANZA EMESSO!
            </div>

            <div className="bg-white border-3 border-black p-6 shadow-[6px_6px_0px_#000] text-left space-y-4 relative">
              <div className="border-b-2 border-black pb-3 flex justify-between items-start">
                <div>
                  <h3 className="font-anton text-3xl uppercase text-black leading-none">
                    ATTO DI FIRMA MANIFESTO
                  </h3>
                  <span className="font-typewriter text-xs text-neutral-600">Cattivo Gusto Archives • {signedCertificate}</span>
                </div>
                <Award className="w-10 h-10 text-black shrink-0" />
              </div>

              <div className="font-typewriter text-sm space-y-2 text-neutral-800">
                <p>Si certifica che l'individuo <strong>{signerName}</strong> ha ufficialmente sottoscritto il Manifesto dell'Assurdo con il titolo di:</p>
                <div className="bg-black text-[#A0FF00] p-3 font-anton text-xl uppercase border-2 border-black tracking-wider text-center">
                  {selectedTitle}
                </div>
                <p className="text-xs text-neutral-600">
                  Da questo momento, l'interessato è esonerato da qualsiasi obbligo di dare spiegazioni logiche sui propri acquisti notturni.
                </p>
              </div>

              <div className="pt-3 border-t-2 border-black flex justify-between items-center text-xs font-mono">
                <span>FIRMATO IL: {new Date().toLocaleDateString('it-IT')}</span>
                <span>REGISTRO DEL CAOS #42</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <button
                onClick={() => {
                  setSignedCertificate(null);
                  onClose();
                }}
                className="bg-black text-[#A0FF00] font-anton text-base px-6 py-2.5 border-2 border-black hover:bg-[#A0FF00] hover:text-black transition shadow-[3px_3px_0px_#000]"
              >
                CHIUDI E TORNA ALL'EDICOLA
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
