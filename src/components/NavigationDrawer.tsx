import React from 'react';
import { X, Flame, Sparkles, CreditCard, Bookmark, Newspaper, Shield, FileText, ChevronRight, HelpCircle } from 'lucide-react';
import { CATEGORIES } from '../data/articles';
import { CategoryId } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  onOpenManifesto: () => void;
  onOpenSubscriptions: () => void;
  onOpenChaosCorner: () => void;
  onOpenBookmarks: () => void;
  savedCount: number;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  onSelectCategory,
  onOpenManifesto,
  onOpenSubscriptions,
  onOpenChaosCorner,
  onOpenBookmarks,
  savedCount,
}) => {
  if (!isOpen) return null;

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
                Menu della Redazione
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 bg-black text-white hover:bg-[#A0FF00] hover:text-black border-2 border-black transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Special Quick Actions */}
          <div className="space-y-2 mb-6">
            <button
              onClick={() => {
                onOpenSubscriptions();
                onClose();
              }}
              className="w-full bg-[#A0FF00] text-black border-2 border-black p-3 font-anton text-base uppercase flex items-center justify-between hover:bg-black hover:text-[#A0FF00] transition shadow-[3px_3px_0px_#000]"
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
              className="w-full bg-white border-2 border-black p-3 font-anton text-base uppercase flex items-center justify-between hover:bg-neutral-100 transition shadow-[3px_3px_0px_#000]"
            >
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5" />
                <span>ARTICOLI SALVATI ({savedCount})</span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>
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
