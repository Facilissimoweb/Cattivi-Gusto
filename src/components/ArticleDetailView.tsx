import React, { useState, useEffect } from 'react';
import { Article, Comment } from '../types';
import { ArrowLeft, Volume2, VolumeX, Heart, Share2, MessageSquare, Send, Flame, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';
import { ArticleShareButtons } from './ArticleShareButtons';
import { speakText, stopSpeech } from '../utils/speechUtils';
import { ARTICLES } from '../data/articles';

const VOID_WEATHER = {
  condition: 'Pioggia di oggetti smarriti (18°C)',
  description: 'Incertezza diffusa con 85% di possibilità di dimenticare la propria password.',
};

const INANIMATE_FORTUNES = [
  { id: '1', objectName: 'Tostapane', fortune: 'Non inserire pane integrale oggi. Sensazione di rifiuto imminente.', mood: 'Teso' },
  { id: '2', objectName: 'Calzino Sinistro', fortune: 'Troverai la tua anima gemella nel filtro della lavatrice.', mood: 'Speranzoso' },
  { id: '3', objectName: 'Router Wi-Fi', fortune: 'Le tue lucine rosse rivelano segreti inconfessabili.', mood: 'Misterioso' },
];

interface ArticleDetailViewProps {
  article: Article;
  onBack: () => void;
  onOpenManifesto: () => void;
  onOpenGroqChat?: () => void;
  onSelectArticle: (articleId: string) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  onBack,
  onOpenManifesto,
  onOpenGroqChat,
  onSelectArticle,
  isSaved,
  onToggleSave,
}) => {
  const [currentHeroImage, setCurrentHeroImage] = useState(article.heroImage);
  const [isGeneratingAiImage, setIsGeneratingAiImage] = useState(false);
  const [isHeroLoading, setIsHeroLoading] = useState(false);
  const [aiImageNotice, setAiImageNotice] = useState<string | null>(null);
  const [likes, setLikes] = useState(article.likesCount);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>(article.comments);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [isPlayingSpeech, setIsPlayingSpeech] = useState(false);
  const [dontClickEffect, setDontClickEffect] = useState<string | null>(null);
  const [copiedToast, setCopiedToast] = useState(false);

  // Reset state and scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentHeroImage(article.heroImage);
    setLikes(article.likesCount);
    setHasLiked(false);
    setComments(article.comments);
    setQuizAnswers({});
    setIsPlayingSpeech(false);
    stopSpeech();
  }, [article.id]);

  // Programmatically suggest 3 other articles from the same category
  const sameCategoryArticles = ARTICLES.filter(
    (a) => a.id !== article.id && a.category === article.category
  );

  let suggestedArticles = sameCategoryArticles.slice(0, 3);

  // Fallback to other articles if fewer than 3 in the same category
  if (suggestedArticles.length < 3) {
    const otherArticles = ARTICLES.filter(
      (a) => a.id !== article.id && !suggestedArticles.some((s) => s.id === a.id)
    );
    suggestedArticles = [
      ...suggestedArticles,
      ...otherArticles.slice(0, 3 - suggestedArticles.length),
    ];
  }

  // Handle Like
  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  // Handle Add Comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const created: Comment = {
      id: Date.now().toString(),
      author: newCommentAuthor.trim() || 'Cittadino del Caos',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`,
      date: 'Proprio ora',
      text: newCommentText.trim(),
      likes: 1
    };

    setComments([created, ...comments]);
    setNewCommentText('');
    setNewCommentAuthor('');
  };

  // Handle Text-to-Speech narration
  const toggleSpeechNarration = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingSpeech) {
        stopSpeech();
        setIsPlayingSpeech(false);
      } else {
        const textToRead = `${article.title}. ${article.subtitle}. ${article.content.intro} ${article.content.sections.map(s => s.paragraphs.join(' ')).join(' ')}`;
        speakText(textToRead, {
          onStart: () => setIsPlayingSpeech(true),
          onEnd: () => setIsPlayingSpeech(false),
          onError: () => setIsPlayingSpeech(false)
        });
      }
    } else {
      alert("La sintesi vocale non è supportata da questo browser dell'Alter Ego.");
    }
  };

  // "DON'T CLICK THIS" button trigger
  const triggerDontClick = () => {
    const effects = [
      "💥 GRAVITÀ SOSPESA: Un gatto ha appena interrotto la fisica quantistica!",
      "📢 AVVISO REDAZIONALE: La tua sedia ti ha appena votato per l'espulsione.",
      "🍕 ALLERTA BRICIOLE: Rilevate 14 briciole invisibili sul tuo tavolo.",
      "🧠 SINCRO ALTER EGO: L'Alter Ego ha appena bevuto un caffè al posto tuo.",
      "🌀 ERRORE 404: La razionalità è momentaneamente non disponibile."
    ];
    const randomEff = effects[Math.floor(Math.random() * effects.length)];
    setDontClickEffect(randomEff);

    // Audio beep if Web Audio available
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      // ignore
    }

    setTimeout(() => {
      setDontClickEffect(null);
    }, 4500);
  };

  // AI Image Cover Generator function
  const handleRegenerateAiCover = async () => {
    setIsGeneratingAiImage(true);
    setIsHeroLoading(true);
    setAiImageNotice(null);
    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Satirical artwork for magazine article: ${article.title}. ${article.subtitle}`,
          style: 'editorial',
          width: 1024,
          height: 600
        })
      });
      const data = await res.json();
      if (data.url) {
        setCurrentHeroImage(data.url);
        setAiImageNotice(data.notice || "Nuova illustrazione d'arte generata dall'Alter Ego!");
      }
    } catch (err) {
      console.error("AI Image Generation Error:", err);
      setIsHeroLoading(false);
    } finally {
      setIsGeneratingAiImage(false);
    }
  };

  // Share action
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 animate-in fade-in duration-200">
      
      {/* Top Header Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b-2 border-black pb-4">
        <button
          onClick={onBack}
          className="bg-black text-white px-4 py-2 font-anton text-sm sm:text-base tracking-wider uppercase flex items-center gap-2 hover:bg-[#A0FF00] hover:text-black border-2 border-black transition shadow-[3px_3px_0px_#000] cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>TORNA IN EDICOLA (HOME)</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Audio Narrator */}
          <button
            onClick={toggleSpeechNarration}
            className={`px-3 py-1.5 border-2 border-black font-anton text-xs sm:text-sm uppercase flex items-center gap-1.5 transition shadow-[2px_2px_0px_#000] ${
              isPlayingSpeech 
                ? 'bg-[#A0FF00] text-black animate-pulse font-bold' 
                : 'bg-white hover:bg-neutral-100 text-black'
            }`}
          >
            {isPlayingSpeech ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span>{isPlayingSpeech ? 'STOP VOCE ALTER EGO' : 'ASCOLTA CON VOCE'}</span>
          </button>

          {/* Social Share Quick Toolbar */}
          <ArticleShareButtons article={article} variant="toolbar" />
        </div>
      </div>

      {/* Main Giant Stretched Title Banner */}
      <div className="mb-8 overflow-hidden bg-black text-[#F4F1EA] p-4 sm:p-8 border-3 border-black shadow-[8px_8px_0px_#A0FF00] relative">
        <span className="bg-[#A0FF00] text-black font-anton text-xs px-2.5 py-1 tracking-widest uppercase border border-black mb-3 inline-block">
          {article.categoryLabel}
        </span>

        <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.9] text-[#F4F1EA] mb-4">
          {article.title}
        </h1>

        <div className="font-typewriter text-sm sm:text-base text-[#A0FF00] font-bold max-w-3xl">
          {article.subtitle}
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-700 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 gap-2">
          <span>A cura di: <strong className="text-white">{article.author}</strong></span>
          <span>Pubblicato il: {article.date}</span>
          <span>Tempo lettura: {article.readTime}</span>
        </div>
      </div>

      {/* Interactive Don't Click Banner + Alert Popup */}
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#A0FF00] border-3 border-black p-4 shadow-[5px_5px_0px_#000]">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-black shrink-0 animate-bounce" />
          <span className="font-anton text-lg uppercase tracking-wide text-black">
            AVVISO DI SICUREZZA PER L'UTENTE
          </span>
        </div>

        <button
          onClick={triggerDontClick}
          className="w-full sm:w-auto bg-black text-[#A0FF00] border-2 border-black px-6 py-2.5 font-anton text-base uppercase tracking-wider hover:bg-white hover:text-black transition shadow-[3px_3px_0px_#000] active:translate-x-0.5"
        >
          DON'T CLICK THIS
        </button>
      </div>

      {dontClickEffect && (
        <div className="mb-8 bg-black text-[#A0FF00] border-4 border-[#A0FF00] p-4 font-mono text-sm sm:text-base font-bold animate-pulse shadow-[6px_6px_0px_#A0FF00]">
          {dontClickEffect}
        </div>
      )}

      {/* Article Grid Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Article Body Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Main Hero Photo Card with AI Generator Button */}
          <div className="relative border-3 border-black bg-white p-3 shadow-[6px_6px_0px_#000]">
            <div className="relative bg-neutral-100 border border-black min-h-[250px] flex items-center justify-center overflow-hidden mb-2">
              {isHeroLoading && (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 z-10 text-center">
                  <Sparkles className="w-8 h-8 text-[#A0FF00] animate-spin mb-2" />
                  <span className="font-anton text-sm text-[#A0FF00] uppercase tracking-wide">
                    GENERAZIONE ILLUSTRAZIONE AI IN CORSO...
                  </span>
                  <span className="font-typewriter text-xs text-neutral-300 mt-1">
                    Creazione dell'opera satirica in tempo reale
                  </span>
                </div>
              )}
              <img
                src={currentHeroImage}
                alt={article.imageAlt}
                onLoad={() => setIsHeroLoading(false)}
                onError={() => {
                  setIsHeroLoading(false);
                  setAiImageNotice("Nota: Servizio AI esterno occupato, è stata caricata un'immagine satirica di riserva.");
                  setCurrentHeroImage("https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000");
                }}
                className={`w-full h-auto max-h-[480px] object-cover transition-opacity duration-300 ${isHeroLoading ? 'opacity-20' : 'opacity-100'}`}
              />
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-2 border-t border-black">
              <p className="font-typewriter text-xs text-neutral-600 italic">
                Figura 1.1: {article.imageAlt}
              </p>
              
              <button
                onClick={handleRegenerateAiCover}
                disabled={isGeneratingAiImage}
                className="bg-[#A0FF00] text-black border-2 border-black px-3 py-1 font-anton text-xs uppercase flex items-center gap-1.5 hover:bg-black hover:text-[#A0FF00] transition shadow-[2px_2px_0px_#000] cursor-pointer"
                title="Genera una nuova copertina artistica basata sul titolo di questo articolo"
              >
                <Sparkles className={`w-3.5 h-3.5 ${isGeneratingAiImage ? 'animate-spin' : ''}`} />
                <span>{isGeneratingAiImage ? 'GENERAZIONE OPERA AI IN CORSO...' : "🎨 RIGENERA OPERA D'ARTE AI"}</span>
              </button>
            </div>

            {aiImageNotice && (
              <div className="mt-2 bg-black text-[#A0FF00] font-mono text-[11px] p-2 border border-[#A0FF00]">
                ✨ {aiImageNotice}
              </div>
            )}
          </div>

          {/* Intro Box */}
          <div className="bg-white border-2 border-black p-5 font-typewriter text-base sm:text-lg leading-relaxed text-neutral-900 shadow-[4px_4px_0px_#000] border-l-8 border-l-[#A0FF00]">
            <strong className="font-sans font-bold text-black uppercase tracking-wider block mb-1 text-xs text-neutral-500">
              SOMMARIO ESECUTIVO
            </strong>
            {article.content.intro}
          </div>

          {/* Coach Marcus Featured Card */}
          {(article.author.toLowerCase().includes('marcus') || article.title.toLowerCase().includes('marcus')) && (
            <div className="bg-black text-white border-3 border-black p-5 shadow-[6px_6px_0px_#A0FF00] flex flex-col sm:flex-row items-center gap-5">
              <img 
                src="/MARCUS.png" 
                alt="Coach Marcus" 
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover border-2 border-[#A0FF00] shadow-[3px_3px_0px_#A0FF00] shrink-0" 
              />
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="bg-[#A0FF00] text-black font-anton text-xs px-2 py-0.5 uppercase tracking-wider">
                    AUTORE & GURU REDAZIONALE
                  </span>
                </div>
                <h4 className="font-anton text-2xl sm:text-3xl uppercase tracking-wide text-[#A0FF00]">
                  COACH MARCUS
                </h4>
                <p className="font-typewriter text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  Personal Coach di Seduzione al Contrario & Filosofia dell'Andare in Bianco.
                  Ispiratore del Metodo Sfinimento, cultore della Fiat Duna e delle ciabatte sanitarie in ghisa.
                </p>
              </div>
            </div>
          )}

          {/* Sections */}
          {article.content.sections.map((sec, idx) => (
            <div key={idx} className="bg-[#FAF8F5] border-2 border-black p-5 sm:p-6 shadow-[4px_4px_0px_#000] space-y-4">
              {sec.heading && (
                <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-black border-b-2 border-black pb-2">
                  {sec.heading}
                </h3>
              )}

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="font-typewriter text-sm sm:text-base leading-relaxed text-neutral-800">
                  {p}
                </p>
              ))}

              {sec.quote && (
                <blockquote className="bg-[#A0FF00] border-2 border-black p-4 font-typewriter text-sm sm:text-base font-bold text-black my-4 shadow-[3px_3px_0px_#000] rotate-[-0.5deg] flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  {(sec.quote.toLowerCase().includes('marcus') || sec.heading?.toLowerCase().includes('marcus') || article.author.toLowerCase().includes('marcus')) && (
                    <img 
                      src="/MARCUS.png" 
                      alt="Coach Marcus Quote" 
                      className="w-12 h-12 rounded-none object-cover border-2 border-black shrink-0 shadow-[2px_2px_0px_#000]" 
                    />
                  )}
                  <div>
                    "{sec.quote}"
                  </div>
                </blockquote>
              )}
            </div>
          ))}

          {/* Conclusion */}
          {article.content.conclusion && (
            <div className="bg-black text-[#F4F1EA] border-2 border-black p-6 font-typewriter text-sm sm:text-base leading-relaxed shadow-[5px_5px_0px_#A0FF00]">
              <span className="font-anton text-lg text-[#A0FF00] uppercase block mb-2">
                VERDETTO FINALE
              </span>
              {article.content.conclusion}
            </div>
          )}

          {/* Interactive Quiz Section */}
          {article.content.quiz && (
            <div className="bg-[#FFFBEA] border-3 border-black p-5 sm:p-7 shadow-[6px_6px_0px_#000] space-y-6 my-6">
              <div className="border-b-2 border-black pb-3">
                <span className="bg-[#A0FF00] border border-black font-mono text-xs px-2 py-0.5 uppercase font-bold">
                  TEST INTERATTIVO
                </span>
                <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-black mt-1">
                  {article.content.quiz.title}
                </h3>
                <p className="font-typewriter text-xs sm:text-sm text-neutral-700 mt-1">
                  {article.content.quiz.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {article.content.quiz.questions.map((q) => {
                  const selectedOptIdx = quizAnswers[q.id];
                  return (
                    <div key={q.id} className="bg-white border-2 border-black p-4 shadow-[3px_3px_0px_#000]">
                      <p className="font-anton text-base sm:text-lg text-black mb-3">
                        {q.question}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedOptIdx === optIdx;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })}
                              className={`w-full text-left p-3 border-2 border-black font-typewriter text-xs sm:text-sm flex items-start gap-2.5 transition cursor-pointer shadow-[2px_2px_0px_#000] ${
                                isSelected
                                  ? 'bg-[#A0FF00] font-bold text-black border-black'
                                  : 'bg-[#FAF8F5] hover:bg-yellow-100 text-neutral-900'
                              }`}
                            >
                              <span className="font-anton bg-black text-white px-2 py-0.5 text-xs rounded-none">
                                {opt.label}
                              </span>
                              <span className="flex-1">{opt.text}</span>
                            </button>
                          );
                        })}
                      </div>

                      {selectedOptIdx !== undefined && (
                        <div className="mt-3 bg-black text-[#A0FF00] p-3 border border-black font-typewriter text-xs sm:text-sm animate-fade-in">
                          🔮 <strong>ESITO DI TERESA:</strong> {q.options[selectedOptIdx].outcomeText}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interactive CTA Section (Lettura Disastrosa Ar Cesso) */}
          {article.content.cta && (
            <div className="bg-[#A0FF00] border-3 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] text-black relative overflow-hidden my-6">
              {article.content.cta.badge && (
                <div className="bg-black text-[#A0FF00] font-mono font-bold text-xs uppercase px-3 py-1 border border-black inline-block mb-2">
                  {article.content.cta.badge}
                </div>
              )}
              <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-tight leading-none mb-3">
                {article.content.cta.title}
              </h3>
              <p className="font-typewriter text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {article.content.cta.subtitle}
              </p>

              <button
                onClick={() => {
                  if (onOpenGroqChat) {
                    onOpenGroqChat();
                  } else {
                    alert("Teresa si sta accomodando in bagno col mazzo di carte unte! Apri la Chat per iniziare la lettura.");
                  }
                }}
                className="w-full bg-black text-[#A0FF00] hover:bg-white hover:text-black font-anton text-lg sm:text-xl py-4 px-6 border-2 border-black flex items-center justify-center gap-3 transition shadow-[4px_4px_0px_#000] cursor-pointer"
              >
                <span>{article.content.cta.buttonText}</span>
              </button>
            </div>
          )}

          {/* Article Like & Action Footer */}
          <div className="bg-white border-2 border-black p-4 flex flex-wrap items-center justify-between gap-4 shadow-[4px_4px_0px_#000]">
            <button
              onClick={handleLike}
              className={`px-5 py-2.5 font-anton text-base uppercase border-2 border-black flex items-center gap-2 transition shadow-[3px_3px_0px_#000] ${
                hasLiked 
                  ? 'bg-red-500 text-white border-black' 
                  : 'bg-white hover:bg-red-100 text-black'
              }`}
            >
              <Heart className={`w-5 h-5 ${hasLiked ? 'fill-white' : 'text-red-500'}`} />
              <span>{hasLiked ? 'REAZIONE REGISTRATA!' : 'APPROVA IL CAOS'} ({likes})</span>
            </button>

            <button
              onClick={onOpenManifesto}
              className="bg-[#A0FF00] text-black font-anton text-base px-5 py-2.5 border-2 border-black hover:bg-black hover:text-[#A0FF00] transition shadow-[3px_3px_0px_#000]"
            >
              🔥 FIRMA IL MANIFESTO
            </button>
          </div>

          {/* Social Share Section (WhatsApp, Telegram, Email, Summary & Reference Image) */}
          <ArticleShareButtons article={article} variant="footer" />

          {/* Comments Thread */}
          <div className="bg-[#FAF8F5] border-2 border-black p-6 shadow-[5px_5px_0px_#000] mt-10">
            <h3 className="font-anton text-3xl uppercase border-b-2 border-black pb-2 mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              <span>COMMENTI DEGLI ABBONATI ({comments.length})</span>
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="mb-8 bg-white border-2 border-black p-4 space-y-3">
              <h4 className="font-anton text-base uppercase">LASCIA LA TUA OPINIONE SENZA SENSO</h4>
              
              <input
                type="text"
                placeholder="Il tuo nome (o pseudonimo di Alter Ego)..."
                value={newCommentAuthor}
                onChange={(e) => setNewCommentAuthor(e.target.value)}
                className="w-full bg-[#F4F1EA] border-2 border-black p-2 font-mono text-sm focus:outline-none"
              />

              <textarea
                rows={3}
                required
                placeholder="Cosa ne pensa il tuo tostapane? Scrivi un commento..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                className="w-full bg-[#F4F1EA] border-2 border-black p-2 font-mono text-sm focus:outline-none"
              />

              <button
                type="submit"
                className="bg-black text-[#A0FF00] border-2 border-black px-5 py-2 font-anton text-sm uppercase flex items-center gap-2 hover:bg-[#A0FF00] hover:text-black transition shadow-[2px_2px_0px_#000]"
              >
                <Send className="w-4 h-4" />
                <span>INVIA AI SERVER DEL NULLA</span>
              </button>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="bg-white border-2 border-black p-4 space-y-2 relative">
                  <div className="flex items-center justify-between border-b border-neutral-300 pb-1">
                    <div className="flex items-center gap-2">
                      <img src={c.avatar} alt={c.author} className="w-7 h-7 rounded-full bg-neutral-200 border border-black" />
                      <span className="font-anton text-sm uppercase text-black">{c.author}</span>
                    </div>
                    <span className="font-mono text-[11px] text-neutral-500">{c.date}</span>
                  </div>
                  <p className="font-typewriter text-xs sm:text-sm text-neutral-800 leading-relaxed">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar Column ("UNRELATED SUGGESTIONS") (4 cols) */}
        <div className="lg:col-span-4 space-y-6 sticky top-20">
          
          {/* Sticky Tape Note "MANIFESTO DELL'ASSURDO: FIRMA QUI" */}
          <div 
            onClick={onOpenManifesto}
            className="bg-[#FFFEEB] border-3 border-black p-5 shadow-[6px_6px_0px_#000] cursor-pointer hover:rotate-1 transition-transform relative paper-tape"
          >
            <span className="bg-black text-[#A0FF00] font-anton text-xs px-2 py-0.5 uppercase tracking-wider border border-black mb-2 inline-block">
              ATTO SOLENNE
            </span>
            <h3 className="font-anton text-3xl uppercase tracking-tight text-black leading-none mb-2">
              MANIFESTO DELL'ASSURDO: FIRMA QUI
            </h3>
            <p className="font-typewriter text-xs text-neutral-700 mb-4">
              Aderisci alla causa. Nessuna quota di iscrizione, nessun obbligo morale. Solo liberazione.
            </p>
            <button className="w-full bg-[#A0FF00] text-black border-2 border-black py-2 font-anton text-base uppercase hover:bg-black hover:text-[#A0FF00] transition shadow-[2px_2px_0px_#000]">
              FIRMA ADESSO
            </button>
          </div>

          {/* Unrelated Suggestions Box matching Screenshot 2 */}
          <div className="bg-[#FAF8F5] border-3 border-black p-5 shadow-[5px_5px_0px_#000]">
            <h3 className="font-anton text-xl uppercase tracking-wide border-b-2 border-black pb-2 mb-4">
              UNRELATED SUGGESTIONS
            </h3>

            <div className="space-y-4 divide-y-2 divide-neutral-300 font-typewriter text-xs">
              
              {/* Void Weather */}
              <div className="pt-2">
                <span className="font-bold uppercase text-neutral-500 block text-[10px]">METEO NEL VUOTO</span>
                <p className="font-bold text-black text-sm">{VOID_WEATHER.condition}</p>
                <p className="text-neutral-600 mt-0.5">{VOID_WEATHER.description}</p>
              </div>

              {/* Inanimate Objects Horoscope preview */}
              {INANIMATE_FORTUNES.slice(0, 3).map((f) => (
                <div key={f.id} className="pt-3">
                  <span className="font-bold uppercase text-neutral-500 block text-[10px]">OROSCOPO: {f.objectName}</span>
                  <p className="text-neutral-900 font-semibold">{f.fortune}</p>
                  <span className="text-[10px] text-neutral-500 italic mt-0.5 block">Umore: {f.mood}</span>
                </div>
              ))}

            </div>
          </div>

          {/* Alter Ego Newsletter / Subscription Box */}
          <div className="bg-black text-[#F4F1EA] border-3 border-black p-5 shadow-[5px_5px_0px_#A0FF00]">
            <h3 className="font-anton text-2xl uppercase tracking-tight text-[#A0FF00] mb-2">
              ABBONATI A CATTIVO GUSTO
            </h3>
            <p className="font-typewriter text-xs text-neutral-300 mb-4">
              Ricevi delusioni settimanali direttamente nella tua casella di posta digitale.
            </p>
            <button
              onClick={() => onSelectArticle('piano-cattivo-gusto-digital')}
              className="w-full bg-[#A0FF00] text-black font-anton text-base py-2.5 uppercase border-2 border-black hover:bg-white transition shadow-[2px_2px_0px_#000]"
            >
              VEDI PIANI DA €4,99
            </button>
          </div>

        </div>

      </div>

      {/* MORE ABSURD CONTENT SECTION */}
      <section className="mt-16 pt-10 border-t-4 border-black">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-black text-[#A0FF00] font-anton text-xs px-2.5 py-1 uppercase tracking-wider mb-2 border border-black shadow-[2px_2px_0px_#000]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DELIRI CORRELATI ({article.categoryLabel})</span>
            </div>
            <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-black leading-none">
              MORE ABSURD CONTENT
            </h2>
            <p className="font-typewriter text-xs sm:text-sm text-neutral-600 mt-1">
              Tre articoli suggeriti dall'Alter Ego per la categoria <strong className="text-black uppercase">{article.categoryLabel}</strong>
            </p>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-[#A0FF00] text-black font-anton text-sm uppercase px-4 py-2 border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-black hover:text-[#A0FF00] transition cursor-pointer self-start sm:self-auto"
          >
            <span>TORNA A TUTTI GLI ARTICOLI</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestedArticles.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onSelectArticle(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-[#FAF8F5] border-3 border-black p-4 shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000] transition-all cursor-pointer flex flex-col justify-between relative"
            >
              <div>
                {/* Hero Thumbnail */}
                <div className="relative h-44 border-2 border-black overflow-hidden mb-3 bg-neutral-200">
                  <img
                    src={item.heroImage}
                    alt={item.imageAlt || item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-black text-[#A0FF00] font-anton text-[10px] sm:text-xs px-2 py-0.5 uppercase tracking-wider border border-black shadow-[2px_2px_0px_#000]">
                    {item.categoryLabel}
                  </span>
                  {item.isHot && (
                    <span className="absolute top-2 right-2 bg-[#FF2A00] text-white font-anton text-[10px] px-2 py-0.5 uppercase tracking-wider border border-black shadow-[2px_2px_0px_#000] flex items-center gap-1">
                      <Flame className="w-3 h-3 fill-current" />
                      <span>HOT</span>
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-2 border-b border-neutral-300 pb-1">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-anton text-lg sm:text-xl uppercase tracking-tight text-black line-clamp-2 mb-2 group-hover:text-[#FF2A00] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="font-typewriter text-xs text-neutral-700 line-clamp-3 mb-4 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Card CTA */}
              <div className="pt-2 border-t-2 border-black flex items-center justify-between text-xs font-anton uppercase text-black group-hover:bg-[#A0FF00] transition-colors p-2 -mx-4 -mb-4 mt-auto border-t-3">
                <span>LEGGI L'ARTICOLO</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
