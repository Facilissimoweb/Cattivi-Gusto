import React from 'react';
import { Article } from '../types';
import { ArrowUpRight, Bookmark, Flame, Heart, MessageCircle, Send, Mail } from 'lucide-react';

interface HeroArticleCardProps {
  article: Article;
  onRead: (articleId: string) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string, e: React.MouseEvent) => void;
}

export const HeroArticleCard: React.FC<HeroArticleCardProps> = ({
  article,
  onRead,
  isSaved,
  onToggleSave,
}) => {
  const getArticleUrl = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.set('article', article.id);
      return url.toString();
    }
    return `https://cattivo-gusto.it/?article=${article.id}`;
  };

  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const waText = `${article.title}\n\n${getArticleUrl()}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`, '_blank', 'noopener,noreferrer');
  };

  const handleQuickTelegram = (e: React.MouseEvent) => {
    e.stopPropagation();
    const tgText = article.title;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(getArticleUrl())}&text=${encodeURIComponent(tgText)}`, '_blank', 'noopener,noreferrer');
  };

  const handleQuickEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    const subject = article.title;
    const body = `${article.title}\n\n${getArticleUrl()}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <article 
      onClick={() => onRead(article.id)}
      className="group relative bg-[#FAF8F5] border-3 border-black p-4 sm:p-6 shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] transition-all cursor-pointer overflow-hidden mb-8"
    >
      {/* Top Badge Ticker */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="bg-black text-[#A0FF00] font-anton text-xs sm:text-sm px-2.5 py-1 tracking-wider uppercase border border-black">
            🔥 ESCLUSIVA COPERTINA
          </span>
          <span className="font-typewriter text-xs text-neutral-600 font-bold">
            {article.categoryLabel} • {article.readTime}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleQuickWhatsApp}
            className="p-1.5 bg-[#25D366] text-white border-2 border-black hover:scale-110 transition cursor-pointer"
            title="Condividi su WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
          </button>
          <button
            onClick={handleQuickTelegram}
            className="p-1.5 bg-[#0088cc] text-white border-2 border-black hover:scale-110 transition cursor-pointer"
            title="Condividi su Telegram"
          >
            <Send className="w-4 h-4" />
          </button>
          <button
            onClick={handleQuickEmail}
            className="p-1.5 bg-black text-white border-2 border-black hover:scale-110 transition cursor-pointer"
            title="Condividi via Email"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => onToggleSave(article.id, e)}
            className={`p-1.5 border-2 border-black transition ${
              isSaved ? 'bg-[#A0FF00] text-black' : 'bg-white hover:bg-black hover:text-white'
            }`}
            title={isSaved ? 'Rimuovi dai salvati' : 'Salva articolo'}
          >
            <Bookmark className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Grid Layout for Hero */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Cutout Image with Neon Accent */}
        <div className="md:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-sm aspect-4/3 rounded-none overflow-hidden border-2 border-black bg-neutral-200">
            
            {/* Neon lime cutout glow outline */}
            <div className="absolute inset-0 border-4 border-[#A0FF00] pointer-events-none z-10 opacity-90 group-hover:scale-[1.02] transition-transform duration-300" />
            
            <img
              src={article.heroImage}
              alt={article.imageAlt}
              className="w-full h-full object-cover contrast-110 brightness-105 group-hover:scale-105 transition-all duration-300"
            />

            {/* Sticker Stamp */}
            <div className="absolute bottom-2 left-2 bg-[#A0FF00] text-black border-2 border-black font-anton text-xs px-2 py-0.5 uppercase rotate-[-3deg] shadow-[2px_2px_0px_#000]">
              DOCUMENTO RISERVATO
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="font-anton text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black leading-[0.95] mb-3 group-hover:text-black transition">
              {article.title}
            </h2>

            <p className="font-typewriter text-sm sm:text-base text-neutral-800 leading-relaxed mb-6 font-semibold border-l-3 border-[#A0FF00] pl-3">
              {article.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRead(article.id);
                }}
                className="bg-[#A0FF00] text-black border-2 border-black px-6 py-2.5 font-anton text-lg sm:text-xl uppercase tracking-wider flex items-center gap-2 hover:bg-black hover:text-[#A0FF00] transition shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>LEGGI ORA</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            <div className="font-mono text-xs text-neutral-600 flex items-center gap-3">
              <span className="flex items-center gap-1 font-bold">
                <Heart className="w-4 h-4 text-red-600 fill-red-600" />
                {article.likesCount} Reazioni
              </span>
              <span>•</span>
              <span>A cura di {article.author}</span>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};
