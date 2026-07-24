import React, { useState, useEffect } from 'react';
import { Cookie, ChevronRight } from 'lucide-react';

interface CookieNoticeBannerProps {
  onOpenPreferences: () => void;
  onAcceptAllQuick: () => void;
}

const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;

export const CookieNoticeBanner: React.FC<CookieNoticeBannerProps> = ({
  onOpenPreferences,
  onAcceptAllQuick,
}) => {
  const [shouldShowBanner, setShouldShowBanner] = useState<boolean>(false);

  const checkConsentState = () => {
    try {
      const savedTimestamp = localStorage.getItem('cattivo_gusto_cookie_timestamp');
      const accepted = localStorage.getItem('cattivo_gusto_cookie_accepted');

      if (!savedTimestamp || !accepted) {
        setShouldShowBanner(true);
        return;
      }

      const elapsed = Date.now() - parseInt(savedTimestamp, 10);
      if (elapsed >= TWENTY_FOUR_HOURS_MS) {
        // Expired after 24 hours! Show banner again to force renewal!
        setShouldShowBanner(true);
      } else {
        setShouldShowBanner(false);
      }
    } catch (e) {
      setShouldShowBanner(true);
    }
  };

  useEffect(() => {
    checkConsentState();
    const interval = setInterval(checkConsentState, 3000);

    const handleCookieUpdated = () => {
      checkConsentState();
    };

    window.addEventListener('cattivo_gusto_cookie_updated', handleCookieUpdated);
    return () => {
      clearInterval(interval);
      window.removeEventListener('cattivo_gusto_cookie_updated', handleCookieUpdated);
    };
  }, []);

  const handleAcceptAll = () => {
    onAcceptAllQuick();
    setShouldShowBanner(false);
  };

  if (!shouldShowBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#A0FF00] text-black border-t-4 border-black p-4 sm:p-5 shadow-[0_-6px_0px_#000] font-typewriter">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-start gap-3 max-w-3xl">
          <Cookie className="w-8 h-8 text-black shrink-0 mt-1 fill-black" />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-black text-[#A0FF00] font-anton text-xs px-2 py-0.5 uppercase border border-black font-bold">
                ⚠️ SCADENZA RIGIDA 24 ORE
              </span>
              <span className="font-mono text-xs font-bold text-black uppercase">
                AVVISO OBBLIGATORIO DI CONSENSO SCADUTO O MANCANTE
              </span>
            </div>

            <p className="text-xs sm:text-sm font-typewriter text-black leading-snug font-medium">
              I tuoi consensi sui <strong>Cookie Briciole, Telepatia Tostapane e Sguardi del Gatto</strong> sono scaduti o non ancora configurati per le prossime 24 ore. Seleziona le preferenze grottesche prima di proseguire la lettura.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
          <button
            onClick={onOpenPreferences}
            className="flex-1 md:flex-none bg-white text-black font-anton text-xs sm:text-sm px-4 py-2.5 border-2 border-black hover:bg-black hover:text-white transition shadow-[3px_3px_0px_#000] cursor-pointer"
          >
            Scegli Quali Attivare (Elenco)
          </button>

          <button
            onClick={handleAcceptAll}
            className="flex-1 md:flex-none bg-black text-[#A0FF00] font-anton text-xs sm:text-sm px-5 py-2.5 border-2 border-black hover:bg-white hover:text-black transition shadow-[3px_3px_0px_#000] cursor-pointer flex items-center justify-center gap-1"
          >
            <span>Accetta per 24 Ore</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

