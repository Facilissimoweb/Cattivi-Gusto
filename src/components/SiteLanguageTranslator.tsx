import React, { useState, useEffect } from 'react';
import { Globe, Check, X, Languages, Sparkles } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: 'it', name: 'Italiano (Originale)', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh-CN', name: '中文 (Simplified)', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export const SiteLanguageTranslator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('it');

  // Load Google Translate script once on mount
  useEffect(() => {
    // Check if script is already injected
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: 'it',
              includedLanguages: 'it,en,es,fr,de,zh-CN,ja,pt,ru,ar',
              autoDisplay: false,
            },
            'google_translate_element_hidden'
          );
        }
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Read current googtrans cookie
    const getCookie = (name: string) => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) return match[2];
      return null;
    };

    const cookieVal = getCookie('googtrans');
    if (cookieVal) {
      const parts = cookieVal.split('/');
      const target = parts[parts.length - 1];
      if (target) {
        setCurrentLang(target);
      }
    }

    // Continuously ensure Google Translate banner frame is hidden and body position is unaffected
    const interval = setInterval(() => {
      if (document.body.style.top !== '0px') {
        document.body.style.top = '0px';
      }
      const bannerIframe = document.querySelector('.goog-te-banner-frame') as HTMLElement;
      if (bannerIframe) {
        bannerIframe.style.display = 'none';
        bannerIframe.style.visibility = 'hidden';
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);

    if (langCode === 'it') {
      // Reset to original Italian
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      window.location.reload();
      return;
    }

    // Set googtrans cookie for target language
    const cookieString = `/it/${langCode}`;
    document.cookie = `googtrans=${cookieString}; path=/;`;
    document.cookie = `googtrans=${cookieString}; path=/; domain=${window.location.hostname};`;

    // Try directly updating Google Translate select dropdown if present in DOM
    const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      // Reload page to force Google Translate engine to render
      window.location.reload();
    }

    setIsOpen(false);
  };

  const selectedLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left z-50">
      {/* Hidden container required for Google Translate script */}
      <div id="google_translate_element_hidden" className="hidden" />

      {/* Real Translation Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 bg-white text-black border-2 border-black px-2.5 py-1.5 font-anton text-xs hover:bg-[#A0FF00] transition shadow-[2px_2px_0px_#000] cursor-pointer whitespace-nowrap"
        title="Traduci contenuti sito"
      >
        <Globe className="w-4 h-4 text-black" />
        <span className="hidden sm:inline font-bold uppercase">{selectedLangObj.flag} {selectedLangObj.code.toUpperCase()}</span>
        <span className="sm:hidden font-bold">{selectedLangObj.flag}</span>
      </button>

      {/* Language Selection Modal Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white border-3 border-black p-5 max-w-sm w-full shadow-[8px_8px_0px_#000] relative space-y-4">
            <div className="flex items-center justify-between border-b-2 border-black pb-3">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-black" />
                <h3 className="font-anton text-lg uppercase tracking-tight">TRADUCI SITO</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-black text-white p-1 hover:bg-red-600 transition border border-black cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="font-typewriter text-xs text-neutral-700">
              Seleziona la lingua per tradurre istantaneamente tutti gli articoli e le sezioni del sito:
            </p>

            <div className="grid grid-cols-1 gap-1.5 max-h-60 overflow-y-auto pr-1">
              {LANGUAGES.map((lang) => {
                const isSelected = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 border-2 border-black font-anton text-xs uppercase transition cursor-pointer ${
                      isSelected
                        ? 'bg-black text-[#A0FF00] shadow-[2px_2px_0px_#A0FF00]'
                        : 'bg-white hover:bg-[#A0FF00] text-black shadow-[2px_2px_0px_#000]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-[#A0FF00]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-neutral-300 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
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
