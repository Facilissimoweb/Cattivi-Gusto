import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldAlert, Clock, Check, AlertTriangle, RefreshCw, Flame, Sparkles, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CookieItem {
  id: string;
  name: string;
  category: 'essenziali' | 'analitici' | 'profilazione' | 'terze_parti';
  description: string;
  required?: boolean;
  retention: string;
}

export const ABSURD_COOKIES: CookieItem[] = [
  // Essenziali
  {
    id: 'breadcrumbs_divano',
    name: '🍞 cookie_briciole_divano_v4.2',
    category: 'essenziali',
    description: 'Traccia la posizione atomica delle briciole di focaccia e brioche cadute nelle fessure del divano durante la lettura notturna.',
    required: true,
    retention: "24 ore (o finché non passi l'aspirapolvere)",
  },
  {
    id: 'cat_gaze_frequency',
    name: '🐱 cookie_sguardo_giudicante_gatto',
    category: 'essenziali',
    description: 'Misura la frequenza in Hertz con cui il tuo gatto (o quello del vicino) ti fissa disapprovando le tue scelte di vita.',
    required: true,
    retention: '24 ore esatte',
  },

  // Analitici
  {
    id: 'sigh_depth_meter',
    name: '💨 cookie_profondita_sospiri',
    category: 'analitici',
    description: 'Rileva il volume di aria emesso durante i sospiri sconfortati alla lettura dei titoli di giornale.',
    retention: '24 ore',
  },
  {
    id: 'left_sock_blackhole',
    name: '🧦 cookie_tracciamento_calzino_sinistro',
    category: 'analitici',
    description: "Sincronizza le coordinate del calzino sinistro scomparso misteriosamente all'interno del cestello della lavatrice.",
    retention: '24 ore',
  },
  {
    id: 'puddle_dramaturgy',
    name: '🌧️ cookie_riflesso_pozzanghera',
    category: 'analitici',
    description: 'Calcola la carica drammatica del tuo riflesso quando cammini sotto la pioggia senza ombrello.',
    retention: '24 ore',
  },

  // Profilazione
  {
    id: 'toaster_telepathy',
    name: '⚡ cookie_telepatia_tostapane_router',
    category: 'profilazione',
    description: 'Stabilisce un canale quantistico tra la doratura del tuo toast e i server di connessione di Reykjavik.',
    retention: '24 ore',
  },
  {
    id: 'pigeon_surveillance',
    name: '🐦 cookie_rete_piccioni_spia',
    category: 'profilazione',
    description: 'Permette ai piccioni appostati sul cornicione di inviare dati biometrici sulle tue espressioni facciali.',
    retention: '24 ore',
  },
  {
    id: 'midnight_mayo_craving',
    name: '🥪 cookie_desiderio_maionese_03am',
    category: 'profilazione',
    description: 'Prevede con accuratezza del 98.4% se aprirai il frigorifero alle 3:14 del mattino in cerca di salse.',
    retention: '24 ore',
  },

  // Terze Parti
  {
    id: 'alien_fridge_beacon',
    name: '🛸 cookie_faro_frigorifero_alieno',
    category: 'terze_parti',
    description: 'Invia frequenze radio direttamente al freezer di una civiltà extraterrestre nella costellazione di Orione.',
    retention: '24 ore',
  },
  {
    id: 'microwave_beep_sync',
    name: '🔔 cookie_bip_microonde_notturno',
    category: 'terze_parti',
    description: "Sincronizza l'ultimo bip del microonde esattamente nel secondo in cui il resto della casa è in silenzio totale.",
    retention: '24 ore',
  },
];

const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;

interface AbsurdCookieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsentSaved?: () => void;
}

