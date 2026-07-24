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

  // AI-powered generator endpoint (Groq + Gemini + Local Fallback)
  app.post("/api/ai/generate-absurdity", async (req, res) => {
    try {
      const { prompt, type } = req.body;

      let systemInstruction = "Sei la redazione della rivista satirica e d'avanguardia 'Cattivo Gusto' (motto: 'La rivista che mancava a cura di alter ego'). Il tuo tono è assurdo, cinico, brillante, tagliente, grottesco e surreale. Rispondi in italiano con massimo 2-3 frasi folgoranti.";

      if (type === "guru") {
        systemInstruction = "Sei il 'Guru del Nulla in 5 Minuti' di Cattivo Gusto. Dispensare perle di saggezza filosofica assolutamente inutili, taglienti, grottesche e surreali. Rispondi in 2-3 frasi folgoranti, ciniche e comiche. Includi una tecnica di respirazione stramba o una meditazione sul fissare oggetti inanimati.";
      } else if (type === "horoscope") {
        systemInstruction = "Sei l'Astrologo dell'Assurdo di Cattivo Gusto. Genera l'oroscopo quotidiano per un oggetto inanimato di casa. Tono cinico, grottesco e spassoso.";
      } else if (type === "cat_evidence") {
        systemInstruction = "Genera una 'prova scientifica' esilarante, tagliente e cospirazionista sul perché il gatto di casa sta pianificando la caduta del padrone.";
      } else if (type === "manifesto") {
        systemInstruction = "Genera una clausola aggiuntiva del 'Manifesto dell'Assurdo' scritta con linguaggio pseudo-legale e filosofico nonsense.";
      }

      const userPrompt = prompt || "Genera un nuovo consiglio di saggezza inutile ed esilarante per il Guru del Nulla.";

      // TIER 1: Groq API
      const groqKey = process.env.GROQ_API_KEY;
      if (groqKey && groqKey.trim().length > 0) {
        try {
          const groq = new Groq({ apiKey: groqKey.trim() });
          const completion = await groq.chat.completions.create({
            messages: [
              { role: "system", content: systemInstruction },
              { role: "user", content: userPrompt }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.95,
            max_tokens: 250,
          });

          const replyText = completion.choices[0]?.message?.content?.trim();
          if (replyText) {
            return res.json({ text: replyText, provider: "groq", model: "llama-3.3-70b-versatile" });
          }
        } catch (groqErr: any) {
          console.warn("[Groq generate-absurdity warning]:", groqErr?.message || groqErr);
        }
      }

      // TIER 2: Gemini API
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey.trim().length > 0) {
        try {
          const ai = new GoogleGenAI({ apiKey: apiKey.trim() });
          const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userPrompt,
            config: {
              systemInstruction,
              temperature: 0.95,
            }
          });

          if (response.text) {
            return res.json({ text: response.text.trim(), provider: "gemini", model: "gemini-2.5-flash" });
          }
        } catch (geminiErr: any) {
          console.warn("[Gemini generate-absurdity warning]:", geminiErr?.message || geminiErr);
        }
      }

      // TIER 3: Local Satirical Fallback (never fails)
      const guruFallbacks = [
        "Respira profondamente per 4 secondi, poi fissa la caffettiera finché non capisci che neanche lei sa dove sta andando la tua vita.",
        "Se una porta si chiude, la fisica quantistica suggerisce che era semplicemente mal registrata sui cardini. Non farne un dramma spirituale.",
        "Chiudi gli occhi e visualizza un conto in banca infinito. Riaprili: era un'illusione, ma ora il tostapane sembra più simpatico.",
        "Inala il futuro, esala la contabilità. Ripeti tre volte e poi fai finta di essere un pezzo di pane integrale.",
        "Non inseguire i tuoi sogni: lasciali correre avanti e prenditi una brioche al bar all'angolo."
      ];

      const randomText = guruFallbacks[Math.floor(Math.random() * guruFallbacks.length)];
      return res.json({ text: randomText, provider: "local_engine" });
    } catch (err: any) {
      console.error("AI Absurdity Error:", err);
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

