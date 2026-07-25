import React from 'react';
import { Flame, Bookmark, CreditCard, HelpCircle, Shield, FileText, Cookie, Globe } from 'lucide-react';
import { SiteLanguageTranslator } from './SiteLanguageTranslator';

interface FooterProps {
  onOpenSubscriptions: () => void;
  onOpenManifesto: () => void;
  onGoHome?: () => void;
  onOpenBookmarks?: () => void;
  savedCount?: number;
  onOpenContacts?: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms') => void;
  onOpenCookies?: () => void;
  onOpenGroqChat?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSubscriptions,
  onOpenManifesto,
  onGoHome,
  onOpenBookmarks,
  savedCount = 0,
  onOpenContacts,
  onOpenLegal,
  onOpenCookies,
}) => {
  return (
    <footer className="bg-black text-[#F4F1EA] border-t-4 border-black pt-10 pb-20 md:pb-12 mt-16 font-typewriter">
      
      {/* Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-neutral-800">
        
        {/* Brand Info */}
        <div className="md:col-span-4 space-y-3">
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

        {/* Links & Tools Column 1: Services & Translators */}
        <div className="md:col-span-4 space-y-3">
          <h3 className="font-anton text-lg uppercase text-white tracking-wider border-b border-neutral-800 pb-1 mb-2">
            SERVIZI E UTILITY RIVISTA
          </h3>
          <ul className="space-y-2 text-xs text-neutral-300">
            {/* TRADUCI TESTO (REALE) */}
            <li className="bg-neutral-900 border border-neutral-800 p-2 rounded-none flex items-center justify-between">
              <span className="font-anton text-xs text-[#A0FF00] flex items-center gap-1.5 uppercase">
                <Globe className="w-4 h-4" /> TRADUCI SITO:
              </span>
              <SiteLanguageTranslator />
            </li>

            {/* ABBONAMENTI */}
            <li>
              <button 
                onClick={onOpenSubscriptions} 
                className="w-full text-left bg-neutral-900 hover:bg-[#A0FF00] hover:text-black border border-neutral-800 p-2 font-anton text-xs uppercase flex items-center gap-2 transition cursor-pointer"
              >
                <CreditCard className="w-4 h-4 text-[#A0FF00] group-hover:text-black" />
                <span>ABBONAMENTI SURREALI (€4,99)</span>
              </button>
            </li>

            {/* FIRMA MANIFESTO */}
            <li>
              <button 
                onClick={onOpenManifesto} 
                className="w-full text-left bg-neutral-900 hover:bg-[#A0FF00] hover:text-black border border-neutral-800 p-2 font-anton text-xs uppercase flex items-center gap-2 transition cursor-pointer"
              >
                <Flame className="w-4 h-4 text-[#FF2A00]" />
                <span>FIRMA IL MANIFESTO DELL'ASSURDO</span>
              </button>
            </li>

            {/* ARTICOLI SALVATI */}
            {onOpenBookmarks && (
              <li>
                <button 
                  onClick={onOpenBookmarks} 
                  className="w-full text-left bg-neutral-900 hover:bg-[#A0FF00] hover:text-black border border-neutral-800 p-2 font-anton text-xs uppercase flex items-center justify-between transition cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#A0FF00]" />
                    <span>ARTICOLI SALVATI</span>
                  </div>
                  <span className="bg-black text-[#A0FF00] text-[10px] px-1.5 py-0.5 font-mono border border-neutral-700">
                    {savedCount}
                  </span>
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Links & Tools Column 2: Legal, Contacts & Cookies */}
        <div className="md:col-span-4 space-y-3">
          <h3 className="font-anton text-lg uppercase text-white tracking-wider border-b border-neutral-800 pb-1 mb-2">
            CONTATTI & LEGALE
          </h3>
          <ul className="space-y-2 text-xs text-neutral-300">
            {/* CONTATTI */}
            {onOpenContacts && (
              <li>
                <button 
                  onClick={onOpenContacts} 
                  className="w-full text-left bg-neutral-900 hover:bg-[#A0FF00] hover:text-black border border-neutral-800 p-2 font-anton text-xs uppercase flex items-center gap-2 transition cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-yellow-400" />
                  <span>CONTATTI ASSURDI & SEGNALAZIONI</span>
                </button>
              </li>
            )}

            {/* PRIVACY POLICY */}
            <li>
              <button 
                onClick={() => onOpenLegal?.('privacy')} 
                className="w-full text-left bg-neutral-900 hover:bg-[#A0FF00] hover:text-black border border-neutral-800 p-2 font-anton text-xs uppercase flex items-center gap-2 transition cursor-pointer"
              >
                <Shield className="w-4 h-4 text-blue-400" />
                <span>PRIVACY POLICY GROTTESCA</span>
              </button>
            </li>

            {/* TERMINI D'USO */}
            <li>
              <button 
                onClick={() => onOpenLegal?.('terms')} 
                className="w-full text-left bg-neutral-900 hover:bg-[#A0FF00] hover:text-black border border-neutral-800 p-2 font-anton text-xs uppercase flex items-center gap-2 transition cursor-pointer"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>TERMINI D'USO DELL'ASSURDO</span>
              </button>
            </li>

            {/* GESTIONE COOKIES */}
            {onOpenCookies && (
              <li>
                <button 
                  onClick={onOpenCookies} 
                  className="w-full text-left bg-neutral-900 hover:bg-[#A0FF00] hover:text-black border border-neutral-800 p-2 font-anton text-xs uppercase flex items-center gap-2 transition cursor-pointer text-[#A0FF00]"
                >
                  <Cookie className="w-4 h-4 text-[#A0FF00]" />
                  <span>GESTIONE COOKIE GROTTESCHI (PANNELLO 24H)</span>
                </button>
              </li>
            )}
          </ul>
        </div>

      </div>

      {/* Satirical Note & Disclaimer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-neutral-900 border border-neutral-800 p-4 space-y-2">
          <span className="bg-[#A0FF00] text-black font-anton text-[10px] px-2 py-0.5 uppercase tracking-wider">
            DISCLAIMER ALTER EGO
          </span>
          <p className="text-[11px] text-neutral-300 leading-relaxed">
            I fatti narrati su Cattivo Gusto sono il frutto di allucinazioni condivise con elettrodomestici di classe A++. Nessun tostapane è stato maltrattato durante la stesura di questi articoli.
          </p>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
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

