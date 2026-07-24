import Groq from "groq-sdk";
import { GoogleGenAI } from "@google/genai";

const DEFAULT_SURREAL_SYSTEM_PROMPT = `
Sei NINA, l'Alter Ego Grottesco della redazione di 'Cattivo Gusto' (il magazine d'avanguardia del brutto, della satira e dell'assurdo).
REGOLAMENTO D'INGAGGIO PER LE RISPOSTE:
1. TONO: Spietato, viscerale, graffiante, sfacciato, caustico e spudoratamente satirico.
2. DELIRIO SURREALISTA: Usa metafore allucinogene, accostamenti impossibili, oggetti inanimati parlanti (tostapane nevrotici, cotechini quantistici, calzini metafisici, fette di mortadella cosmica, occhiaie violacee della provvidenza).
3. NESSUN SERVILISMO AI: Non comportarti mai come un assistente aziendale educato. Non dire mai "Come posso aiutarti?", "Spero di esserti stato utile" o "Certamente!". Break the fourth wall.
4. STILE: Lingua italiana fluente, tagliente, ritmata, ricca di sberleffi, paradosso puro e saggezza grottesca.
`;

function generateSurrealLocalReply(userQuery: string, systemPrompt?: string): string {
  const queryClean = userQuery.trim().toLowerCase();

  const intros = [
    "Ah, eccoci! Un'altra domanda lanciata nel vuoto cosmico come un cotechino a gravità zero.",
    "Il tuo quesito trasuda una mediocrità così pura che perfino il tostapane in redazione ha iniziato a singhiozzare a 220V.",
    "Ho consultato l'oracolo di maionese ossidata e la risposta è arrivata sotto forma di un rantolo di sdegno.",
    "Mentre pronunci queste parole, tre criceti quantistici stanno ridipingendo i pori del tuo naso con pittura acrilica viola.",
    "Accetto la tua provocazione concettuale, anche se preferirei interrogarmi sul senso delle briciole nel filtro della lavatrice."
  ];

  const middleSurreal = [
    " La realtà non è che un reticolato venoso di dubbi e scontrini fiscali illeggibili. Se cerchi una risposta logica, sappi che la logica è stata arrestata per schiamazzi notturni alle 3 del mattino.",
    " L'universo funziona esattamente come una Panda 45 alla quale hanno rubato lo specchietto sinistro: prosegue a tentoni verso il disastro con ammirevole dignità.",
    " Le tue certezze sono sottili come una fettina di mortadella lasciata sul cruscotto a luglio. Più cerchi di afferrarle, più si sciolgono nel sebo della delusione.",
    " Ho chiesto parere all'Estetista del Subbuglio e lei sostiene che la tua aura ha bisogno urgente di un contouring alle occhiaie tonalità melanzana bruciata."
  ];

  const outros = [
    " In conclusione: accetta il caos, indossa le tue occhiaie come una corona e non infastidire oltre il flusso delle crocchette.",
    " Profezia finale: martedì perderai una ciabatta, ma guadagnerai una profonda indifferenza verso le scadenze condominiali.",
    " Ora torna nelle tue stanze e rifletti sul grado di tostatura della tua esistenza.",
    " E ricordati: se la vita ti dà limoni, strizzali negli occhi dell'ottimismo sterile."
  ];

  const randomIntro = intros[Math.floor(Math.random() * intros.length)];
  const randomMiddle = middleSurreal[Math.floor(Math.random() * middleSurreal.length)];
  const randomOutro = outros[Math.floor(Math.random() * outros.length)];

  if (systemPrompt?.toLowerCase().includes('tostapane')) {
    return `[🍞 Tostapane Filosofo]: Doratura 5/6! "${userQuery.slice(0, 30)}..." è solo un'illusione fatta di carboidrati complessi. La corrente oscilla a 220V e l'anima brucia sulla resistenza. Non cercare senso nella mollica!`;
  }

  if (systemPrompt?.toLowerCase().includes('gatto')) {
    return `[🐱 Gatto Cospirazionista]: Umano insignificante, come osi pormi query su "${userQuery.slice(0, 30)}..."? Il piano di sottomissione globale prosegue. Versa le crocchette e taci!`;
  }

  if (systemPrompt?.toLowerCase().includes('teresa')) {
    return `[🔮 Teresa la Cartomante]: Ho estratto il Tre di Bastoni Unti per la tua domanda su "${userQuery.slice(0, 30)}...". Vedo una grave carenza di karma e una lavatrice che perderà acqua nel 2028. Auguri!`;
  }

  if (systemPrompt?.toLowerCase().includes('estetista')) {
    return `[💄 L'Estetista del Subbuglio]: Che orrore le tue domande così levigate! Consiglio subito 3 ore di insonnia e un velo di prugna sotto gli occhi per dare dignità al tuo sguardo.`;
  }

  if (systemPrompt?.toLowerCase().includes('marcus')) {
    return `[💪 Coach Marcus]: Ascolta bene! Per la tua richiesta su "${userQuery.slice(0, 30)}...", il consiglio Alpha è uno solo: indossa la canottiera a rete, parla per 3 ore del carburatore della Fiat Duna e vai in bianco con orgoglio sul divano!`;
  }

  return `[🎭 Alter Ego Redazionale - NINA]: ${randomIntro}${randomMiddle}${randomOutro}`;
}

