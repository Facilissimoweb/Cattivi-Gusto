import React, { useState } from 'react';
import { Languages, ArrowLeftRight, Sparkles, Copy, Check, Volume2, RefreshCw, Cpu, Zap, ArrowLeft } from 'lucide-react';

interface TranslatorProps {
  onBack?: () => void;
}

export const WEIRDLANGUAGES = [
  { id: 'nap', name: '🍕 Dialetto Napoletano Stretto', desc: 'Traduzione viscerale con gestualità inclusa' },
  { id: 'tlh', name: '🛸 Klingon Imperiale (tlhIngan Hol)', desc: 'Lingua guerriera di Star Trek per riunioni aziendali' },
  { id: 'la', name: '🏛️ Latino Ecclesiastico & Esorcistico', desc: 'Traduzione via Google Translate + aroma di incenso' },
  { id: 'cat', name: '🐈 Gattese Redazionale (Miau)', desc: 'Traduzione nell\'unica lingua autorizzata dal Gatto' },
  { id: 'emoji', name: '👾 Geroglifico Emoji Cospirazionista', desc: 'Decodifica in pittogrammi dell\'assurdo' },
  { id: 'binary', name: '🤖 Codice Binario da Calcolatrice 1982', desc: '01000011 01000001 01010100' },
  { id: 'morse', name: '📻 Codice Morse da Telegrafo Rustico', desc: '... --- ...   -.-. .- - - .. ...- ---' },
  { id: 'eo', name: '🌍 Esperanto dell\'Utopia', desc: 'Google Translate verso la lingua universale' },
  { id: 'bizzarro', name: '🎭 Bizzarro Redazionale (Alter Ego)', desc: 'Linguaggio aulico-grottesco della rivista' },
  { id: 'elvish', name: '🧙 Alto Elfico Quenya della Sila', desc: 'Dialetto tolkieniano ad alta quota' }
];

