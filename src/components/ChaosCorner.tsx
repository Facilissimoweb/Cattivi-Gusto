import React, { useState } from 'react';
import { Sparkles, Flame, RefreshCw, Bot, HelpCircle, AlertTriangle, ShieldCheck, ArrowLeft, Volume2, Image as ImageIcon, Download, Copy, Check } from 'lucide-react';
import { GURU_QUOTES, INANIMATE_FORTUNES, VOID_WEATHER, CAT_PARANOIA_TESTS } from '../data/chaos';

interface ChaosCornerProps {
  onBack: () => void;
  onOpenManifesto: () => void;
}

export const ChaosCorner: React.FC<ChaosCornerProps> = ({ onBack, onOpenManifesto }) => {
  // AI Image Studio State
  const [imagePrompt, setImagePrompt] = useState('Un tostapane filosofo con gli occhiali da sole che riflette sul senso dell\'esistenza');
  const [imageStyle, setImageStyle] = useState('editorial');
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [imageNotice, setImageNotice] = useState<string | null>(null);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Guru del Nulla State
  const [currentGuruQuote, setCurrentGuruQuote] = useState(GURU_QUOTES[0]);
  const [isLoadingAiGuru, setIsLoadingAiGuru] = useState(false);

  // Horoscope State
  const [selectedObjectId, setSelectedObjectId] = useState(INANIMATE_FORTUNES[0].id);

  // Cat Paranoia Calculator State
  const [catRiskScore, setCatRiskScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([0, 0, 0]);

  // AI Image Generation Studio Handler
  const handleGenerateStudioImage = async () => {
    if (!imagePrompt.trim()) return;
    setIsGeneratingImage(true);
    setImageNotice(null);
    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: imagePrompt.trim(),
          style: imageStyle,
          width: 1024,
          height: 1024
        })
      });
      const data = await res.json();
      if (data.url) {
        setGeneratedImageUrl(data.url);
        setImageNotice(data.notice || "Opera generata con successo.");
      }
    } catch (err) {
      console.error("Studio Image Generation error:", err);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // Generate Guru Wisdom (Local or Gemini API)
  const handleGenerateGuruQuote = async () => {
    setIsLoadingAiGuru(true);
    try {
      const res = await fetch('/api/ai/generate-absurdity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'guru',
          prompt: 'Genera un consiglio filosofico assurdo per il Guru del Nulla'
        })
      });
      const data = await res.json();
      if (data.text) {
        setCurrentGuruQuote(data.text);
      } else {
        // Fallback local quote
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

      {/* Tool 0: Generatore di Immagine & Illustrazioni AI */}
      <section className="bg-black text-white border-3 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#A0FF00] relative">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-neutral-700 pb-3">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-[#A0FF00]" />
            <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-[#A0FF00]">
              STUDIO D'ARTE SATIRICA AI
            </h2>
          </div>
          <span className="bg-[#A0FF00] text-black font-mono text-xs px-2.5 py-1 font-bold uppercase">
            MOTORE OPEN-SOURCE FLUX / IMAGEN
          </span>
        </div>

        <p className="font-typewriter text-xs sm:text-sm text-neutral-300 mb-6">
          Scrivi qualsiasi descrizione (es: <i>"Un gatto in giacca e cravatta che presiede un consiglio d'amministrazione di tostapane"</i>) e genera l'illustrazione in tempo reale.
        </p>

        {/* Input & Styles */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-anton text-sm uppercase text-[#A0FF00] mb-1">
              DESCRIZIONE DELL'OPERA (PROMPT):
            </label>
            <textarea
              rows={3}
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
              placeholder="Descrivi l'immagine assurda che desideri creare..."
              className="w-full bg-neutral-900 border-2 border-neutral-700 p-3 font-mono text-sm text-white placeholder-neutral-500 focus:border-[#A0FF00] focus:outline-none"
            />
          </div>

          {/* Preset Prompts */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="text-neutral-400 self-center">Esempi rapidi:</span>
            {[
              "Un tostapane filosofo al tramonto",
              "Gatto cospirazionista con taccuino segreto",
              "Manifesto dell'assurdo in stile pop art vintage",
              "Guru del nulla immerso in una tazza di caffè"
            ].map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setImagePrompt(preset)}
                className="bg-neutral-800 text-neutral-200 px-2.5 py-1 border border-neutral-700 hover:border-[#A0FF00] hover:text-[#A0FF00] transition cursor-pointer"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Style selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'editorial', label: 'Editoriale Satirico' },
              { id: 'poster', label: 'Manifesto Pop' },
              { id: 'surreal', label: 'Surrealista' },
              { id: 'cat', label: 'Cospirazione Felina' }
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setImageStyle(st.id)}
                className={`p-2 font-anton text-xs uppercase border transition ${
                  imageStyle === st.id
                    ? 'bg-[#A0FF00] text-black border-[#A0FF00] font-bold'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-700 hover:border-white'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleGenerateStudioImage}
            disabled={isGeneratingImage || !imagePrompt.trim()}
            className="bg-[#A0FF00] text-black border-2 border-black px-8 py-3.5 font-anton text-lg uppercase flex items-center gap-2 hover:bg-white transition shadow-[4px_4px_0px_#000] cursor-pointer active:translate-x-0.5"
          >
            {isGeneratingImage ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>GENERAZIONE D'ARTE IN CORSO...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>GENERA OPERA D'ARTE AI ORA</span>
              </>
            )}
          </button>
        </div>

        {/* Image Preview Area */}
        {generatedImageUrl && (
          <div className="bg-neutral-900 border-2 border-[#A0FF00] p-4 animate-in zoom-in-95 space-y-3">
            <div className="relative overflow-hidden border border-neutral-700 bg-black flex justify-center">
              <img
                src={generatedImageUrl}
                alt={imagePrompt}
                className="max-h-[500px] w-auto object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono pt-2 border-t border-neutral-800">
              <span className="text-[#A0FF00]">
                {imageNotice || "Opera pronta per la pubblicazione su Cattivo Gusto."}
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={generatedImageUrl}
                  target="_blank"
                  rel="noreferrer"
                  download="cattivo-gusto-artwork.png"
                  className="bg-[#A0FF00] text-black px-3 py-1 font-anton uppercase flex items-center gap-1 hover:bg-white transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>SCARICA</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

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

    </div>
  );
};
