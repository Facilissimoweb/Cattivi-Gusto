import React, { useState } from 'react';
import { Menu, Search, Volume2, VolumeX, Sparkles, Bookmark, Flame, ShieldAlert, X, Home } from 'lucide-react';

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
}) => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  const isHomeActive = activeTab === 'feed' || activeTab === 'home';

  return (
    <header className="sticky top-0 z-40 bg-[#F4F1EA] border-b-2 border-black shadow-[0_2px_0px_#000]">
      {/* Top Banner Ticker */}
      <div className="bg-black text-[#A0FF00] text-xs font-mono py-1 px-3 flex items-center justify-between overflow-hidden select-none">
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
          {onOpenCookies && (
            <button
              onClick={onOpenCookies}
              className="bg-[#A0FF00] text-black px-2 py-0.5 font-anton text-[10px] uppercase border border-black hover:bg-white transition cursor-pointer"
              title="Gestisci i Cookie Briciole e Telepatia (Scadenza 24h)"
            >
              🍪 COOKIE (24H)
            </button>
          )}

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

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Left Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-1.5 bg-black text-white px-3.5 py-2 border-2 border-black font-anton tracking-wider text-sm sm:text-base hover:bg-[#A0FF00] hover:text-black transition-all shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            aria-label="Apri Menu"
          >
            <Menu className="w-5 h-5" />
            <span>MENU</span>
          </button>

          {/* Chaos Audio Toggle */}
          <button
            onClick={onToggleChaosAudio}
            className={`p-2 border-2 border-black font-mono text-xs flex items-center gap-1 transition shadow-[2px_2px_0px_#000] cursor-pointer ${
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
          className="text-center cursor-pointer flex-1 group py-1" 
          onClick={() => setActiveTab('home')}
          title="Cattivo Gusto - Torna alla Home Page"
        >
          <h1 className="font-anton text-2xl sm:text-5xl md:text-6xl tracking-tight text-black uppercase leading-none select-none drop-shadow-[2px_2px_0px_#A0FF00] group-hover:scale-[1.01] transition-transform">
            Cattivo Gusto
          </h1>
          <p className="font-typewriter text-[10px] sm:text-xs md:text-sm text-neutral-800 tracking-wide mt-1 font-bold">
            La rivista che mancava a cura di alter ego
          </p>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={() => setShowSearchModal(true)}
            className="p-2 bg-white border-2 border-black hover:bg-[#A0FF00] transition shadow-[2px_2px_0px_#000]"
            title="Cerca tra le assurdistà"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </button>

          {/* Manifesto Quick Link */}
          <button
            onClick={onOpenManifesto}
            className="hidden sm:flex items-center gap-1.5 bg-[#A0FF00] text-black border-2 border-black px-3 py-1.5 font-anton text-xs sm:text-sm hover:bg-black hover:text-[#A0FF00] transition shadow-[2px_2px_0px_#000]"
          >
            <Flame className="w-4 h-4" />
            <span>FIRMA MANIFESTO</span>
          </button>

          {/* Bookmarks Counter */}
          <button
            onClick={onOpenBookmarks}
            className="relative p-2 bg-white border-2 border-black hover:bg-black hover:text-white transition shadow-[2px_2px_0px_#000]"
            title="I tuoi articoli salvati"
          >
            <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#A0FF00] text-black border-2 border-black font-anton text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Modal Overlay */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-start justify-center p-4 pt-20">
          <div className="bg-[#F4F1EA] border-4 border-black p-6 w-full max-w-xl shadow-[8px_8px_0px_#000] relative">
            <button
              onClick={() => setShowSearchModal(false)}
              className="absolute top-4 right-4 bg-black text-white p-1 hover:bg-[#A0FF00] hover:text-black transition border-2 border-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-anton text-2xl uppercase mb-2">CERCA NELL'ARCHIVIO DEL CAOS</h3>
            <p className="font-typewriter text-xs text-neutral-600 mb-4">
              Digita parole chiave come "gatto", "pane", "guru", "nulla" o "tostapane".
            </p>

            <div className="relative mb-4">
              <input
                type="text"
                autoFocus
                placeholder="Cosa vuoi sospettare oggi?..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-black px-4 py-3 font-mono text-base focus:outline-none focus:ring-2 focus:ring-[#A0FF00]"
              />
            </div>

            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-500">Risultati filtrati in tempo reale</span>
              <button
                onClick={() => {
                  setShowSearchModal(false);
                  setActiveTab('home');
                }}
                className="bg-black text-[#A0FF00] px-4 py-2 font-anton uppercase hover:bg-[#A0FF00] hover:text-black transition border-2 border-black"
              >
                VAI AGLI ARTICOLI
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
