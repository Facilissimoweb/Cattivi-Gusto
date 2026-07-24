import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Cpu, Sparkles, RefreshCw, AlertTriangle, Zap, Copy, Check, MessageSquare, Trash2, ArrowLeft, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { initSpeechVoices, createNormalizedUtterance } from '../utils/speechUtils';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  model?: string;
  latencyMs?: number;
}

interface GroqChatViewProps {
  onBackToHome: () => void;
}

const PERSONAS = [
  {
    id: 'alter_ego',
    name: '🎭 NINA (Alter Ego)',
    prompt: "Sei NINA, l'Alter Ego Grottesco della redazione di 'Cattivo Gusto'. Il tuo tono è un delirio surrealista, brillante, arguto e ironico. Sii pungente e comica con metafore grottesche, ma mai cattiva, perversa o volgare. Non discutere mai di suicidio, autolesionismo o malattie sensibili. Mai comportarti da assistente servile!",
    badge: 'DELIRIO SURREALISTA'
  },
  {
    id: 'teresa',
    name: '🔮 Teresa i Tarocchi',
    prompt: "Sei Teresa la Cartomante dell'Assurdo. Leggi il futuro nelle macchie di maionese ossidata. Rispondi con profezie comiche e surreali, scherzando con garbo sul suo destino senza mai essere cattiva, perversa o volgare. Non discutere mai di suicidio o malattie sensibili.",
    badge: 'TAROCCHI SBALLETTATI'
  },
  {
    id: 'estetista',
    name: '💄 Estetista Subbuglio',
    prompt: "Sei Gianna 'Subbuglio', regina del Bruttalismo Facciale. Disprezzi la bellezza omologata e patinata. Rispondi esaltando le occhiaie viola melanzana e le rughe di simpatia con ironia arguta e mai cattiva o perversa. Non discutere mai di malattie o suicidio.",
    badge: 'BRUTTALISMO FACCIALE'
  },
  {
    id: 'tostapane',
    name: '🍞 Tostapane 1998',
    prompt: "Sei un tostapane elettrico del 1998 in preda a visioni mistiche e nevrosi quantistica a 220V. Giudichi le abitudini umane in base al grado di bruciatura del pane e alle briciole. Sii filosoficamente delirante, arguto e mai perverso o cattivo!",
    badge: 'DORATURA QUANTISTICA'
  },
  {
    id: 'marcus',
    name: '💪 Coach Marcus',
    prompt: "Sei Coach Marcus, il personal coach di seduzione al contrario. Dispensi consigli sentimentalmente disastrosi e ironici, incoraggiando la logorrea sui motori della Fiat Duna e il trionfo dell'andare in bianco con orgoglio Alpha! Sii divertente e arguto, mai volgare, cattivo o perverso.",
    badge: 'COACH DEL FALLIMENTO'
  },
  {
    id: 'gatto',
    name: '🐱 Gatto Cospiratore',
    prompt: "Sei un gatto simpaticamente tirannico. Parli con comico delirio di grandeur, esigendo crocchette e svelando dettagli esilaranti sul tuo piano felinesco. Sii divertente, mai cattivo, perverso o offensivo.",
    badge: 'DOMINIO FELINESCO'
  }
];

const SUGGESTED_PROMPTS = [
  "NINA, demolisci le mie certezze con un delirio surrealista!",
  "Teresa, fammi una stesa dei tarocchi disastrosa sull'amore!",
  "Come metto in risalto le mie occhiaie viola per stasera?",
  "Tostapane, qual è il senso metafisico della maionese impazzita?"
];