export const AbsurdCookieModal: React.FC<AbsurdCookieModalProps> = ({
  isOpen,
  onClose,
  onConsentSaved,
}) => {
  const [selectedCookies, setSelectedCookies] = useState<Record<string, boolean>>(() => {
    // Default required cookies true, others false or loaded
    const initial: Record<string, boolean> = {};
    ABSURD_COOKIES.forEach(c => {
      initial[c.id] = c.required ? true : false;
    });

    try {
      const savedState = localStorage.getItem('cattivo_gusto_cookie_choices');
      const savedTimestamp = localStorage.getItem('cattivo_gusto_cookie_timestamp');
      
      if (savedState && savedTimestamp) {
        const elapsed = Date.now() - parseInt(savedTimestamp, 10);
        if (elapsed < TWENTY_FOUR_HOURS_MS) {
          return { ...initial, ...JSON.parse(savedState) };
        }
      }
    } catch (e) {
      // fallback
    }
    return initial;
  });

  const [lastConsentTime, setLastConsentTime] = useState<number | null>(() => {
    const savedTimestamp = localStorage.getItem('cattivo_gusto_cookie_timestamp');
    return savedTimestamp ? parseInt(savedTimestamp, 10) : null;
  });

  const [timeLeftStr, setTimeLeftStr] = useState<string>('');
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>('all');

  // Countdown clock for 24h expiration & sync state when opening
  useEffect(() => {
    if (isOpen) {
      try {
        const savedState = localStorage.getItem('cattivo_gusto_cookie_choices');
        const savedTimestamp = localStorage.getItem('cattivo_gusto_cookie_timestamp');
        const initial: Record<string, boolean> = {};
        ABSURD_COOKIES.forEach(c => {
          initial[c.id] = c.required ? true : false;
        });

        if (savedState) {
          setSelectedCookies({ ...initial, ...JSON.parse(savedState) });
        } else {
          setSelectedCookies(initial);
        }

        if (savedTimestamp) {
          setLastConsentTime(parseInt(savedTimestamp, 10));
        } else {
          setLastConsentTime(null);
        }
      } catch (e) {
        // fallback
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const updateCountdown = () => {
      if (!lastConsentTime) {
        setTimeLeftStr('Nessun consenso salvato (Richiesto)');
        setIsExpired(true);
        return;
      }

      const now = Date.now();
      const diff = lastConsentTime + TWENTY_FOUR_HOURS_MS - now;

      if (diff <= 0) {
        setTimeLeftStr('SCADUTO ORA! (I consensi devono essere rinnovati)');
        setIsExpired(true);
      } else {
        setIsExpired(false);
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeftStr(`${hours}h ${minutes}m ${seconds}s al rinnovo automatico (24h)`);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [lastConsentTime]);

  if (!isOpen) return null;

  const handleToggleCookie = (id: string, required?: boolean) => {
    if (required) return;
    setSelectedCookies(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSavePreferences = (acceptAll = false, rejectOptional = false) => {
    const now = Date.now();
    let updated: Record<string, boolean> = {};

    if (acceptAll) {
      ABSURD_COOKIES.forEach(c => { updated[c.id] = true; });
    } else if (rejectOptional) {
      ABSURD_COOKIES.forEach(c => { updated[c.id] = c.required ? true : false; });
    } else {
      updated = { ...selectedCookies };
    }

    // Force essential cookies to true
    ABSURD_COOKIES.filter(c => c.required).forEach(c => { updated[c.id] = true; });

    setSelectedCookies(updated);
    setLastConsentTime(now);

    try {
      localStorage.setItem('cattivo_gusto_cookie_choices', JSON.stringify(updated));
      localStorage.setItem('cattivo_gusto_cookie_timestamp', now.toString());
      localStorage.setItem('cattivo_gusto_cookie_accepted', 'true');
      window.dispatchEvent(new Event('cattivo_gusto_cookie_updated'));
    } catch (e) {
      // ignore
    }

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    if (onConsentSaved) onConsentSaved();
    onClose();
  };

  const handleSimulate24hExpiration = () => {
    // Reset timestamp to 25 hours ago
    const past25h = Date.now() - (25 * 60 * 60 * 1000);
    try {
      localStorage.setItem('cattivo_gusto_cookie_timestamp', past25h.toString());
      localStorage.removeItem('cattivo_gusto_cookie_accepted');
      window.dispatchEvent(new Event('cattivo_gusto_cookie_updated'));
    } catch (e) {
      // ignore
    }
    setLastConsentTime(past25h);
    setIsExpired(true);
  };

  const categories = [
    { key: 'essenziali', title: '🍞 Cookie Tecnici Obbligatori per la Fisica Quantistica', color: 'bg-black text-[#A0FF00]' },
    { key: 'analitici', title: '💨 Cookie Analitici di Angoscia & Disperazione', color: 'bg-white text-black' },
    { key: 'profilazione', title: '⚡ Cookie di Profilazione Fanta-Sociologica', color: 'bg-[#A0FF00] text-black' },
    { key: 'terze_parti', title: '🛸 Cookie di Terze Parti Bizzarre & Inconsuete', color: 'bg-[#FFFEEB] text-black' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-[#F4F1EA] border-4 border-black p-5 sm:p-8 w-full max-w-3xl shadow-[12px_12px_0px_#000] relative max-h-[92vh] overflow-y-auto flex flex-col justify-between">
        
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black text-white p-1.5 border-2 border-black hover:bg-[#A0FF00] hover:text-black transition cursor-pointer"
          title="Chiudi pannello cookie"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Header Title Banner */}
          <div className="flex items-center gap-2 mb-2">
            <Cookie className="w-6 h-6 text-black fill-[#A0FF00]" />
            <span className="bg-[#A0FF00] text-black font-anton text-xs px-2.5 py-1 border border-black uppercase font-bold">
              REGOLAMENTO RIGIDO DI SCADENZA 24 ORE
            </span>
          </div>

          <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-black mb-2">
            PANNELLO COOKIE & PREFERENZE DIGITALI
          </h2>

          <p className="font-typewriter text-xs sm:text-sm text-neutral-800 leading-relaxed mb-4">
            In ottemperanza alla <em>Direttiva Grottesca UE/2026</em>, tutti i tuoi consensi scadono tassativamente dopo <strong>24 ORE ESATTE</strong>, dopodiché il sistema ti riproporrà questo pannello per riattivare le tue preferenze.
          </p>

          {/* 24h Expiration Timer Badge */}
          <div className="bg-black text-[#A0FF00] border-2 border-black p-3.5 mb-6 font-mono text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-[4px_4px_0px_#A0FF00]">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#A0FF00] shrink-0 animate-spin" />
              <div>
                <span className="text-white block font-bold text-[10px] uppercase">STATO DEL CONTRATTO TEMPORALE:</span>
                <span className="text-[#A0FF00] font-bold text-sm sm:text-base">{timeLeftStr}</span>
              </div>
            </div>

            <button
              onClick={handleSimulate24hExpiration}
              className="bg-white text-black font-anton text-xs px-2.5 py-1 uppercase border border-black hover:bg-[#A0FF00] transition cursor-pointer self-end sm:self-auto shrink-0"
              title="Testa cosa succede allo scadere delle 24 ore"
            >
              <RefreshCw className="w-3.5 h-3.5 inline mr-1" /> SIMULA SCADENZA 24H
            </button>
          </div>

          {/* Cookie Selection Categories */}
          <div className="space-y-4 mb-6">
            {categories.map(cat => {
              const catCookies = ABSURD_COOKIES.filter(c => c.category === cat.key);
              return (
                <div key={cat.key} className="border-2 border-black bg-white shadow-[4px_4px_0px_#000]">
                  {/* Category Header */}
                  <div className={`p-3 border-b-2 border-black font-anton text-sm sm:text-base uppercase flex items-center justify-between ${cat.color}`}>
                    <span>{cat.title} ({catCookies.length})</span>
                  </div>

                  {/* Cookie items inside category */}
                  <div className="p-3 space-y-3 font-typewriter text-xs">
                    {catCookies.map(cookie => {
                      const isChecked = !!selectedCookies[cookie.id];
                      return (
                        <div
                          key={cookie.id}
                          onClick={() => handleToggleCookie(cookie.id, cookie.required)}
                          className={`p-3 border-2 border-black transition cursor-pointer flex items-start gap-3 ${
                            isChecked
                              ? 'bg-[#FFFEEB] border-black shadow-[2px_2px_0px_#000]'
                              : 'bg-neutral-50 border-neutral-300 opacity-75'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            disabled={cookie.required}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleToggleCookie(cookie.id, cookie.required);
                            }}
                            className="w-5 h-5 mt-0.5 accent-black shrink-0 cursor-pointer"
                          />

                          <div className="flex-1 space-y-1">
                            <div className="flex flex-wrap items-center justify-between gap-2 font-mono font-bold text-black text-xs sm:text-sm">
                              <span>{cookie.name}</span>
                              {cookie.required ? (
                                <span className="bg-black text-white text-[10px] px-2 py-0.5 uppercase font-bold flex items-center gap-1">
                                  <Lock className="w-3 h-3 text-[#A0FF00]" /> OBBLIGATORIO PER FISICA
                                </span>
                              ) : (
                                <span className="text-[10px] text-neutral-500 font-mono">
                                  SCADENZA: {cookie.retention}
                                </span>
                              )}
                            </div>
                            <p className="text-neutral-700 text-xs leading-relaxed">
                              {cookie.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="pt-4 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#F4F1EA] sticky bottom-0">
          <button
            onClick={() => handleSavePreferences(false, true)}
            className="w-full sm:w-auto bg-white text-black font-anton text-xs sm:text-sm px-4 py-2.5 border-2 border-black hover:bg-neutral-200 transition shadow-[2px_2px_0px_#000] cursor-pointer text-center"
          >
            RIFIUTA TUTTI I FACOLTATIVI
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => handleSavePreferences(false, false)}
              className="flex-1 sm:flex-none bg-black text-[#A0FF00] font-anton text-xs sm:text-sm px-5 py-2.5 border-2 border-black hover:bg-[#A0FF00] hover:text-black transition shadow-[3px_3px_0px_#000] cursor-pointer text-center"
            >
              SALVA SELEZIONE (VALIDE 24H)
            </button>

            <button
              onClick={() => handleSavePreferences(true, false)}
              className="flex-1 sm:flex-none bg-[#A0FF00] text-black font-anton text-xs sm:text-sm px-5 py-2.5 border-2 border-black hover:bg-black hover:text-[#A0FF00] transition shadow-[3px_3px_0px_#000] cursor-pointer text-center flex items-center justify-center gap-1"
            >
              <Flame className="w-4 h-4 fill-black shrink-0" />
              <span>ACCETTA TUTTO L'ABISSO</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
