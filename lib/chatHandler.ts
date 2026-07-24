import Groq from "groq-sdk";
import { GoogleGenAI } from "@google/genai";

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
  const { messages, model = "llama-3.3-70b-versatile", systemPrompt, temperature = 0.85 } = body || {};

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(200).json({
      reply: "[Alter Ego Redazionale]: Messaggio vuoto. La Redazione preferisce parole piene di senso o di sano caos.",
      model: "alter-ego-local",
      provider: "local_engine"
    });
  }

  const lastUserQuery = messages.filter((m: any) => m.role === "user").slice(-1)[0]?.content || "";
  const startTime = Date.now();

  // TIER 1: Groq API
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey && groqKey.trim() !== "") {
    try {
      const groq = new Groq({ apiKey: groqKey.trim() });
      const conversationMessages: any[] = [];

      if (systemPrompt) {
        conversationMessages.push({ role: "system", content: systemPrompt });
      } else {
        conversationMessages.push({
          role: "system",
          content: "Sei l'Alter Ego Grottesco della redazione di 'Cattivo Gusto', una rivista d'avanguardia e satirica. Rispondi in lingua italiana."
        });
      }

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
        contents: lastUserQuery || "Rispondi in modo satirico",
        config: {
          systemInstruction: systemPrompt || "Sei l'Alter Ego Grottesco della redazione di 'Cattivo Gusto'.",
          temperature: 0.85
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

  // TIER 3: Local Engine (Zero 500 error)
  const durationMs = Date.now() - startTime;
  let localReply = `[🎭 Alter Ego Redazionale]: Messaggio ricevuto ("${lastUserQuery.slice(0, 40)}..."). La Redazione ha approvato all'unanimità.`;

  if (systemPrompt?.includes("Tostapane")) {
    localReply = `[🍞 Tostapane Filosofo]: Doratura 4/6 per "${lastUserQuery.slice(0, 40)}...". Risposta in corso di tostatura.`;
  } else if (systemPrompt?.includes("Gatto")) {
    localReply = `[🐱 Gatto Cospirazionista]: Query registrata. Il piano di conquista felina procede senza ostacoli.`;
  }

  return res.status(200).json({
    reply: localReply,
    model: "alter-ego-satirical-v1",
    latencyMs: durationMs,
    provider: "local_engine",
    notice: "Risposta satirica locale."
  });
}