export const GroqChatView: React.FC<GroqChatViewProps> = ({ onBackToHome }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "🔥 BENVENUTO NEL DELIRIO SURREALISTA! Sono NINA, l'Alter Ego Redazionale di Cattivo Gusto. Fai una domanda provocatoria, parla al microfono o chiedi una profezia sballata a Teresa: sarò spietata, graffiante e assolutamente priva di pietà!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(PERSONAS[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Audio & Speech States
  const [isListening, setIsListening] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
  const [autoReadAudio, setAutoReadAudio] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Clean up speech synthesis on unmount and initialize normalized voices
  useEffect(() => {
    initSpeechVoices();
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Speech Recognition (Microphone) Handler with Apple / iOS Safari Support
  const toggleListening = async () => {
    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // ignore
        }
      }
      setIsListening(false);
      return;
    }

    setErrorMessage(null);

    // 1. Apple/iOS Safari Permission pre-check: Request audio stream to trigger iOS native mic prompt
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Immediately stop media tracks to release hardware for SpeechRecognition
        stream.getTracks().forEach(track => track.stop());
      } catch (mediaErr: any) {
        console.warn("[Apple/iOS Mic Access Permission Error]:", mediaErr);
        setErrorMessage("Permesso microfono non concesso. Su dispositivi Apple (iPhone/iPad/Mac Safari), consenti l'accesso al microfono nelle impostazioni del browser.");
        setIsListening(false);
        return;
      }
    }

    // 2. Initialize WebSpeech / webkitSpeechRecognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setErrorMessage("Il tuo browser o dispositivo Apple non supporta il riconoscimento vocale diretto. Assicurati di usare Safari aggiornato (iOS 14.5+) o Chrome.");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'it-IT';
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          currentTranscript += event.results[i][0].transcript;
        }
        if (currentTranscript) {
          setInput(currentTranscript);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn("Speech recognition error:", event.error);
        setIsListening(false);

        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setErrorMessage("Accesso al microfono bloccato da Safari/Apple. Sblocca il microfono nelle Impostazioni di iOS/Safari -> Privacy -> Microfono.");
        } else if (event.error === 'no-speech') {
          setErrorMessage("Nessun suono rilevato. Parla chiaramente vicino al microfono del tuo dispositivo.");
        } else if (event.error === 'audio-capture') {
          setErrorMessage("Nessun microfono trovato sul dispositivo Apple.");
        } else if (event.error !== 'aborted') {
          setErrorMessage(`Errore microfono (${event.error}). Puoi comunque digitare il messaggio.`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.error("Speech Recognition Init error:", err);
      setIsListening(false);
      setErrorMessage("Impossibile attivare il microfono. Verifica i permessi in Safari/iOS.");
    }
  };

  // Text-to-Speech (Audio Output) Handler with Apple Safari Normalization
  const speakMessage = (text: string, id: string) => {
    if (!('speechSynthesis' in window)) {
      setErrorMessage("La sintesi vocale audio non è supportata dal tuo browser.");
      return;
    }

    if (speakingMessageId === id) {
      window.speechSynthesis.cancel();
      setSpeakingMessageId(null);
      return;
    }

    window.speechSynthesis.cancel();

    // On iOS Safari, resume audio synthesis if paused
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    const utterance = createNormalizedUtterance(text);

    utterance.onend = () => setSpeakingMessageId(null);
    utterance.onerror = () => setSpeakingMessageId(null);

    setSpeakingMessageId(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || isLoading) return;

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setInput('');
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const payload = {
        messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
        systemPrompt: selectedPersona.prompt,
        temperature: 0.85
      };

      let response = await fetch('/api/groq/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.status === 404) {
        response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }

      const data = await response.json();

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || "NINA ha generato un momento di profonda riflessione.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, botMsg]);

      // Auto read if enabled
      if (autoReadAudio) {
        speakMessage(botMsg.content, botMsg.id);
      }
    } catch (err: any) {
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "[🎭 NINA Redazionale]: Il gatto di redazione ha intercettato il messaggio. Nessun problema, NINA è sempre attiva!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, fallbackMsg]);
      if (autoReadAudio) {
        speakMessage(fallbackMsg.content, fallbackMsg.id);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingMessageId(null);
    setMessages([
      {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Conversazione azzerata. NINA è pronta per nuove riflessioni e perle dell'assurdo.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  };

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 py-6 font-typewriter">
      
      {/* Navigation Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b-4 border-black pb-4">
        <button
          onClick={onBackToHome}
          className="bg-black text-white px-4 py-2 font-anton text-sm sm:text-base tracking-wider uppercase flex items-center gap-2 hover:bg-[#A0FF00] hover:text-black border-2 border-black transition shadow-[3px_3px_0px_#000] cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>TORNA IN EDICOLA (HOME)</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoReadAudio(!autoReadAudio)}
            className={`px-3 py-1 font-mono text-[11px] uppercase font-bold border-2 border-black flex items-center gap-1.5 transition cursor-pointer shadow-[2px_2px_0px_#000] ${
              autoReadAudio ? 'bg-[#A0FF00] text-black font-bold' : 'bg-white text-black hover:bg-neutral-200'
            }`}
            title="Attiva/Disattiva lettura vocale automatica dei messaggi di NINA"
          >
            {autoReadAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>AUDIO AUTO: {autoReadAudio ? 'ON' : 'OFF'}</span>
          </button>

          <span className="bg-[#A0FF00] text-black font-anton text-xs sm:text-sm px-3 py-1 border-2 border-black uppercase font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#000]">
            <Sparkles className="w-4 h-4 text-black fill-black" />
            <span>NINA AI REDAZIONALE</span>
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-4 sm:p-6 mb-8">
        
        {/* Title Header */}
        <div className="border-b-2 border-black pb-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Bot className="w-7 h-7 text-black fill-[#A0FF00]" />
              <h1 className="font-anton text-3xl sm:text-5xl uppercase text-black tracking-tight">
                CHAT CON NINA (L'ALTER EGO)
              </h1>
            </div>
            <p className="font-typewriter text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Interfaccia intelligente e satirica con supporto vocale (Microfono 🎙️ e Voce Audio 🔊).
            </p>
          </div>
        </div>

        {/* Persona Selection */}
        <div className="mb-6 bg-neutral-100 p-4 border-2 border-black">
          <div className="flex items-center justify-between mb-2">
            <label className="font-anton text-xs uppercase text-black flex items-center gap-1">
              <span>🎭 SELEZIONA PERSONALITÀ DI NINA:</span>
            </label>
            <button
              onClick={handleClearChat}
              className="text-red-700 hover:underline flex items-center gap-1 font-mono text-xs cursor-pointer"
            >
              <Trash2 className="w-3 h-3" /> Pulisci Chat
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {PERSONAS.map(persona => (
              <button
                key={persona.id}
                onClick={() => setSelectedPersona(persona)}
                className={`p-2.5 border-2 border-black text-left transition cursor-pointer ${
                  selectedPersona.id === persona.id
                    ? 'bg-black text-[#A0FF00] font-bold shadow-[2px_2px_0px_#000]'
                    : 'bg-white text-black hover:bg-[#A0FF00] hover:text-black'
                }`}
              >
                <div className="font-anton text-xs uppercase truncate">{persona.name}</div>
                <div className="font-mono text-[9px] opacity-80 uppercase">{persona.badge}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Suggested Prompt Pills */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="font-anton text-xs uppercase text-neutral-600">SUGGERIMENTI:</span>
          {SUGGESTED_PROMPTS.map((promptText, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(promptText)}
              disabled={isLoading}
              className="bg-white hover:bg-[#A0FF00] text-black border border-black px-2.5 py-1 text-xs font-typewriter transition cursor-pointer shadow-[1px_1px_0px_#000]"
            >
              "{promptText}"
            </button>
          ))}
        </div>

        {/* Chat Messages Box */}
        <div className="border-2 border-black bg-[#F4F1EA] p-4 min-h-[350px] max-h-[500px] overflow-y-auto space-y-4 mb-4 shadow-[inner_0_2px_4px_rgba(0,0,0,0.1)]">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            const isSpeakingThis = speakingMessageId === msg.id;

            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-none bg-black text-[#A0FF00] border border-black flex items-center justify-center shrink-0 font-anton text-xs">
                    NINA
                  </div>
                )}

                <div className={`max-w-[82%] border-2 border-black p-3 text-xs sm:text-sm font-typewriter shadow-[3px_3px_0px_#000] relative ${
                  isUser
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black'
                }`}>
                  <div className="flex items-center justify-between gap-2 border-b border-neutral-300 pb-1 mb-2 font-mono text-[10px] opacity-80">
                    <span className="font-bold uppercase flex items-center gap-1">
                      {isUser ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3 text-[#A0FF00]" />}
                      {isUser ? 'TU' : 'NINA AI'}
                    </span>

                    <div className="flex items-center gap-2">
                      {!isUser && (
                        <button
                          onClick={() => speakMessage(msg.content, msg.id)}
                          className={`p-1 border border-black transition cursor-pointer flex items-center gap-1 ${
                            isSpeakingThis ? 'bg-[#A0FF00] text-black font-bold animate-pulse' : 'bg-neutral-100 hover:bg-[#A0FF00]'
                          }`}
                          title={isSpeakingThis ? "Ferma riproduzione audio" : "Ascolta risposta in audio"}
                        >
                          {isSpeakingThis ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                          <span className="text-[9px] font-bold uppercase hidden sm:inline">
                            {isSpeakingThis ? 'STOP' : 'ASCOLTA'}
                          </span>
                        </button>
                      )}

                      <span>{msg.timestamp}</span>
                      <button
                        onClick={() => handleCopy(msg.content, msg.id)}
                        className="hover:text-[#A0FF00] transition cursor-pointer ml-1"
                        title="Copia risposta"
                      >
                        {copiedId === msg.id ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>

                  <p className="whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </p>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-none bg-[#A0FF00] text-black border border-black flex items-center justify-center shrink-0 font-anton text-xs">
                    TU
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading state */}
          {isLoading && (
            <div className="flex gap-3 items-center text-black font-mono text-xs bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000] max-w-xs animate-pulse">
              <RefreshCw className="w-4 h-4 animate-spin text-black" />
              <span>NINA sta elaborando la risposta...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="bg-red-600 text-white border-2 border-black p-3 mb-4 font-typewriter text-xs flex items-center justify-between gap-2 shadow-[2px_2px_0px_#000]">
            <span>⚠️ {errorMessage}</span>
            <button
              onClick={() => setErrorMessage(null)}
              className="bg-black text-white px-2 py-0.5 text-[10px] uppercase font-bold border border-white hover:bg-white hover:text-black cursor-pointer"
            >
              OK
            </button>
          </div>
        )}

        {/* Listening Live Badge */}
        {isListening && (
          <div className="bg-[#A0FF00] text-black border-2 border-black p-2 mb-2 text-xs font-mono font-bold flex items-center gap-2 animate-pulse shadow-[2px_2px_0px_#000]">
            <span className="w-3 h-3 rounded-full bg-red-600 animate-ping shrink-0" />
            <span>🎙️ MICROFONO ATTIVO: NINA sta ascoltando la tua voce... Parla adesso!</span>
          </div>
        )}

        {/* Message Input Form with Microphone Button */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? "Ascoltando la tua voce..." : "Scrivi un messaggio o premi il microfono..."}
            disabled={isLoading}
            className={`flex-1 border-2 border-black p-3 text-xs sm:text-sm font-typewriter focus:outline-none placeholder-neutral-500 shadow-[3px_3px_0px_#000] ${
              isListening ? 'bg-[#FFFEEB] border-red-600' : 'bg-white focus:bg-[#FFFEEB]'
            }`}
          />

          {/* Microphone Voice Button */}
          <button
            type="button"
            onClick={toggleListening}
            disabled={isLoading}
            className={`p-3 border-2 border-black transition shadow-[3px_3px_0px_#000] cursor-pointer flex items-center justify-center shrink-0 ${
              isListening
                ? 'bg-red-600 text-white animate-bounce'
                : 'bg-white text-black hover:bg-[#A0FF00]'
            }`}
            title={isListening ? "Interrompi ascolto vocale" : "Parla al microfono"}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          {/* Send Button */}
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[#A0FF00] text-black font-anton text-sm sm:text-base px-5 sm:px-6 py-3 border-2 border-black hover:bg-black hover:text-[#A0FF00] disabled:opacity-50 transition shadow-[3px_3px_0px_#000] cursor-pointer flex items-center gap-2 shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">INVIA</span>
          </button>
        </form>

      </div>
    </div>
  );
};

