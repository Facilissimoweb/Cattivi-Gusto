import Groq from "groq-sdk";

export default async function handler(req: any, res: any) {
  // Enable CORS for Vercel deployment
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Status check via GET
  if (req.method === 'GET') {
    const hasKey = !!process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.trim().length > 0;
    return res.status(200).json({
      configured: hasKey,
      defaultModel: "llama-3.3-70b-versatile",
      availableModels: [
        "llama-3.3-70b-versatile",
        "llama-3.1-8b-instant",
        "mixtral-8x7b-32768",
        "gemma2-9b-it"
      ]
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito. Usa POST.' });
  }

  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey || apiKey.trim() === "") {
      return res.status(400).json({
        error: "GROQ_API_KEY_MISSING",
        message: "Chiave GROQ_API_KEY non trovata nelle variabili d'ambiente. Aggiungi GROQ_API_KEY nei Secrets di Vercel o AI Studio."
      });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { messages, model = "llama-3.3-70b-versatile", systemPrompt, temperature = 0.85 } = body || {};

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messaggi non validi o vuoti." });
    }

    const groq = new Groq({ apiKey });

    const conversationMessages: any[] = [];
    if (systemPrompt) {
      conversationMessages.push({
        role: "system",
        content: systemPrompt
      });
    } else {
      conversationMessages.push({
        role: "system",
        content: "Sei l'Alter Ego Grottesco della redazione di 'Cattivo Gusto', una rivista d'avanguardia e satirica. Rispondi con tono surreale, cinico, brillante, ironico e spaventosamente acuto in lingua italiana."
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

    const startTime = Date.now();
    const completion = await groq.chat.completions.create({
      messages: conversationMessages,
      model: model,
      temperature: temperature,
      max_tokens: 1024,
    });
    const durationMs = Date.now() - startTime;

    const replyText = completion.choices[0]?.message?.content || "La mente dell'Alter Ego ha generato silenzio radio.";

    return res.status(200).json({
      reply: replyText,
      model: completion.model || model,
      latencyMs: durationMs,
      usage: completion.usage
    });
  } catch (err: any) {
    console.error("Groq Vercel Serverless Error:", err);
    return res.status(500).json({
      error: "GROQ_EXECUTION_ERROR",
      message: err?.message || "Errore durante la chiamata ai server Groq AI."
    });
  }
}
