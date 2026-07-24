import React from 'react';
import { X, Flame, Sparkles, CreditCard, Bookmark, Newspaper, Shield, FileText, ChevronRight, HelpCircle, Home } from 'lucide-react';
import { CATEGORIES } from '../data/articles';
import { CategoryId } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  activeView?: string;
  onGoHome?: () => void;
  onOpenManifesto: () => void;
  onOpenSubscriptions: () => void;
  onOpenChaosCorner: () => void;
  onOpenBookmarks: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms') => void;
  onOpenCookies?: () => void;
  onOpenGroqChat?: () => void;
  savedCount: number;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  onSelectCategory,
  activeView,
  onGoHome,
  onOpenManifesto,
  onOpenSubscriptions,
  onOpenChaosCorner,
  onOpenBookmarks,
  onOpenLegal,
  savedCount,
  onOpenCookies,
  onOpenGroqChat,
}) => {
  if (!isOpen) return null;

  const isHomeActive = !activeView || activeView === 'feed' || activeView === 'home';

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer Body */}
      <div className="relative w-full max-w-sm bg-[#F4F1EA] border-r-4 border-black h-full overflow-y-auto p-6 shadow-[10px_0px_0px_#000] flex flex-col justify-between z-10 animate-in slide-in-from-left duration-200">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black">
            <div>
              <h2 className="font-anton text-3xl uppercase tracking-tight text-black">
                Cattivo Gusto
              </h2>
              <span className="font-typewriter text-xs text-neutral-600 block">
                Menu Principale della Rivista
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 bg-black text-white hover:bg-[#A0FF00] hover:text-black border-2 border-black transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links inside Hamburger Menu */}
          <div className="space-y-2.5 mb-6">
            <button
              onClick={() => {
                if (onGoHome) {
                  onGoHome();
                } else {
                  onSelectCategory('tutti');
                }
                onClose();
              }}
              className={`w-full border-2 border-black p-3 font-anton text-base uppercase flex items-center justify-between transition shadow-[3px_3px_0px_#000] cursor-pointer ${
                isHomeActive 
                  ? 'bg-[#A0FF00] text-black font-bold ring-2 ring-black' 
                  : 'bg-white text-black hover:bg-[#A0FF00]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Home className="w-5 h-5 text-black" />
                <span>HOME / EDICOLA (PRIMA PAGINA)</span>
              </div>
              {isHomeActive ? (
                <span className="bg-black text-[#A0FF00] text-[10px] px-2 py-0.5 font-mono">
                  ATTIVO
                </span>
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => {
                onOpenSubscriptions();
                onClose();
              }}
              className="w-full bg-white text-black border-2 border-black p-3 font-anton text-base uppercase flex items-center justify-between hover:bg-black hover:text-white transition shadow-[3px_3px_0px_#000] cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                <span>ABBONAMENTI SURREALI</span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                onOpenManifesto();
                onClose();
              }}
              className="w-full bg-black text-white border-2 border-black p-3 font-anton text-base uppercase flex items-center justify-between hover:bg-[#A0FF00] hover:text-black transition shadow-[3px_3px_0px_#000]"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#A0FF00]" />
                <span>FIRMA IL MANIFESTO</span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>



            <button
              onClick={() => {
                onOpenChaosCorner();
                onClose();
              }}
              className="w-full bg-white border-2 border-black p-3 font-anton text-base uppercase flex items-center justify-between hover:bg-neutral-100 transition shadow-[3px_3px_0px_#000]"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span>L'ANGOLO DEL CAOS (MINI-APP)</span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                onOpenBookmarks();
                onClose();
              }}
              className="w-full bg-white border-2 border-black p-3 font-anton text-base uppercase flex items-center justify-between hover:bg-neutral-100 transition shadow-[3px_3px_0px_#000] cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5" />
                <span>ARTICOLI SALVATI ({savedCount})</span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Legal Absurd Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => {
                  onOpenLegal?.('privacy');
                  onClose();
                }}
                className="bg-neutral-100 border-2 border-black p-2 text-left font-anton text-xs uppercase hover:bg-[#A0FF00] hover:text-black transition cursor-pointer"
              >
                🔒 PRIVACY POLICY
              </button>
              <button
                onClick={() => {
                  onOpenLegal?.('terms');
                  onClose();
                }}
                className="bg-neutral-100 border-2 border-black p-2 text-left font-anton text-xs uppercase hover:bg-[#A0FF00] hover:text-black transition cursor-pointer"
              >
                📜 TERMINI D'USO
              </button>
            </div>

            {/* Cookie Preferences Trigger Button */}
            {onOpenCookies && (
              <button
                onClick={() => {
                  onOpenCookies();
                  onClose();
                }}
                className="w-full bg-[#A0FF00] text-black border-2 border-black p-2.5 font-anton text-xs uppercase flex items-center justify-between hover:bg-black hover:text-[#A0FF00] transition shadow-[2px_2px_0px_#000] cursor-pointer mt-2"
              >
                <span>🍪 GESTISCI COOKIE GROTTESCHI (24H)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Categories Header */}
          <div className="mb-3">
            <h3 className="font-anton text-xl uppercase tracking-wide border-b-2 border-black pb-1 mb-3">
              SEZIONI RIVISTA
            </h3>
            <div className="space-y-1.5">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onClose();
                    }}
                    className={`w-full text-left px-3 py-2 border-2 border-black font-anton text-sm uppercase flex items-center justify-between transition ${
                      isSelected 
                        ? 'bg-black text-[#A0FF00] translate-x-1 shadow-[2px_2px_0px_#A0FF00]' 
                        : 'bg-white hover:bg-[#A0FF00]/30 text-black'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{cat.badge}</span>
                      <span>{cat.label}</span>
                    </span>
                    {isSelected && <span className="text-xs font-mono">● ATTIVO</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer info in menu */}
        <div className="pt-6 border-t-2 border-black font-typewriter text-xs text-neutral-700 space-y-2">
          <p className="font-bold">Cattivo Gusto Press Ltd.</p>
          <p className="text-[11px]">
            Tutti i contenuti sono opera dell'Alter Ego. Qualsiasi somiglianza con la realtà è del tutto casuale e spiacevole.
          </p>
          <div className="text-[10px] text-neutral-500 pt-1">
            Build Mobile First • Redazione Absurdist Studio
          </div>
        </div>

      </div>
    </div>
  );
};
