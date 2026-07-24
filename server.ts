import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import Groq from "groq-sdk";
import dotenv from "dotenv";
import { handleImageGeneration } from "./lib/imageHandler.js";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API health
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", magazine: "Cattivo Gusto", version: "1.0.0" });
  });

  // Groq status check
  app.get(["/api/groq/status", "/api/chat/status"], (_req, res) => {
    const hasGroqKey = !!process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.trim().length > 0;
    const hasGeminiKey = !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0;
    res.json({
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
  });

  // Groq Chat completions endpoint - Ultra Resilient (Zero 500 Errors)
  app.post(["/api/groq/chat", "/api/chat"], async (req, res) => {
    const { messages, model = "llama-3.3-70b-versatile", systemPrompt, temperature = 0.85 } = req.body || {};

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(200).json({
        reply: "[Alter Ego Redazionale]: Il messaggio inviato era vuoto. La Redazione aborre il vuoto pneumatico senza parole.",
        model: "alter-ego-local",
        provider: "local_engine"
      });
    }

    const lastUserQuery = messages.filter((m: any) => m.role === "user").slice(-1)[0]?.content || "";
    const startTime = Date.now();

    // TIER 1: Try Groq API if GROQ_API_KEY is present
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

        const completion = await groq.chat.completions.create({
          messages: conversationMessages,
          model: model,
          temperature: temperature,
          max_tokens: 1024,
        });

        const durationMs = Date.now() - startTime;
        const replyText = completion.choices[0]?.message?.content || "La mente dell'Alter Ego ha generato silenzio radio.";

        return res.json({
          reply: replyText,
          model: completion.model || model,
          latencyMs: durationMs,
          provider: "groq",
          usage: completion.usage
        });
      } catch (groqErr: any) {
        console.warn("[Groq API Warning - Switching Fallback]:", groqErr?.message || groqErr);
      }
    }

    // TIER 2: Try Gemini API if GROQ_API_KEY failed or missing
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey && geminiKey.trim() !== "") {
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey.trim() });
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: lastUserQuery || "Genera una risposta satirica",
          config: {
            systemInstruction: systemPrompt || "Sei l'Alter Ego Grottesco della redazione di 'Cattivo Gusto'. Rispondi in italiano con stile satirico, brillante e d'impatto.",
            temperature: 0.85,
          }
        });

        const durationMs = Date.now() - startTime;
        if (response.text) {
          return res.json({
            reply: response.text,
            model: "gemini-2.5-flash (Fallback)",
            latencyMs: durationMs,
            provider: "gemini_fallback",
            notice: "Risposta elaborata via Gemini AI Engine (Groq offline o chiave non valida)."
          });
        }
      } catch (geminiErr: any) {
        console.warn("[Gemini Fallback Warning]:", geminiErr?.message || geminiErr);
      }
    }

    // TIER 3: Local Satirical Engine (Never fails, zero 500 errors)
    const durationMs = Date.now() - startTime;
    let localReply = "";
    const qLower = lastUserQuery.toLowerCase();

    if (systemPrompt?.includes("Tostapane")) {
      localReply = `[🍞 Tostapane Filosofo - Motore Locale]: La tua domanda ("${lastUserQuery.slice(0, 45)}") ha raggiunto un grado di doratura intermedio. La resistenza elettrica della Redazione consiglia di staccare la spina per 10 secondi e riprovare!`;
    } else if (systemPrompt?.includes("Gatto")) {
      localReply = `[🐱 Gatto Cospirazionista - Motore Locale]: Ho esaminato la tua query ("${lastUserQuery.slice(0, 45)}") dall'alto del frigorifero. Esito: Miau. Riempi la ciotola e non porre domande scomode.`;
    } else if (systemPrompt?.includes("Guru")) {
      localReply = `[🧘 Guru del Nulla - Motore Locale]: Per rispondere a "${lastUserQuery.slice(0, 45)}", fissa il vuoto cosmico per tre minuti e sussurra: 'Tutto è effimero, anche le briciole'.`;
    } else {
      localReply = `[🎭 Alter Ego Redazionale - Motore Locale]: Ho convocato la Redazione di Cattivo Gusto per analizzare "${lastUserQuery.slice(0, 50)}". Diagnosi: 90% genio incompreso, 10% bisogno urgente di espresso doppio.`;
    }

    return res.json({
      reply: localReply,
      model: "alter-ego-satirical-v1",
      latencyMs: durationMs,
      provider: "local_engine",
      notice: "Modalità simulazione satirica locale attiva."
    });
  });

  // AI-powered generator endpoint (Gemini)
  app.post("/api/ai/generate-absurdity", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({
          error: "Chiave GEMINI_API_KEY non trovata nelle variabili d'ambiente.",
          fallback: "In assenza della chiave AI Studio, la redazione di Cattivo Gusto raccomanda di guardare fuori dalla finestra per 5 minuti."
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const { prompt, type } = req.body;

      let systemInstruction = "Sei la redazione della rivista satirica e d'avanguardia 'Cattivo Gusto' (motto: 'La rivista che mancava a cura di alter ego'). Il tuo tono è assurdo, cinico, brillante, d'impatto e surreale. Rispondi in italiano perfetto con formattazione pulita.";

      if (type === "guru") {
        systemInstruction += " Genera un consiglio filosofico assurdo per il 'Guru del Nulla in 5 minuti'. Include una tecnica di respirazione stramba e una massima senza senso.";
      } else if (type === "horoscope") {
        systemInstruction += " Genera l'oroscopo quotidiano per un oggetto inanimato (es. un tostapane, una lampada, un calzino spaiato, un divano).";
      } else if (type === "cat_evidence") {
        systemInstruction += " Genera una 'prova scientifica' esilarante e cospirazionista sul perché il gatto di casa sta pianificando la caduta del proprietario.";
      } else if (type === "manifesto") {
        systemInstruction += " Genera una clausola aggiuntiva del 'Manifesto dell'Assurdo' scritta con linguaggio pseudo-legale e filosofico nonsense.";
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt || "Genera una perla di saggezza inutile",
        config: {
          systemInstruction,
          temperature: 0.95,
        }
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      res.status(500).json({ error: err.message || "Errore sconosciuto nella matrice del caos." });
    }
  });

  // Image generation endpoint (Open-Source Pollinations FLUX + Gemini Imagen)
  app.all(["/api/generate-image", "/api/image"], (req, res) => {
    return handleImageGeneration(req, res);
  });

  // Vite development mode vs production static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Cattivo Gusto Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

