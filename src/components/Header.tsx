import React, { useState } from 'react';
import { Menu, Search, Volume2, VolumeX, Sparkles, Bookmark, Flame, ShieldAlert, X, Home, MessageSquare } from 'lucide-react';
import { SiteLanguageTranslator } from './SiteLanguageTranslator';

interface HeaderProps {
  onOpenMenu: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenManifesto: () => void;
  onOpenSubscriptions: () => void;
  savedCount: number;
  onOpenBookmarks: () => void;
  isChaosAudioActive: boolean;
  onToggleChaosAudio: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isSubscribed: boolean;
  onOpenCookies?: () => void;
  onOpenGroqChat?: () => void;
  onOpenTranslator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  activeTab,
  setActiveTab,
  onOpenManifesto,
  onOpenSubscriptions,
  savedCount,
  onOpenBookmarks,
  isChaosAudioActive,
  onToggleChaosAudio,
  searchQuery,
  setSearchQuery,
  isSubscribed,
  onOpenCookies,
  onOpenGroqChat,
  onOpenTranslator,
}) => {
  const isHomeActive = activeTab === 'feed' || activeTab === 'home';

  return (
    <header className="sticky top-0 z-40 bg-[#F4F1EA] border-b-2 border-black shadow-[0_2px_0px_#000]">
      {/* Top Banner Ticker */}
      <div className="bg-black text-[#A0FF00] text-xs font-mono py-1 px-2 sm:px-3 flex items-center justify-between overflow-hidden select-none">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-6 font-semibold">
          <span>🔥 ULTIM'ORA: IL TUO GATTO TI STA GUARDANDO IN QUESTO MOMENTO.</span>
          <span>•</span>
          <span>⚡ CATTIVO GUSTO N. 42: "PANE E DISPERAZIONE" IN EDICOLA.</span>
          <span>•</span>
          <span>🔮 OROSCOPO TOSTAPANE: RISCHIO SCOTTATURA ASIMMETRICA.</span>
          <span>•</span>
          <span>✍️ MANIFESTO DELL'ASSURDO: OLTRE 1.000 FIRME UTILI AL NULLA.</span>
        </div>
        <div className="hidden md:flex items-center gap-3 shrink-0 ml-4 font-sans text-white text-[11px]">
          {isSubscribed ? (
            <span className="bg-[#A0FF00] text-black px-2 py-0.5 rounded font-black text-[10px] uppercase tracking-wider">
              VIP CAOS ATTIVO
            </span>
          ) : (
            <button
              onClick={onOpenSubscriptions}
              className="hover:text-[#A0FF00] transition underline cursor-pointer"
            >
              Abbonati (€4,99/m)
            </button>
          )}
        </div>
      </div>

      {/* Main Header Container - Mobile First Optimized */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 flex items-center justify-between gap-2 sm:gap-4 overflow-hidden">
        
        {/* Left Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-1 bg-black text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 border-2 border-black font-anton tracking-wider text-xs sm:text-base hover:bg-[#A0FF00] hover:text-black transition-all shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer whitespace-nowrap"
            aria-label="Apri Menu"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>MENU</span>
          </button>

          {/* Chaos Audio Toggle - Icon only on mobile to save horizontal space */}
          <button
            onClick={onToggleChaosAudio}
            className={`p-1.5 sm:p-2 border-2 border-black font-mono text-xs flex items-center gap-1 transition shadow-[2px_2px_0px_#000] cursor-pointer ${
              isChaosAudioActive 
                ? 'bg-[#A0FF00] text-black font-bold animate-pulse' 
                : 'bg-white hover:bg-neutral-100 text-black'
            }`}
            title={isChaosAudioActive ? 'Disattiva Audio del Caos' : 'Attiva Audio del Caos'}
          >
            {isChaosAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-neutral-500" />}
            <span className="hidden lg:inline">{isChaosAudioActive ? 'AUDIO CAOS' : 'AUDIO OFF'}</span>
          </button>
        </div>

        {/* Center Logo & Tagline */}
        <div 
          className="text-center cursor-pointer flex-1 min-w-0 px-1 py-0.5 group" 
          onClick={() => setActiveTab('home')}
          title="Cattivo Gusto - Torna alla Home Page"
        >
          <h1 className="font-anton text-xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-black uppercase leading-none select-none drop-shadow-[1.5px_1.5px_0px_#A0FF00] group-hover:scale-[1.01] transition-transform truncate sm:overflow-visible">
            Cattivo Gusto
          </h1>
          <p className="font-typewriter text-[9px] sm:text-xs text-neutral-800 tracking-wide mt-0.5 font-bold truncate">
            La rivista che mancava a cura di alter ego
          </p>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Real Google Translate Site Language Selector */}
          <SiteLanguageTranslator />

          {onOpenTranslator && (
            <button
              onClick={onOpenTranslator}
              className="hidden md:flex items-center gap-1 bg-white text-black border-2 border-black px-2.5 py-1.5 font-anton text-xs hover:bg-[#A0FF00] transition shadow-[2px_2px_0px_#000] cursor-pointer whitespace-nowrap"
              title="Traduttore di lingue strane sotto il cofano"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>TRADUTTORE</span>
            </button>
          )}

          {/* Manifesto Quick Link - Shown only on desktop to keep mobile navbar clean */}
          <button
            onClick={onOpenManifesto}
            className="hidden lg:flex items-center gap-1.5 bg-[#A0FF00] text-black border-2 border-black px-3 py-1.5 font-anton text-xs sm:text-sm hover:bg-black hover:text-[#A0FF00] transition shadow-[2px_2px_0px_#000] cursor-pointer whitespace-nowrap"
          >
            <Flame className="w-4 h-4" />
            <span>FIRMA MANIFESTO</span>
          </button>

          {/* Bookmarks Counter */}
          <button
            onClick={onOpenBookmarks}
            className="relative p-1.5 sm:p-2 bg-white border-2 border-black hover:bg-black hover:text-white transition shadow-[2px_2px_0px_#000] cursor-pointer"
            title="I tuoi articoli salvati"
          >
            <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#A0FF00] text-black border-2 border-black font-anton text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-bold">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Direct Integrated Search Bar Strip */}
      <div className="bg-[#EFECE6] border-t-2 border-black px-2 sm:px-4 py-1.5 flex items-center justify-center">
        <div className="max-w-3xl w-full relative flex items-center">
          <Search className="w-4 h-4 text-black absolute left-3 pointer-events-none shrink-0" />
          <input
            type="text"
            placeholder="🔍 Cerca nell'archivio (es. gatto, pane, guru, tostapane, nulla)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-2 border-black pl-9 pr-8 py-1 sm:py-1.5 text-xs sm:text-sm font-mono placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#A0FF00] shadow-[2px_2px_0px_#000]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 text-black hover:bg-black hover:text-white rounded-full p-0.5 transition cursor-pointer"
              title="Svuota ricerca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
