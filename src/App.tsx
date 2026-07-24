import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { HeroArticleCard } from './components/HeroArticleCard';
import { ArticleCard } from './components/ArticleCard';
import { ArticleDetailView } from './components/ArticleDetailView';
import { SubscriptionsView } from './components/SubscriptionsView';
import { ManifestoModal } from './components/ManifestoModal';
import { LegalAbsurdModal } from './components/LegalAbsurdModal';
import { AbsurdCookieModal, ABSURD_COOKIES } from './components/AbsurdCookieModal';
import { CookieNoticeBanner } from './components/CookieNoticeBanner';
import { GroqChatView } from './components/GroqChatView';
import { ContactsView } from './components/ContactsView';
import { FloatingNuvolettaGroq } from './components/FloatingNuvolettaGroq';
import { Footer } from './components/Footer';
import { BottomNavMobile } from './components/BottomNavMobile';

import { ARTICLES, CATEGORIES } from './data/articles';
import { Article, CategoryId } from './types';
import { Flame, Sparkles, Filter, Bookmark, X, AlertCircle } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('tutti');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'feed' | 'reader' | 'subscriptions' | 'bookmarks' | 'groq_chat' | 'contacts'>('feed');
  
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cattivo_gusto_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isSubscribed, setIsSubscribed] = useState(() => {
    return localStorage.getItem('cattivo_gusto_vip') === 'true';
  });
  const [subscribedPlan, setSubscribedPlan] = useState<string>(() => {
    return localStorage.getItem('cattivo_gusto_plan') || '';
  });

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cattivo_gusto_bookmarks', JSON.stringify(savedArticleIds));
    } catch (e) {
      // ignore
    }
  }, [savedArticleIds]);

  // Check URL search params for deep-linking to direct article on mount & browser navigation
  useEffect(() => {
    const checkUrlArticle = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const articleIdFromUrl = params.get('article');
        if (articleIdFromUrl) {
          const found = ARTICLES.find(a => a.id === articleIdFromUrl);
          if (found) {
            setSelectedArticleId(found.id);
            setActiveView('reader');
            return;
          }
        }
      } catch (e) {
        // ignore
      }
    };

    checkUrlArticle();
    window.addEventListener('popstate', checkUrlArticle);
    return () => window.removeEventListener('popstate', checkUrlArticle);
  }, []);

  // Always scroll to top whenever navigation, category, search, or active article changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeView, selectedArticleId, selectedCategory, searchQuery]);

  // Explicit Go Home Handler
  const handleGoHome = () => {
    setActiveView('feed');
    setSelectedArticleId(null);
    setSelectedCategory('tutti');
    setSearchQuery('');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('article');
      window.history.pushState({}, '', url.pathname + (url.search ? url.search : ''));
    } catch (e) {
      // ignore
    }
  };

  // Legal Modal Handler
  const handleOpenLegal = (tab: 'privacy' | 'terms' = 'privacy') => {
    setLegalTab(tab);
    setIsLegalModalOpen(true);
  };

  const handleAcceptAllCookiesQuick = () => {
    const now = Date.now();
    const updated: Record<string, boolean> = {};
    ABSURD_COOKIES.forEach(c => { updated[c.id] = true; });
    try {
      localStorage.setItem('cattivo_gusto_cookie_choices', JSON.stringify(updated));
      localStorage.setItem('cattivo_gusto_cookie_timestamp', now.toString());
      localStorage.setItem('cattivo_gusto_cookie_accepted', 'true');
    } catch (e) {
      // ignore
    }
  };

  // Sync subscription state
  const handleSubscribeSuccess = (planName: string) => {
    setIsSubscribed(true);
    setSubscribedPlan(planName);
    localStorage.setItem('cattivo_gusto_vip', 'true');
    localStorage.setItem('cattivo_gusto_plan', planName);
  };

  // Toggle bookmark save
  const handleToggleSave = (articleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (savedArticleIds.includes(articleId)) {
      setSavedArticleIds(savedArticleIds.filter(id => id !== articleId));
    } else {
      setSavedArticleIds([...savedArticleIds, articleId]);
    }
  };

  // Filtered Articles Calculation
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(art => {
      // Category filter
      if (selectedCategory !== 'tutti' && art.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = art.title.toLowerCase().includes(q);
        const inSubtitle = art.subtitle.toLowerCase().includes(q);
        const inAuthor = art.author.toLowerCase().includes(q);
        const inCategory = art.categoryLabel.toLowerCase().includes(q);
        if (!inTitle && !inSubtitle && !inAuthor && !inCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Saved Articles List
  const savedArticles = useMemo(() => {
    return ARTICLES.filter(art => savedArticleIds.includes(art.id));
  }, [savedArticleIds]);

  // Find Featured Hero Article
  const heroArticle = ARTICLES.find(art => art.featured) || ARTICLES[0];
  const gridArticles = filteredArticles.filter(art => art.id !== heroArticle.id || selectedCategory !== 'tutti' || searchQuery.trim() !== '');

  // Handle Article Selection
  const handleReadArticle = (id: string) => {
    setSelectedArticleId(id);
    setActiveView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.set('article', id);
      window.history.pushState({ articleId: id }, '', url.toString());
    } catch (e) {
      // ignore
    }
  };

  // Currently Selected Article Object for Reader View
  const currentReaderArticle = ARTICLES.find(art => art.id === selectedArticleId) || heroArticle;

  return (
    <div className="min-[#F4F1EA] bg-[#F4F1EA] text-[#1A1C1C] font-grotesk flex flex-col justify-between min-h-screen">
      
      {/* Header */}
      <Header
        onOpenMenu={() => setIsDrawerOpen(true)}
        activeTab={activeView}
        setActiveTab={(tab) => {
          if (tab === 'home' || tab === 'feed') {
            handleGoHome();
          } else {
            setActiveView(tab as any);
            setSelectedArticleId(null);
          }
        }}
        onOpenManifesto={() => setIsManifestoOpen(true)}
        onOpenSubscriptions={() => setActiveView('subscriptions')}
        savedCount={savedArticleIds.length}
        onOpenBookmarks={() => setActiveView('bookmarks')}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSubscribed={isSubscribed}
        onOpenCookies={() => setIsCookieModalOpen(true)}
        onOpenGroqChat={() => setActiveView('groq_chat')}
      />

      {/* Slide-out Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveView('feed');
          setSelectedArticleId(null);
        }}
        activeView={activeView}
        onGoHome={handleGoHome}
        onOpenManifesto={() => setIsManifestoOpen(true)}
        onOpenSubscriptions={() => setActiveView('subscriptions')}
        onOpenBookmarks={() => setActiveView('bookmarks')}
        onOpenContacts={() => setActiveView('contacts')}
        onOpenLegal={handleOpenLegal}
        onOpenCookies={() => setIsCookieModalOpen(true)}
        onOpenGroqChat={() => setActiveView('groq_chat')}
        savedCount={savedArticleIds.length}
      />

      {/* Main View Switcher */}
      <main className="flex-1">

        {/* CONTACTS VIEW */}
        {activeView === 'contacts' && (
          <ContactsView
            onBackHome={handleGoHome}
            onOpenGroqChat={() => setActiveView('groq_chat')}
          />
        )}

        {/* GROQ AI CHAT VIEW */}
        {activeView === 'groq_chat' && (
          <GroqChatView onBackToHome={handleGoHome} />
        )}
        
        {/* READER VIEW */}
        {activeView === 'reader' && (
          <ArticleDetailView
            article={currentReaderArticle}
            onBack={() => {
              setActiveView('feed');
              setSelectedArticleId(null);
            }}
            onOpenManifesto={() => setIsManifestoOpen(true)}
            onOpenGroqChat={() => setActiveView('groq_chat')}
            onSelectArticle={handleReadArticle}
            isSaved={savedArticleIds.includes(currentReaderArticle.id)}
            onToggleSave={handleToggleSave}
          />
        )}

        {/* SUBSCRIPTIONS VIEW */}
        {activeView === 'subscriptions' && (
          <SubscriptionsView
            onBack={() => setActiveView('feed')}
            isSubscribed={isSubscribed}
            onSubscribeSuccess={handleSubscribeSuccess}
          />
        )}

        {/* BOOKMARKS VIEW */}
        {activeView === 'bookmarks' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-24">
            <div className="flex justify-between items-center border-b-2 border-black pb-4 mb-6">
              <h1 className="font-anton text-4xl uppercase tracking-tight">
                ARTICOLI SALVATI ({savedArticles.length})
              </h1>
              <button
                onClick={() => setActiveView('feed')}
                className="bg-black text-white px-4 py-2 font-anton text-sm uppercase hover:bg-[#A0FF00] hover:text-black border-2 border-black transition"
              >
                TORNA ALL'EDICOLA
              </button>
            </div>

            {savedArticles.length === 0 ? (
              <div className="bg-white border-2 border-black p-8 text-center space-y-3 shadow-[4px_4px_0px_#000]">
                <Bookmark className="w-12 h-12 mx-auto text-neutral-400" />
                <h3 className="font-anton text-2xl uppercase">NESSUN ARTICOLO SALVATO</h3>
                <p className="font-typewriter text-xs text-neutral-600">
                  Clicca sull'icona del segnalibro sugli articoli che desideri conservare per letture notturne.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedArticles.map(art => (
                  <ArticleCard
                    key={art.id}
                    article={art}
                    onRead={handleReadArticle}
                    isSaved={true}
                    onToggleSave={handleToggleSave}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* FEED / HOME VIEW */}
        {activeView === 'feed' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20">
            
            {/* Category Filter Pills Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar border-b-2 border-black">
              <span className="font-anton text-xs uppercase shrink-0 text-black flex items-center gap-1 mr-2">
                <Filter className="w-4 h-4" /> FILTRA:
              </span>
              {CATEGORIES.map(cat => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`shrink-0 font-anton text-xs sm:text-sm uppercase px-3.5 py-1.5 border-2 border-black transition shadow-[2px_2px_0px_#000] cursor-pointer ${
                      isActive 
                        ? 'bg-black text-[#A0FF00] shadow-[3px_3px_0px_#A0FF00] translate-x-0.5' 
                        : 'bg-white hover:bg-[#A0FF00] text-black'
                    }`}
                  >
                    <span className="mr-1">{cat.badge}</span>
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Active Search Filter Pill */}
            {searchQuery.trim() && (
              <div className="mb-6 bg-[#A0FF00] border-2 border-black p-3 font-mono text-sm flex items-center justify-between shadow-[3px_3px_0px_#000]">
                <span>Risultati di ricerca per: <strong>"{searchQuery}"</strong> ({filteredArticles.length} articoli trovati)</span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="bg-black text-white px-2 py-0.5 text-xs font-anton hover:bg-white hover:text-black transition"
                >
                  RESET CANCELLA X
                </button>
              </div>
            )}

            {/* Featured Hero Article (Showed when on 'tutti' category and no search query) */}
            {selectedCategory === 'tutti' && !searchQuery.trim() && (
              <HeroArticleCard
                article={heroArticle}
                onRead={handleReadArticle}
                isSaved={savedArticleIds.includes(heroArticle.id)}
                onToggleSave={handleToggleSave}
              />
            )}

            {/* Articles Grid Title */}
            <div className="flex items-center justify-between mb-6 border-b-2 border-black pb-2">
              <h2 className="font-anton text-3xl uppercase tracking-tight text-black flex items-center gap-2">
                <span>IN PRIMA PAGINA</span>
                <span className="text-xs font-mono font-normal text-neutral-600">
                  ({gridArticles.length} INCHIESTE)
                </span>
              </h2>

              <button
                onClick={() => setIsManifestoOpen(true)}
                className="hidden sm:flex items-center gap-1 font-typewriter text-xs font-bold text-black underline hover:text-[#A0FF00] hover:bg-black p-1 transition"
              >
                🔥 Firma il Manifesto dell'Assurdo
              </button>
            </div>

            {/* Main Articles Grid */}
            {gridArticles.length === 0 ? (
              <div className="bg-white border-2 border-black p-8 text-center space-y-3 shadow-[4px_4px_0px_#000]">
                <AlertCircle className="w-10 h-10 mx-auto text-black" />
                <h3 className="font-anton text-2xl uppercase">NESSUN ARTICOLO TROVATO NEL CAOS</h3>
                <p className="font-typewriter text-xs text-neutral-600">
                  Prova a modificare i termini di ricerca o la categoria selezionata.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('tutti');
                    setSearchQuery('');
                  }}
                  className="bg-[#A0FF00] text-black font-anton text-sm px-4 py-2 uppercase border-2 border-black hover:bg-black hover:text-[#A0FF00] transition"
                >
                  MOSTRA TUTTI GLI ARTICOLI
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {gridArticles.map(art => (
                  <ArticleCard
                    key={art.id}
                    article={art}
                    onRead={handleReadArticle}
                    isSaved={savedArticleIds.includes(art.id)}
                    onToggleSave={handleToggleSave}
                  />
                ))}
              </div>
            )}

            {/* Call to action card banner */}
            <div className="mt-16 bg-black text-[#F4F1EA] border-3 border-black p-8 shadow-[8px_8px_0px_#A0FF00] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="bg-[#A0FF00] text-black font-anton text-xs px-2.5 py-1 border border-black uppercase font-bold">
                  SOTTOSCRIZIONE POPOLARE
                </span>
                <h3 className="font-anton text-3xl sm:text-4xl uppercase text-[#A0FF00] tracking-tight">
                  VUOI RICEVERE PIÙ CAOS DIGITALMENTE?
                </h3>
                <p className="font-typewriter text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Abbonati a Cattivo Gusto per €4,99/mese e sostieni la redazione dell'Alter Ego. Ottieni la tessera VIP e accesso a tutti gli articoli segreti.
                </p>
              </div>

              <button
                onClick={() => setActiveView('subscriptions')}
                className="bg-[#A0FF00] text-black border-2 border-black px-6 py-3 font-anton text-lg uppercase hover:bg-white hover:text-black transition shadow-[4px_4px_0px_#000] shrink-0"
              >
                ABBONATI DA €4,99
              </button>
            </div>

          </div>
        )}

      </main>

      {/* Manifesto Interactive Canvas Modal */}
      <ManifestoModal
        isOpen={isManifestoOpen}
        onClose={() => setIsManifestoOpen(false)}
      />

      {/* Grotesque Legal Privacy & Terms Modal */}
      <LegalAbsurdModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalTab}
        onOpenCookies={() => setIsCookieModalOpen(true)}
      />

      {/* Absurd 24-Hour Cookie Preference Manager Modal */}
      <AbsurdCookieModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
      />

      {/* Persistent / Auto-expiring 24h Cookie Notice Banner */}
      <CookieNoticeBanner
        onOpenPreferences={() => setIsCookieModalOpen(true)}
        onAcceptAllQuick={handleAcceptAllCookiesQuick}
      />

      {/* Floating Classic Speech Bubble ("Nuvoletta Classica") Groq AI Chat Button */}
      <FloatingNuvolettaGroq
        onClick={() => {
          setActiveView('groq_chat');
          setSelectedArticleId(null);
        }}
        activeView={activeView}
      />

      {/* Footer */}
      <Footer
        onOpenSubscriptions={() => setActiveView('subscriptions')}
        onOpenManifesto={() => setIsManifestoOpen(true)}
        onGoHome={handleGoHome}
        onOpenContacts={() => setActiveView('contacts')}
        onOpenLegal={handleOpenLegal}
        onOpenCookies={() => setIsCookieModalOpen(true)}
        onOpenGroqChat={() => setActiveView('groq_chat')}
      />

      {/* Sticky Mobile Bottom Nav */}
      <BottomNavMobile
        activeTab={activeView}
        setActiveTab={(tab) => {
          if (tab === 'home' || tab === 'feed') {
            handleGoHome();
          } else {
            setActiveView(tab as any);
            setSelectedArticleId(null);
          }
        }}
        onOpenManifesto={() => setIsManifestoOpen(true)}
        onOpenSubscriptions={() => setActiveView('subscriptions')}
        onOpenBookmarks={() => setActiveView('bookmarks')}
        onOpenGroqChat={() => setActiveView('groq_chat')}
        savedCount={savedArticleIds.length}
      />

    </div>
  );
}
