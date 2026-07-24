import React from 'react';
import { Home, CreditCard, Flame, Sparkles, Bookmark } from 'lucide-react';

interface BottomNavMobileProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenManifesto: () => void;
  onOpenSubscriptions: () => void;
  onOpenChaosCorner: () => void;
  onOpenBookmarks: () => void;
  savedCount: number;
}

export const BottomNavMobile: React.FC<BottomNavMobileProps> = ({
  activeTab,
  setActiveTab,
  onOpenManifesto,
  onOpenSubscriptions,
  onOpenChaosCorner,
  onOpenBookmarks,
  savedCount,
}) => {
  const isHomeActive = activeTab === 'home' || activeTab === 'feed';

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black text-white border-t-2 border-black shadow-[0_-3px_0px_#000] px-2 py-1.5 flex items-center justify-around select-none">
      
      {/* Home / Edicola */}
      <button
        onClick={() => setActiveTab('home')}
        className={`flex flex-col items-center py-1 px-2.5 transition relative cursor-pointer ${
          isHomeActive ? 'text-[#A0FF00] font-bold scale-105' : 'text-neutral-400 hover:text-white'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="font-anton text-[10px] uppercase tracking-wider mt-0.5">HOME</span>
        {isHomeActive && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#A0FF00] mt-0.5 animate-pulse" />
        )}
      </button>

      {/* Abbonamenti */}
      <button
        onClick={onOpenSubscriptions}
        className={`flex flex-col items-center py-1 px-2 transition ${
          activeTab === 'subscriptions' ? 'text-[#A0FF00] font-bold' : 'text-neutral-400 hover:text-white'
        }`}
      >
        <CreditCard className="w-5 h-5" />
        <span className="font-anton text-[10px] uppercase tracking-wider mt-0.5">ABBONATI</span>
      </button>

      {/* Manifesto */}
      <button
        onClick={onOpenManifesto}
        className="flex flex-col items-center py-1 px-2 text-[#A0FF00] hover:scale-105 transition"
      >
        <Flame className="w-6 h-6 fill-[#A0FF00]" />
        <span className="font-anton text-[10px] uppercase tracking-wider mt-0.5 text-[#A0FF00]">MANIFESTO</span>
      </button>

      {/* Caos */}
      <button
        onClick={onOpenChaosCorner}
        className={`flex flex-col items-center py-1 px-2 transition ${
          activeTab === 'chaos' ? 'text-[#A0FF00] font-bold' : 'text-neutral-400 hover:text-white'
        }`}
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-anton text-[10px] uppercase tracking-wider mt-0.5">CAOS</span>
      </button>

      {/* Bookmarks */}
      <button
        onClick={onOpenBookmarks}
        className={`flex flex-col items-center py-1 px-2 relative transition ${
          activeTab === 'bookmarks' ? 'text-[#A0FF00] font-bold' : 'text-neutral-400 hover:text-white'
        }`}
      >
        <Bookmark className="w-5 h-5" />
        <span className="font-anton text-[10px] uppercase tracking-wider mt-0.5">SALVATI</span>
        {savedCount > 0 && (
          <span className="absolute top-0 right-1 bg-[#A0FF00] text-black font-anton text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {savedCount}
          </span>
        )}
      </button>

    </nav>
  );
};