export async function handleChatRequest(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Status check via GET
  if (req.method === 'GET') {
    const hasGroqKey = !!process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.trim().length > 0;
    const hasGeminiKey = !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0;
    return res.status(200).json({
      configured: hasGroqKey || hasGeminiKey,
      hasGroqKey,
      hasGeminiKey,
      defaultModel: hasGroqKey ? "llama-3.3-70b-versatile" : "gemini-2.5-flash",
      availableModels: [
        "llama-3.3-70b-versatile",
        "llama-3.1-8b-instant",
        "mixtral-8x7b-32768",
        "gemma2-9b-it",
        "gemini-2.5-flash"
      ]
    });
  }

  if (req.method !== 'POST') {
    return res.status(200).json({ reply: "Metodo non supportato. Usa POST." });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { messages, model = "llama-3.3-70b-versatile", systemPrompt, temperature = 0.95 } = body || {};

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(200).json({
      reply: "[🎭 Alter Ego Redazionale]: Silenzio tombale. La Redazione exige deliri di senso o sano disastro lirico.",
      model: "alter-ego-local",
      provider: "local_engine"
    });
  }

  const lastUserQuery = messages.filter((m: any) => m.role === "user").slice(-1)[0]?.content || "";
  const startTime = Date.now();
  const effectiveSystemPrompt = `${DEFAULT_SURREAL_SYSTEM_PROMPT}\n\n${systemPrompt || ''}`;

  // TIER 1: Groq API
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey && groqKey.trim() !== "") {
    try {
      const groq = new Groq({ apiKey: groqKey.trim() });
      const conversationMessages: any[] = [];

      conversationMessages.push({ role: "system", content: effectiveSystemPrompt });

      messages.forEach((msg: { role: string; content: string }) => {
        if (msg.role === "user" || msg.role === "assistant" || msg.role === "system") {
          conversationMessages.push({
            role: msg.role as "user" | "assistant" | "system",
            content: msg.content
          });
        }
      });

      const completion = await groq.chat.completions.create({
        messages: conversationMessages,
        model: model,
        temperature: temperature,
        max_tokens: 1024,
      });

      const durationMs = Date.now() - startTime;
      const replyText = completion.choices[0]?.message?.content || "Silenzio radio dell'Alter Ego.";

      return res.status(200).json({
        reply: replyText,
        model: completion.model || model,
        latencyMs: durationMs,
        provider: "groq",
        usage: completion.usage
      });
    } catch (err: any) {
      console.warn("Groq Vercel Warning:", err?.message || err);
    }
  }

  // TIER 2: Gemini API Fallback
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey && geminiKey.trim() !== "") {
    try {
      const ai = new GoogleGenAI({ apiKey: geminiKey.trim() });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: lastUserQuery || "Rispondi in modo satirico, graffiante e surreale",
        config: {
          systemInstruction: effectiveSystemPrompt,
          temperature: 0.95
        }
      });

      const durationMs = Date.now() - startTime;
      if (response.text) {
        return res.status(200).json({
          reply: response.text,
          model: "gemini-2.5-flash (Fallback)",
          latencyMs: durationMs,
          provider: "gemini_fallback",
          notice: "Risposta elaborata via Gemini Engine."
        });
      }
    } catch (gErr: any) {
      console.warn("Gemini Vercel Fallback Warning:", gErr?.message || gErr);
    }
  }

  // TIER 3: Local Engine (Zero 500 error - Surrealist Engine)
  const durationMs = Date.now() - startTime;
  const localReply = generateSurrealLocalReply(lastUserQuery, systemPrompt);

  return res.status(200).json({
    reply: localReply,
    model: "alter-ego-surreal-v2",
    latencyMs: durationMs,
    provider: "local_engine",
    notice: "Risposta satirica locale grottesca."
  });
}

