import React from 'react';
import { Home, CreditCard, Flame, Sparkles, Bookmark } from 'lucide-react';

interface BottomNavMobileProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenManifesto: () => void;
  onOpenSubscriptions: () => void;
  onOpenBookmarks: () => void;
  onOpenGroqChat?: () => void;
  savedCount: number;
}

export const BottomNavMobile: React.FC<BottomNavMobileProps> = ({
  activeTab,
  setActiveTab,
  onOpenManifesto,
  onOpenSubscriptions,
  onOpenBookmarks,
  onOpenGroqChat,
  savedCount,
}) => {
  const isHomeActive = activeTab === 'home' || activeTab === 'feed';

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black text-white border-t-2 border-black shadow-[0_-3px_0px_#000] px-1 py-1.5 flex items-center justify-around select-none">
      
      {/* Home / Edicola */}
      <button
        onClick={() => setActiveTab('home')}
        className={`flex flex-col items-center py-1 px-1.5 transition relative cursor-pointer ${
          isHomeActive ? 'text-[#A0FF00] font-bold scale-105' : 'text-neutral-400 hover:text-white'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="font-anton text-[9px] uppercase tracking-wider mt-0.5">HOME</span>
        {isHomeActive && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#A0FF00] mt-0.5 animate-pulse" />
        )}
      </button>

      {/* Manifesto */}
      <button
        onClick={onOpenManifesto}
        className="flex flex-col items-center py-1 px-1.5 text-white hover:scale-105 transition cursor-pointer"
      >
        <Flame className="w-5 h-5 text-red-500 fill-red-500" />
        <span className="font-anton text-[9px] uppercase tracking-wider mt-0.5">MANIFESTO</span>
      </button>

      {/* Abbonati */}
      <button
        onClick={onOpenSubscriptions}
        className={`flex flex-col items-center py-1 px-1.5 transition cursor-pointer ${
          activeTab === 'subscriptions' ? 'text-[#A0FF00] font-bold' : 'text-neutral-400 hover:text-white'
        }`}
      >
        <CreditCard className="w-5 h-5 text-yellow-400" />
        <span className="font-anton text-[9px] uppercase tracking-wider mt-0.5">VIP</span>
      </button>

      {/* Bookmarks */}
      <button
        onClick={onOpenBookmarks}
        className={`flex flex-col items-center py-1 px-1.5 relative transition cursor-pointer ${
          activeTab === 'bookmarks' ? 'text-[#A0FF00] font-bold' : 'text-neutral-400 hover:text-white'
        }`}
      >
        <Bookmark className="w-5 h-5" />
        <span className="font-anton text-[9px] uppercase tracking-wider mt-0.5">SALVATI</span>
        {savedCount > 0 && (
          <span className="absolute top-0 right-0 bg-[#A0FF00] text-black font-anton text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {savedCount}
          </span>
        )}
      </button>

    </nav>
  );
};
