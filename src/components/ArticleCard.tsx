import React from 'react';
import { Article } from '../types';
import { ArrowUpRight, Bookmark, Flame, Heart, Share2, MessageCircle, Send, Mail } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onRead: (articleId: string) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string, e: React.MouseEvent) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onRead,
  isSaved,
  onToggleSave,
}) => {
  const getArticleUrl = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('article', article.id);
      return url.toString();
    }
    return `https://cattivo-gusto.it/articolo/${article.id}`;
  };

  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const briefSummary = article.content.intro || article.subtitle;
    const waText = `📰 *${article.title}*\n\n_${article.subtitle}_\n\n📝 *Riassunto*: ${briefSummary}\n\n🖼️ *Immagine*: ${article.heroImage}\n\n🔗 ${getArticleUrl()}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`, '_blank', 'noopener,noreferrer');
  };

  const handleQuickTelegram = (e: React.MouseEvent) => {
    e.stopPropagation();
    const briefSummary = article.content.intro || article.subtitle;
    const tgText = `📰 ${article.title}\n\n${article.subtitle}\n\n📝 Riassunto: ${briefSummary}\n\n🖼️ Foto: ${article.heroImage}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(getArticleUrl())}&text=${encodeURIComponent(tgText)}`, '_blank', 'noopener,noreferrer');
  };

  const handleQuickEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    const briefSummary = article.content.intro || article.subtitle;
    const subject = `📰 [Cattivo Gusto] ${article.title}`;
    const body = `Ciao!\n\nTi consiglio questo articolo su Cattivo Gusto:\n\n📰 ${article.title}\n${article.subtitle}\n\n📝 RIASSUNTO:\n${briefSummary}\n\n🖼️ IMMAGINE DI RIFERIMENTO:\n${article.heroImage}\n\n🔗 LEGGI L'ARTICOLO:\n${getArticleUrl()}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <article
      onClick={() => onRead(article.id)}
      className="group bg-[#FAF8F5] border-2 border-black p-4 shadow-[4px_4px_0px_#000] hover:shadow-[7px_7px_0px_#000] transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
    >
      {/* Article Tag Bar */}
      <div>
        <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
          <span className="bg-black text-[#A0FF00] font-anton text-xs px-2 py-0.5 tracking-wider uppercase">
            {article.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleQuickWhatsApp}
              className="p-1 bg-[#25D366] text-white border border-black hover:scale-110 transition cursor-pointer"
              title="Condividi su WhatsApp"
            >
              <MessageCircle className="w-3 h-3 fill-white text-[#25D366]" />
            </button>
            <button
              onClick={handleQuickTelegram}
              className="p-1 bg-[#0088cc] text-white border border-black hover:scale-110 transition cursor-pointer"
              title="Condividi su Telegram"
            >
              <Send className="w-3 h-3" />
            </button>
            <button
              onClick={handleQuickEmail}
              className="p-1 bg-black text-white border border-black hover:scale-110 transition cursor-pointer"
              title="Condividi via Email"
            >
              <Mail className="w-3 h-3" />
            </button>
            <button
              onClick={(e) => onToggleSave(article.id, e)}
              className={`p-1 border border-black transition ${
                isSaved ? 'bg-[#A0FF00] text-black' : 'bg-white hover:bg-black hover:text-white'
              }`}
              title="Salva nei segnalibri"
            >
              <Bookmark className="w-3.5 h-3.5" fill={isSaved ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>

        {/* Thumbnail Image with Brutalist Border / Tape Accent */}
        <div className="relative aspect-16/10 mb-3 border-2 border-black overflow-hidden bg-neutral-200">
          <img
            src={article.heroImage}
            alt={article.imageAlt}
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-300"
          />
          {article.isHot && (
            <div className="absolute top-2 right-2 bg-[#A0FF00] text-black border border-black font-anton text-[10px] px-1.5 py-0.5 uppercase tracking-wider font-bold">
              ⚡ HOT
            </div>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-black leading-none mb-2 group-hover:text-black">
          {article.title}
        </h3>

        <p className="font-typewriter text-xs text-neutral-700 line-clamp-3 leading-relaxed mb-4">
          {article.subtitle}
        </p>
      </div>

      {/* Footer Action */}
      <div className="pt-3 border-t-2 border-black flex items-center justify-between mt-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRead(article.id);
          }}
          className="bg-[#A0FF00] text-black border-2 border-black px-3.5 py-1.5 font-anton text-sm uppercase flex items-center gap-1 hover:bg-black hover:text-[#A0FF00] transition shadow-[2px_2px_0px_#000]"
        >
          <span>LEGGI ORA</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <span className="font-mono text-[11px] text-neutral-500 flex items-center gap-1 font-bold">
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          {article.likesCount}
        </span>
      </div>
    </article>
  );
};
