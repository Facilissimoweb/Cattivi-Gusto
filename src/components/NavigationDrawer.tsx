import React from 'react';
import { X, ChevronRight, Home, GraduationCap, Sparkles, BookOpen } from 'lucide-react';
import { CATEGORIES } from '../data/articles';
import { CategoryId } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  activeView?: string;
  onGoHome?: () => void;
  onOpenCourses?: (courseId?: 'marcus' | 'teresa' | null) => void;
  onOpenManifesto?: () => void;
  onOpenSubscriptions?: () => void;
  onOpenBookmarks?: () => void;
  onOpenContacts?: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms') => void;
  onOpenCookies?: () => void;
  onOpenGroqChat?: () => void;
  savedCount?: number;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  onSelectCategory,
  activeView,
  onGoHome,
  onOpenCourses,
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

          {/* 1. HOME BUTTON */}
          <div className="mb-6">
            <button
              onClick={() => {
                if (onGoHome) {
                  onGoHome();
                } else {
                  onSelectCategory('tutti');
                }
                onClose();
              }}
              className={`w-full border-2 border-black p-3.5 font-anton text-base uppercase flex items-center justify-between transition shadow-[3px_3px_0px_#000] cursor-pointer ${
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
          </div>

          {/* 2. SEZIONI RIVISTA */}
          <div className="mb-6">
            <h3 className="font-anton text-xl uppercase tracking-wide border-b-2 border-black pb-1 mb-3 flex items-center justify-between">
              <span>SEZIONI RIVISTA</span>
              <span className="text-xs font-mono bg-black text-[#A0FF00] px-2 py-0.5">CATEGORIE</span>
            </h3>
            <div className="space-y-2">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onClose();
                    }}
                    className={`w-full text-left px-3.5 py-2.5 border-2 border-black font-anton text-sm uppercase flex items-center justify-between transition shadow-[2px_2px_0px_#000] cursor-pointer ${
                      isSelected 
                        ? 'bg-black text-[#A0FF00] translate-x-1 shadow-[3px_3px_0px_#A0FF00]' 
                        : 'bg-white hover:bg-[#A0FF00] text-black'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base">{cat.badge}</span>
                      <span>{cat.label}</span>
                    </span>
                    {isSelected && <span className="text-xs font-mono">● ATTIVO</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. I NOSTRI CORSI */}
          <div className="mb-6">
            <h3 className="font-anton text-xl uppercase tracking-wide border-b-2 border-black pb-1 mb-3 flex items-center justify-between">
              <span>🎓 I NOSTRI CORSI</span>
              <span className="text-xs font-mono bg-[#A0FF00] text-black px-2 py-0.5 border border-black font-bold">ACADEMY</span>
            </h3>
            
            <div className="space-y-2">
              {/* Main Courses Link */}
              <button
                onClick={() => {
                  onOpenCourses?.(null);
                  onClose();
                }}
                className={`w-full text-left px-3.5 py-2.5 border-2 border-black font-anton text-sm uppercase flex items-center justify-between transition shadow-[2px_2px_0px_#000] cursor-pointer ${
                  activeView === 'courses' 
                    ? 'bg-[#A0FF00] text-black font-bold' 
                    : 'bg-[#FAF8F5] hover:bg-[#A0FF00] text-black'
                }`}
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-black" />
                  <span>🎓 TUTTI I NOSTRI CORSI</span>
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Course 1: Coach Marcus */}
              <button
                onClick={() => {
                  onOpenCourses?.('marcus');
                  onClose();
                }}
                className="w-full text-left pl-6 pr-3 py-2 border-2 border-black font-anton text-xs uppercase flex items-center justify-between transition bg-white hover:bg-[#A0FF00] text-black shadow-[2px_2px_0px_#000] cursor-pointer"
              >
                <span className="flex items-center gap-2 font-bold">
                  <span>1)</span>
                  <span>CORSO CON COACH MARCUS</span>
                </span>
                <span className="text-[10px] font-mono bg-black text-[#A0FF00] px-1.5 py-0.5">LOGORREA</span>
              </button>

              {/* Course 2: Tarocchi Cubisti Teresa */}
              <button
                onClick={() => {
                  onOpenCourses?.('teresa');
                  onClose();
                }}
                className="w-full text-left pl-6 pr-3 py-2 border-2 border-black font-anton text-xs uppercase flex items-center justify-between transition bg-white hover:bg-[#A0FF00] text-black shadow-[2px_2px_0px_#000] cursor-pointer"
              >
                <span className="flex items-center gap-2 font-bold">
                  <span>2)</span>
                  <span>TAROCCHI CUBISTI (TERESA)</span>
                </span>
                <span className="text-[10px] font-mono bg-black text-[#A0FF00] px-1.5 py-0.5">ESOTERICO</span>
              </button>
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

