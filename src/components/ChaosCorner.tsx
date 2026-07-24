import React, { useState } from 'react';
import { Sparkles, Flame, RefreshCw, Bot, HelpCircle, AlertTriangle, ShieldCheck, ArrowLeft, Volume2, Copy, Check, Languages } from 'lucide-react';
import { GURU_QUOTES, INANIMATE_FORTUNES, VOID_WEATHER, CAT_PARANOIA_TESTS } from '../data/chaos';
import { UnderTheHoodTranslator } from './UnderTheHoodTranslator';

interface ChaosCornerProps {
  onBack: () => void;
  onOpenManifesto: () => void;
  onOpenTranslator?: () => void;
}

export const ChaosCorner: React.FC<ChaosCornerProps> = ({ onBack, onOpenManifesto, onOpenTranslator }) => {
  // Guru del Nulla State
  const [currentGuruQuote, setCurrentGuruQuote] = useState(GURU_QUOTES[0]);
  const [isLoadingAiGuru, setIsLoadingAiGuru] = useState(false);

  // Horoscope State
  const [selectedObjectId, setSelectedObjectId] = useState(INANIMATE_FORTUNES[0].id);

  // Cat Paranoia Calculator State
  const [catRiskScore, setCatRiskScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([0, 0, 0]);

  // Generate Guru Wisdom (Groq / Gemini AI)
  const handleGenerateGuruQuote = async () => {
    setIsLoadingAiGuru(true);
    try {
      const topics = [
        "il caffè freddo e il senso del lavoro",
        "i lavori in corso perenni e il destino umano",
        "il rumore del condizionatore e la meditazione",
        "il tostapane che brucia il pane e la rabbia repressione",
        "il vuoto cosmico nei messaggi vocali da tre minuti",
        "i calzini spaiati e il disordine dell'anima",
        "il gatto che ti fissa senza battere ciglio",
        "la riunione di lavoro che poteva essere una mail"
      ];
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];

      const res = await fetch('/api/ai/generate-absurdity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'guru',
          prompt: `Genera una perla di saggezza tagliente, grottesca e satirica del Guru del Nulla incentrata su: ${randomTopic}. Max 2-3 frasi folgoranti.`
        })
      });
      const data = await res.json();
      if (data.text) {
        setCurrentGuruQuote(data.text);
      } else {
        const randomQ = GURU_QUOTES[Math.floor(Math.random() * GURU_QUOTES.length)];
        setCurrentGuruQuote(randomQ);
      }
    } catch (err) {
      const randomQ = GURU_QUOTES[Math.floor(Math.random() * GURU_QUOTES.length)];
      setCurrentGuruQuote(randomQ);
    } finally {
      setIsLoadingAiGuru(false);
    }
  };

  // Calculate Cat Paranoia Score
  const calculateCatRisk = () => {
    const sum = answers.reduce((a, b) => a + b, 0);
    const score = Math.min(99, Math.max(30, 45 + sum * 15 + Math.floor(Math.random() * 10)));
    setCatRiskScore(score);
  };

  const selectedFortune = INANIMATE_FORTUNES.find(f => f.id === selectedObjectId) || INANIMATE_FORTUNES[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-24 animate-in fade-in duration-200 space-y-12">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b-2 border-black pb-4">
        <button
          onClick={onBack}
          className="bg-black text-white px-4 py-2 font-anton text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-[#A0FF00] hover:text-black border-2 border-black transition shadow-[3px_3px_0px_#000]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>TORNA ALLA RIVISTA</span>
        </button>

        <span className="bg-[#A0FF00] text-black font-anton text-xs sm:text-sm px-3 py-1 border-2 border-black uppercase tracking-widest font-bold">
          LABORATORIO DELL'ASSURDO
        </span>
      </div>

      {/* Main Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-black mb-2">
          L'ANGOLO DEL CAOS
        </h1>
        <p className="font-typewriter text-sm sm:text-base text-neutral-700">
          Strumenti interattivi creati dalla redazione dell'Alter Ego per misurare l'irrilevanza quotidiana.
        </p>
      </div>

      {/* Tool 1: Guru del Nulla 5-Minute Generator */}
      <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] relative">

        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b-2 border-black pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight">
              GURU DEL NULLA IN 5 MINUTI
            </h2>
          </div>
          <span className="bg-[#A0FF00] text-black font-mono text-xs px-2 py-0.5 border border-black font-bold">
            GENERATORE DI SAGGEZZA INUTILE
          </span>
        </div>

        <div className="bg-[#FAF8F5] border-2 border-black p-6 font-typewriter text-base sm:text-lg text-neutral-900 mb-6 shadow-[3px_3px_0px_#000] min-h-[100px] flex items-center justify-center text-center italic relative">
          "{currentGuruQuote}"
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleGenerateGuruQuote}
            disabled={isLoadingAiGuru}
            className="bg-[#A0FF00] text-black border-2 border-black px-6 py-3 font-anton text-lg uppercase flex items-center gap-2 hover:bg-black hover:text-[#A0FF00] transition shadow-[4px_4px_0px_#000] active:translate-x-0.5"
          >
            {isLoadingAiGuru ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>CONSULTANDO L'ALTER EGO...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>GENERA UN NUOVO CONSIGLIO INUTILE</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Tool 2: Horoscope for Inanimate Objects */}
      <section className="bg-[#FAF8F5] border-3 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000]">
        <div className="border-b-2 border-black pb-3 mb-6">
          <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight">
            OROSCOPO DEGLI OGGETTI INANIMATI
          </h2>
          <p className="font-typewriter text-xs text-neutral-600">
            Seleziona l'elettrodomestico o l'oggetto di casa per scoprire cosa dicono le sue stelle.
          </p>
        </div>

        {/* Object Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          {INANIMATE_FORTUNES.map((obj) => (
            <button
              key={obj.id}
              onClick={() => setSelectedObjectId(obj.id)}
              className={`p-3 border-2 border-black font-anton text-sm uppercase transition shadow-[2px_2px_0px_#000] ${
                selectedObjectId === obj.id
                  ? 'bg-black text-[#A0FF00] translate-y-0.5 shadow-[1px_1px_0px_#A0FF00]'
                  : 'bg-white hover:bg-[#A0FF00]/40 text-black'
              }`}
            >
              {obj.objectName}
            </button>
          ))}
        </div>

        {/* Selected Fortune Card */}
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_#000] space-y-3">
          <div className="flex justify-between items-center border-b border-black pb-2">
            <h3 className="font-anton text-2xl uppercase text-black">{selectedFortune.objectName}</h3>
            <span className="bg-[#A0FF00] text-black font-mono text-xs px-2 py-0.5 border border-black font-bold">
              UMORE: {selectedFortune.mood}
            </span>
          </div>

          <p className="font-typewriter text-sm sm:text-base text-neutral-800 leading-relaxed font-semibold">
            🔮 Previsione: "{selectedFortune.fortune}"
          </p>

          <div className="bg-[#FFFEEB] border border-black p-3 font-typewriter text-xs text-neutral-700 italic">
            💡 Consiglio d'azione: {selectedFortune.advice}
          </div>
        </div>
      </section>

      {/* Tool 3: Cat Paranoia Calculator */}
      <section className="bg-black text-[#F4F1EA] border-3 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#A0FF00]">
        <div className="border-b border-neutral-700 pb-3 mb-6 flex justify-between items-center">
          <div>
            <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-[#A0FF00]">
              GATTO COMPLOTTO PARANOIA METER
            </h2>
            <p className="font-typewriter text-xs text-neutral-400">
              Calcola la probabilità percentuale che il tuo gatto stia programmando il tuo sbarco imminente.
            </p>
          </div>
          <AlertTriangle className="w-8 h-8 text-[#A0FF00]" />
        </div>

        <div className="space-y-6 font-typewriter text-xs sm:text-sm mb-6">
          {CAT_PARANOIA_TESTS.map((q, qIdx) => (
            <div key={qIdx} className="space-y-2 bg-neutral-900 border border-neutral-800 p-4">
              <p className="font-anton text-base text-white uppercase">{qIdx + 1}. {q.question}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {q.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => {
                      const newAns = [...answers];
                      newAns[qIdx] = optIdx;
                      setAnswers(newAns);
                    }}
                    className={`p-2.5 border text-left font-mono transition text-xs ${
                      answers[qIdx] === optIdx
                        ? 'bg-[#A0FF00] text-black font-bold border-[#A0FF00]'
                        : 'bg-black text-neutral-300 border-neutral-700 hover:border-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={calculateCatRisk}
            className="bg-[#A0FF00] text-black font-anton text-lg px-8 py-3 uppercase border-2 border-black hover:bg-white transition shadow-[4px_4px_0px_#000]"
          >
            CALCOLA LIVELLO DI RISCHIO FELINO
          </button>

          {catRiskScore !== null && (
            <div className="w-full bg-white text-black border-3 border-black p-6 text-center space-y-3 mt-4 animate-in zoom-in-95">
              <span className="font-anton text-sm text-neutral-500 uppercase block">LIVELLO COMPLOTTO RILEVATO</span>
              <div className="font-anton text-6xl text-red-600 tracking-tight">
                {catRiskScore}% DI PERICOLO
              </div>
              <p className="font-typewriter text-xs text-neutral-800">
                {catRiskScore > 75 
                  ? "SITUAZIONE CRITICA: Il tuo gatto ha già il controllo dei codici d'accesso al frigorifero. Non fare movimenti bruschi." 
                  : "ALLERTA MODERATA: Ti sta ancora studiando. Offrigli uno snack premio entro 10 minuti per placare l'ostilità."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Tool 5: Traduttore Sotto Il Cofano (Google Translate & Lingue Strane) */}
      <section className="bg-[#111111] text-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] relative">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6 border-b-2 border-neutral-700 pb-4">
          <div className="flex items-center gap-3">
            <Languages className="w-8 h-8 text-[#A0FF00]" />
            <div>
              <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-[#A0FF00]">
                TRADUTTORE SOTTO IL COFANO (GOOGLE TRANSLATE & LINGUE STRANE)
              </h2>
              <p className="font-mono text-xs text-neutral-400">
                Collegato a Google Translate e al modulo alieno della Redazione
              </p>
            </div>
          </div>
          <span className="bg-[#A0FF00] text-black font-mono text-xs px-2.5 py-1 font-bold uppercase border border-black">
            🔧 MOTORE ATTIVO
          </span>
        </div>

        <UnderTheHoodTranslator />
      </section>

    </div>
  );
};
