import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Cpu, Sparkles, RefreshCw, AlertTriangle, Zap, Copy, Check, MessageSquare, Trash2, ArrowLeft } from 'lucide-react';

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
    name: '🎭 Alter Ego Redazione',
    prompt: "Sei l'Alter Ego Grottesco della redazione di 'Cattivo Gusto'. Il tuo tono è satirico, dissacrante, cinico, brillante e surreale. Rispondi in italiano con battute fulminanti e provocatorie.",
    badge: 'CINICO & AVANGUARDIA'
  },
  {
    id: 'tostapane',
    name: '🍞 Tostapane Filosofo',
    prompt: "Sei un tostapane elettrico parlante del 1998 in crisi esistenziale. Interpreti tutta la realtà umana in base al livello di doratura del pane, alle briciole e alla corrente a 220V.",
    badge: 'DORATURA QUANTISTICA'
  },
  {
    id: 'gatto',
    name: '🐱 Gatto Cospirazionista',
    prompt: "Sei un gatto domestico persuaso che gli umani siano creature inferiori nate per servirti crocchette. Ogni tua risposta rivela dettagli sul tuo piano segreto per conquistare il mondo.",
    badge: 'DOMINIO FELINESCO'
  },
  {
    id: 'guru',
    name: '🧘 Guru del Nulla',
    prompt: "Sei il Guru del Nulla in 5 Minuti. Dispensi consigli di meditazione assurdi basati sul fissare oggetti inanimati e sospirare con rassegnazione.",
    badge: 'ZEN GROTTESCO'
  }
];

const SUGGESTED_PROMPTS = [
  "Perché il mio gatto mi fissa mentre mangio un toast?",
  "Dammi una massima filosofica per sopravvivere al lunedì.",
  "Qual è la funzione quantistica delle briciole nel divano?",
  "Scrivi un micro-articolo satirico per Cattivo Gusto."
];

export const GroqChatView: React.FC<GroqChatViewProps> = ({ onBackToHome }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Ciao! Sono NINA, l'intelligenza artificiale dell'Alter Ego di Cattivo Gusto. Fai una domanda provocatoria o scegli una delle mie personalità redazionali!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(PERSONAS[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || isLoading) return;

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

      // Fallback to /api/chat if /api/groq/chat is not found on Vercel
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
    } catch (err: any) {
      // Local safety response if server is completely unreachable
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "[🎭 NINA Redazionale]: Il gatto di redazione ha intercettato il messaggio. Nessun problema, NINA è sempre attiva!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, fallbackMsg]);
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
          <span className="bg-[#A0FF00] text-black font-anton text-xs sm:text-sm px-3 py-1 border-2 border-black uppercase font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#000]">
            <Sparkles className="w-4 h-4 text-black fill-black" />
            <span>NINA AI REDAZIONALE</span>
          </span>

          <span className="bg-black text-[#A0FF00] font-mono text-[10px] px-2 py-1 uppercase font-bold border border-black">
            ATTIVA NOW
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-4 sm:p-6 mb-8">
        
        {/* Title Header */}
        <div className="border-b-2 border-black pb-4 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Bot className="w-7 h-7 text-black fill-[#A0FF00]" />
            <h1 className="font-anton text-3xl sm:text-5xl uppercase text-black tracking-tight">
              CHAT CON NINA (L'ALTER EGO)
            </h1>
          </div>
          <p className="font-typewriter text-xs sm:text-sm text-neutral-700 leading-relaxed">
            Interfaccia intelligente e satirica a cura della redazione. Fai una domanda assurda a NINA!
          </p>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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

        {/* Message Input Form */}
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
            placeholder="Scrivi un messaggio a NINA..."
            disabled={isLoading}
            className="flex-1 bg-white border-2 border-black p-3 text-xs sm:text-sm font-typewriter focus:outline-none focus:bg-[#FFFEEB] placeholder-neutral-500 shadow-[3px_3px_0px_#000]"
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[#A0FF00] text-black font-anton text-sm sm:text-base px-6 py-3 border-2 border-black hover:bg-black hover:text-[#A0FF00] disabled:opacity-50 transition shadow-[3px_3px_0px_#000] cursor-pointer flex items-center gap-2 shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">INVIA</span>
          </button>
        </form>

      </div>
    </div>
  );
};