export const UnderTheHoodTranslator: React.FC<TranslatorProps> = ({ onBack }) => {
  const [inputText, setInputText] = useState('Il gatto sta osservando il tostapane con evidente disprezzo borghese.');
  const [targetLang, setTargetLang] = useState('nap');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [providerInfo, setProviderInfo] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleTranslate = async (overrideText?: string, overrideLang?: string) => {
    const textToTranslate = overrideText || inputText;
    const langToUse = overrideLang || targetLang;

    if (!textToTranslate.trim() || isLoading) return;

    setIsLoading(true);
    setCopied(false);

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: textToTranslate.trim(),
          targetLang: langToUse
        })
      });

      const data = await res.json();
      if (data.translated) {
        setTranslatedText(data.translated);
        setProviderInfo(data.provider || 'Google Translate Engine');
      } else {
        setTranslatedText('Impossibile tradurre. La matrice linguistica si è inceppata.');
      }
    } catch (err) {
      console.error("Translation error:", err);
      setTranslatedText("Errore di connessione con i satelliti linguistici. Riprova tra poco.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!translatedText) return;
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window) || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetLang === 'la' ? 'la-VA' : targetLang === 'nap' ? 'it-IT' : 'it-IT';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-20 animate-in fade-in duration-200">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
        {onBack && (
          <button
            onClick={onBack}
            className="bg-black text-white px-3.5 py-1.5 font-anton text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#A0FF00] hover:text-black border-2 border-black transition shadow-[3px_3px_0px_#000] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>INDIETRO</span>
          </button>
        )}

        <div className="flex items-center gap-2">
          <span className="bg-[#A0FF00] text-black font-anton text-xs px-3 py-1 border-2 border-black uppercase font-bold shadow-[2px_2px_0px_#000]">
            🔧 SOTTO IL COFANO
          </span>
          <span className="bg-black text-[#A0FF00] font-mono text-[10px] px-2 py-1 uppercase font-bold border border-black flex items-center gap-1">
            <Zap className="w-3 h-3 text-[#A0FF00]" />
            GROQ AI LPU & GOOGLE ENGINE
          </span>
        </div>
      </div>

      {/* Main Title Banner */}
      <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_#000] mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Languages className="w-8 h-8 text-black" />
          <h1 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-black">
            TRADUTTORE DI LINGUE STRANE
          </h1>
        </div>
        <p className="font-typewriter text-xs sm:text-sm text-neutral-700 leading-relaxed">
          Motore di traduzione sotto il cofano direttamente collegato a <strong>Groq AI LPU (Llama 3.3 70B)</strong> e a <strong>Google Translate Engine</strong> per la Redazione di <i>Cattivo Gusto</i>. Traduci qualsiasi frase in tempo reale in dialetto napoletano, klingon imperiale, latino, gattese, emoji o alto elfico!
        </p>
      </div>

      {/* Translator Interface Grid */}
      <div className="bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_#000] space-y-6">
        
        {/* Language Selection Grid */}
        <div>
          <label className="font-anton text-sm uppercase text-black block mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-black fill-[#A0FF00]" />
            <span>SELEZIONA LINGUA DI DESTINAZIONE BIZZARRA:</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {WEIRDLANGUAGES.map((lang) => (
              <button
                key={lang.id}
                onClick={() => {
                  setTargetLang(lang.id);
                  if (inputText.trim()) {
                    handleTranslate(inputText, lang.id);
                  }
                }}
                className={`p-2.5 border-2 border-black text-left transition cursor-pointer ${
                  targetLang === lang.id
                    ? 'bg-black text-[#A0FF00] font-bold shadow-[3px_3px_0px_#000]'
                    : 'bg-neutral-50 text-black hover:bg-[#A0FF00] hover:text-black'
                }`}
              >
                <div className="font-anton text-xs sm:text-sm uppercase truncate">{lang.name}</div>
                <div className="font-mono text-[9px] opacity-80 truncate">{lang.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Input & Output Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Source Text Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-black border-b border-black pb-1">
              <span>TESTO IN INGRESSO (ITALIANO):</span>
              <button
                onClick={() => setInputText('')}
                className="text-red-700 hover:underline cursor-pointer text-[10px]"
              >
                CANCELLA
              </button>
            </div>
            <textarea
              rows={5}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Inserisci la frase da tradurre sotto il cofano..."
              className="w-full bg-[#FFFEEB] border-2 border-black p-3 font-typewriter text-xs sm:text-sm focus:outline-none focus:bg-white shadow-[2px_2px_0px_#000]"
            />

            {/* Quick Sample Presets */}
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-neutral-600 font-bold block">Frasi consigliate:</span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                {[
                  "Svegliati, il caffè è pronto!",
                  "Questo tostapane nasconde segreti di Stato.",
                  "Non ho capito nulla ma concordo pienamente.",
                  "Il gatto mi sta giudicando in silenzio."
                ].map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputText(sample);
                      handleTranslate(sample, targetLang);
                    }}
                    className="bg-neutral-100 hover:bg-[#A0FF00] border border-black px-2 py-0.5 truncate max-w-[200px] cursor-pointer"
                  >
                    "{sample}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Target Text Output */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-black border-b border-black pb-1">
              <span>TRADUZIONE SOTTO IL COFANO:</span>
              {providerInfo && (
                <span className="text-[9px] bg-black text-[#A0FF00] px-1.5 py-0.5 font-mono">
                  {providerInfo}
                </span>
              )}
            </div>

            <div className="relative min-h-[120px] bg-black text-[#A0FF00] border-2 border-black p-4 font-mono text-xs sm:text-sm leading-relaxed shadow-[2px_2px_0px_#000]">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-6 gap-2">
                  <RefreshCw className="w-6 h-6 animate-spin text-[#A0FF00]" />
                  <span className="text-[10px] uppercase font-bold text-neutral-300">
                    Elaborazione Google Translate Engine...
                  </span>
                </div>
              ) : translatedText ? (
                <div>
                  <p className="whitespace-pre-wrap">{translatedText}</p>
                </div>
              ) : (
                <p className="text-neutral-500 italic">
                  Premi "TRADUCI SOTTO IL COFANO" per generare la traduzione bizzarra.
                </p>
              )}
            </div>

            {/* Action buttons for Output */}
            {translatedText && !isLoading && (
              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  onClick={() => handleSpeak(translatedText)}
                  className="bg-white text-black border-2 border-black px-3 py-1 font-anton text-xs uppercase flex items-center gap-1 hover:bg-[#A0FF00] transition cursor-pointer shadow-[2px_2px_0px_#000]"
                  title="Ascolta sintesi vocale"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>ASCOLTA</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="bg-black text-[#A0FF00] border-2 border-black px-3 py-1 font-anton text-xs uppercase flex items-center gap-1 hover:bg-[#A0FF00] hover:text-black transition cursor-pointer shadow-[2px_2px_0px_#000]"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIATO!' : 'COPIA'}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Big Action Submit Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => handleTranslate()}
            disabled={isLoading || !inputText.trim()}
            className="bg-[#A0FF00] text-black font-anton text-base sm:text-xl px-8 py-4 border-3 border-black uppercase flex items-center gap-2 hover:bg-black hover:text-[#A0FF00] transition shadow-[5px_5px_0px_#000] cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>TRADUZIONE IN CORSO...</span>
              </>
            ) : (
              <>
                <ArrowLeftRight className="w-5 h-5" />
                <span>TRADUCI ORA SOTTO IL COFANO</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
