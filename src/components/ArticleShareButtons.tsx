import React, { useState } from 'react';
import { Article } from '../types';
import { Share2, MessageCircle, Send, Mail, Copy, Check, ExternalLink, Image as ImageIcon, X, FileText } from 'lucide-react';

interface ArticleShareProps {
  article: Article;
  variant?: 'toolbar' | 'footer' | 'card';
}

export const ArticleShareButtons: React.FC<ArticleShareProps> = ({ article, variant = 'footer' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedFullText, setCopiedFullText] = useState(false);

  const getArticleUrl = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.set('article', article.id);
      return url.toString();
    }
    return `https://cattivo-gusto.it/?article=${article.id}`;
  };

  const articleUrl = getArticleUrl();

  // Share text contains ONLY the H1 article title + direct link as requested
  const fullShareText = `${article.title}\n\n${articleUrl}`;

  // WhatsApp Share URL
  const handleWhatsAppShare = () => {
    const waText = `${article.title}\n\n${articleUrl}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Telegram Share URL
  const handleTelegramShare = () => {
    const tgText = article.title;
    const url = `https://t.me/share/url?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(tgText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Email Share
  const handleEmailShare = () => {
    const subject = article.title;
    const body = `${article.title}\n\n${articleUrl}`;

    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  // Copy URL only
  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(articleUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Copy Complete Text + Image + Link
  const handleCopyFullText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullShareText);
      setCopiedFullText(true);
      setTimeout(() => setCopiedFullText(false), 2500);
    }
  };

  return (
    <div className="space-y-3">
      {/* Inline Toolbar View */}
      {variant === 'toolbar' && (
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={handleWhatsAppShare}
            className="p-1.5 bg-[#25D366] text-white border-2 border-black hover:scale-105 transition shadow-[2px_2px_0px_#000] cursor-pointer"
            title="Condividi su WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
          </button>
          <button
            onClick={handleTelegramShare}
            className="p-1.5 bg-[#0088cc] text-white border-2 border-black hover:scale-105 transition shadow-[2px_2px_0px_#000] cursor-pointer"
            title="Condividi su Telegram"
          >
            <Send className="w-4 h-4" />
          </button>
          <button
            onClick={handleEmailShare}
            className="p-1.5 bg-black text-white border-2 border-black hover:scale-105 transition shadow-[2px_2px_0px_#000] cursor-pointer"
            title="Condividi via Email"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#A0FF00] text-black font-anton text-xs px-2.5 py-1 border-2 border-black hover:bg-black hover:text-[#A0FF00] transition shadow-[2px_2px_0px_#000] flex items-center gap-1 cursor-pointer"
            title="Vedi anteprima riassunto e condividi"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>CONDIVIDI</span>
          </button>
        </div>
      )}

      {/* Footer Block View */}
      {variant === 'footer' && (
        <div className="bg-[#FFFEEB] border-3 border-black p-4 sm:p-5 shadow-[5px_5px_0px_#000] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-3">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-black" />
              <h3 className="font-anton text-lg sm:text-xl uppercase tracking-tight text-black">
                CONDIVIDI ARTICOLO (TITOLO H1 & LINK DIRETTI)
              </h3>
            </div>
            <span className="bg-black text-[#A0FF00] font-mono text-[10px] px-2 py-0.5 border border-black uppercase font-bold">
              WHATSAPP • TELEGRAM • EMAIL
            </span>
          </div>

          <p className="font-typewriter text-xs text-neutral-700">
            Invia questo articolo con il titolo H1 e il link diretto di accesso immediato ai tuoi contatti:
          </p>

          {/* Social Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppShare}
              className="bg-[#25D366] text-white font-anton text-xs sm:text-sm py-2.5 px-3 border-2 border-black flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition shadow-[3px_3px_0px_#000] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WHATSAPP</span>
            </button>

            {/* Telegram */}
            <button
              onClick={handleTelegramShare}
              className="bg-[#0088cc] text-white font-anton text-xs sm:text-sm py-2.5 px-3 border-2 border-black flex items-center justify-center gap-2 hover:bg-[#0077b3] transition shadow-[3px_3px_0px_#000] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>TELEGRAM</span>
            </button>

            {/* Email */}
            <button
              onClick={handleEmailShare}
              className="bg-black text-white font-anton text-xs sm:text-sm py-2.5 px-3 border-2 border-black flex items-center justify-center gap-2 hover:bg-neutral-800 transition shadow-[3px_3px_0px_#000] cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL</span>
            </button>

            {/* Expand / Preview Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#A0FF00] text-black font-anton text-xs sm:text-sm py-2.5 px-3 border-2 border-black flex items-center justify-center gap-2 hover:bg-black hover:text-[#A0FF00] transition shadow-[3px_3px_0px_#000] cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>ANTEPRIMA</span>
            </button>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white border-3 border-black p-5 sm:p-6 max-w-lg w-full shadow-[8px_8px_0px_#000] relative space-y-4 max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-black pb-3">
              <div className="flex items-center gap-2">
                <Share2 className="w-6 h-6 text-black" />
                <h3 className="font-anton text-xl uppercase tracking-tight">CONDIVIDI ARTICOLO</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-black text-white p-1.5 hover:bg-red-600 transition border border-black cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Article Share Payload Box */}
            <div className="border-2 border-black bg-[#FFFEEB] p-4 space-y-2 font-typewriter text-xs">
              <div className="flex items-center justify-between border-b border-black pb-1">
                <span className="font-anton text-sm uppercase text-black">
                  📝 CONTENUTO CONDIVISIONE (TITOLO H1 & LINK)
                </span>
                <span className="font-mono text-[10px] text-neutral-500">
                  {article.readTime}
                </span>
              </div>
              <p className="font-anton text-base text-black uppercase leading-tight">{article.title}</p>
              <div className="bg-white border border-neutral-300 p-2 font-mono text-[11px] text-blue-700 break-all">
                {articleUrl}
              </div>
            </div>

            {/* Direct Share Buttons in Modal */}
            <div className="space-y-2 pt-2">
              <span className="font-anton text-xs uppercase tracking-wider block text-neutral-700">
                SELEZIONA CANALE DI CONDIVISIONE:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={handleWhatsAppShare}
                  className="bg-[#25D366] text-white font-anton text-xs py-2.5 px-3 border-2 border-black flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition shadow-[2px_2px_0px_#000] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>WHATSAPP</span>
                </button>

                <button
                  onClick={handleTelegramShare}
                  className="bg-[#0088cc] text-white font-anton text-xs py-2.5 px-3 border-2 border-black flex items-center justify-center gap-2 hover:bg-[#0077b3] transition shadow-[2px_2px_0px_#000] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TELEGRAM</span>
                </button>

                <button
                  onClick={handleEmailShare}
                  className="bg-black text-white font-anton text-xs py-2.5 px-3 border-2 border-black flex items-center justify-center gap-2 hover:bg-neutral-800 transition shadow-[2px_2px_0px_#000] cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL</span>
                </button>
              </div>

              {/* Copy Full Text Button */}
              <button
                onClick={handleCopyFullText}
                className="w-full bg-[#A0FF00] text-black font-anton text-xs py-2.5 border-2 border-black flex items-center justify-center gap-2 hover:bg-black hover:text-[#A0FF00] transition shadow-[2px_2px_0px_#000] cursor-pointer"
              >
                {copiedFullText ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                <span>{copiedFullText ? 'TITOLO E LINK COPIATI NEGLI APPUNTI!' : 'COPIA TITOLO H1 + LINK DIRETTO'}</span>
              </button>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 border-t border-neutral-300 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-black text-white px-4 py-1.5 font-anton text-xs uppercase hover:bg-neutral-800 transition border border-black cursor-pointer"
              >
                CHIUDI
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
