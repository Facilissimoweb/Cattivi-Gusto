import React from 'react';
import { Flame, Heart } from 'lucide-react';

interface FooterProps {
  onOpenSubscriptions: () => void;
  onOpenManifesto: () => void;
  onOpenChaosCorner: () => void;
  onGoHome?: () => void;
  onOpenContacts?: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms') => void;
  onOpenCookies?: () => void;
  onOpenGroqChat?: () => void;
  onOpenTranslator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSubscriptions,
  onOpenManifesto,
  onOpenChaosCorner,
  onGoHome,
  onOpenContacts,
  onOpenLegal,
  onOpenCookies,
  onOpenGroqChat,
  onOpenTranslator,
}) => {
  return (
    <footer className="bg-black text-[#F4F1EA] border-t-4 border-black pt-10 pb-20 md:pb-12 mt-16 font-typewriter">
      
      {/* Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-neutral-800">
        
        {/* Brand Info */}
        <div className="md:col-span-5 space-y-3">
          <h2 
            onClick={onGoHome}
            className="font-anton text-4xl uppercase text-[#A0FF00] tracking-tight cursor-pointer hover:underline"
            title="Torna in Edicola (Home)"
          >
            CATTIVO GUSTO
          </h2>
          <p className="font-typewriter text-xs text-neutral-400 leading-relaxed max-w-sm">
            La rivista che mancava a cura di alter ego. Pubblicazione indipendente consacrata al giornalismo surreale, all'indagine felina e all'estetica del caos.
          </p>
          <div className="text-[11px] text-neutral-500">
            Sede Operativa: Nel Vuoto Interiore • Edizione Digitale Mobile-First
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-2">
          <h3 className="font-anton text-lg uppercase text-white tracking-wider border-b border-neutral-800 pb-1 mb-2">
            SEZIONI CAOTICHE
          </h3>
          <ul className="space-y-1.5 text-xs text-neutral-300">

            {onOpenTranslator && (
              <li>
                <button onClick={onOpenTranslator} className="hover:text-[#A0FF00] transition text-[#A0FF00] font-bold flex items-center gap-1">
                  🔧 Traduttore Sotto il Cofano (Lingue Strane)
                </button>
              </li>
            )}
            {onOpenContacts && (
              <li>
                <button onClick={onOpenContacts} className="hover:text-[#A0FF00] transition text-yellow-200 font-bold flex items-center gap-1">
                  📞 Contatti Assurdi & Segnalazioni al Vuoto
                </button>
              </li>
            )}
            <li>
              <button onClick={onOpenSubscriptions} className="hover:text-[#A0FF00] transition">
                Abbonamenti VIP (€4,99)
              </button>
            </li>
            <li>
              <button onClick={onOpenManifesto} className="hover:text-[#A0FF00] transition">
                Manifesto dell'Assurdo (Firma Qui)
              </button>
            </li>
            <li>
              <button onClick={onOpenChaosCorner} className="hover:text-[#A0FF00] transition">
                Guru del Nulla in 5 Minuti
              </button>
            </li>
            <li>
              <button onClick={() => onOpenLegal?.('privacy')} className="hover:text-[#A0FF00] transition underline text-yellow-300">
                🔒 Privacy Policy Grottesca
              </button>
            </li>
            <li>
              <button onClick={() => onOpenLegal?.('terms')} className="hover:text-[#A0FF00] transition underline text-yellow-300">
                📜 Termini d'Uso dell'Assurdo
              </button>
            </li>
            {onOpenCookies && (
              <li>
                <button onClick={onOpenCookies} className="hover:text-[#A0FF00] transition underline text-[#A0FF00] font-bold">
                  🍪 Cookie Grotteschi (Pannello 24h)
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Satirical Note */}
        <div className="md:col-span-4 bg-neutral-900 border border-neutral-800 p-4 space-y-2">
          <span className="bg-[#A0FF00] text-black font-anton text-[10px] px-2 py-0.5 uppercase tracking-wider">
            DISCLAIMER ALTER EGO
          </span>
          <p className="text-[11px] text-neutral-300 leading-relaxed">
            I fatti narrati su Cattivo Gusto sono il frutto di allucinazioni condivise con elettrodomestici di classe A++. Nessun tostapane è stato maltrattato durante la stesura di questi articoli.
          </p>
        </div>

      </div>

      {/* Bottom Copyright Bar matching Screenshot 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
        <div>
          © 2024–2026 Cattivo Gusto. Tutti i diritti riservati (forse).
        </div>

        <div className="flex items-center gap-4 text-white font-mono text-xs">
          <span className="text-[#A0FF00]">BUILD MOBILE FIRST</span>
          <span>•</span>
          <span>ALTER EGO APPROVED</span>
        </div>
      </div>

    </footer>
  );
};
