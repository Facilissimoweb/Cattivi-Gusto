import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';

interface FloatingNuvolettaGroqProps {
  onClick: () => void;
  activeView: string;
}

export const FloatingNuvolettaGroq: React.FC<FloatingNuvolettaGroqProps> = ({ onClick, activeView }) => {
  // Hide when already inside the chat view
  if (activeView === 'groq_chat') return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 flex flex-col items-end group animate-fade-in">
      {/* Mini comic label above bubble */}
      <div className="bg-black text-[#A0FF00] font-mono text-[10px] uppercase font-bold px-2 py-0.5 mb-1 border border-black shadow-[2px_2px_0px_#000] hidden sm:flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-[#A0FF00] fill-[#A0FF00]" />
        <span>GROQ_API_KEY ENGINE</span>
      </div>

      {/* Classic Comic Speech Bubble ("Nuvoletta Classica") */}
      <button
        onClick={onClick}
        aria-label="Apri Chat Groq AI - Nuvoletta Classica"
        className="relative bg-[#A0FF00] text-black font-anton text-xs sm:text-sm px-4 py-2.5 rounded-2xl border-2 sm:border-3 border-black shadow-[4px_4px_0px_#000] hover:bg-black hover:text-[#A0FF00] transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 select-none"
      >
        {/* Pulsing online badge */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-600 border-2 border-black rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-600 border-2 border-black rounded-full" />

        {/* Speech Bubble Icon */}
        <MessageSquare className="w-5 h-5 fill-black group-hover:fill-[#A0FF00] transition-colors" />

        <span className="uppercase tracking-wider font-bold">CHAT GROQ AI</span>

        {/* Classic Speech Bubble Tail (Coda della Nuvoletta) */}
        <div className="absolute -bottom-2 right-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[9px] border-t-black" />
        <div className="absolute -bottom-[5px] right-[21px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-[#A0FF00] group-hover:border-t-black transition-colors" />
      </button>
    </div>
  );
};
