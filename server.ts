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

  const SAFETY_GUARDRAIL = "\n\nDIRETTIVA DI SICUREZZA ED ETICA: Non discutere MAI di suicidio, autolesionismo, malattie o argomenti medici sensibili. Sii arguto, brillante e spiritoso, ma MAI cattivo, perverso o volgare.";

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
          conversationMessages.push({ role: "system", content: systemPrompt + SAFETY_GUARDRAIL });
        } else {
          conversationMessages.push({
            role: "system",
            content: "Sei l'Alter Ego Grottesco della redazione di 'Cattivo Gusto', una rivista d'avanguardia e satirica. Rispondi con tono surreale, brillante, ironico e spaventosamente acuto in lingua italiana." + SAFETY_GUARDRAIL
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
            systemInstruction: (systemPrompt || "Sei l'Alter Ego Grottesco della redazione di 'Cattivo Gusto'. Rispondi in italiano con stile satirico, brillante e d'impatto.") + SAFETY_GUARDRAIL,
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
        systemInstruction = "Sei il 'Guru del Nulla in 5 Minuti' di Cattivo Gusto. Dispensare perle di saggezza filosofica assolutamente inutili, taglienti, grottesche e surreale. Rispondi in 2-3 frasi folgoranti, ciniche e comiche. Includi una tecnica di respirazione stramba o una meditazione sul fissare oggetti inanimati.";
      } else if (type === "horoscope") {
        systemInstruction = "Sei l'Astrologo dell'Assurdo di Cattivo Gusto. Genera l'oroscopo quotidiano per un oggetto inanimato di casa. Tono cinico, grottesco e spassoso.";
      } else if (type === "cat_evidence") {
        systemInstruction = "Genera una 'prova scientifica' esilarante, tagliente e cospirazionista sul perché il gatto di casa sta pianificando la caduta del padrone.";
      } else if (type === "manifesto") {
        systemInstruction = "Genera una clausola aggiuntiva del 'Manifesto dell'Assurdo' scritta con linguaggio pseudo-legale e filosofico nonsense.";
      }

      systemInstruction += SAFETY_GUARDRAIL;

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

  // Under-The-Hood Translator Endpoint (Groq LPU AI + Google Translate Engine)
  app.post("/api/translate", async (req, res) => {
    try {
      const { text, targetLang = "nap" } = req.body || {};
      if (!text || typeof text !== "string" || !text.trim()) {
        return res.status(400).json({ error: "Testo mancante per la traduzione." });
      }

      const cleanText = text.trim();

      // Algorithmic strange languages
      if (targetLang === "binary") {
        const binary = cleanText
          .split("")
          .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
          .join(" ");
        return res.json({
          translated: binary,
          provider: "Codice Binario 8-bit Engine",
          targetLang
        });
      }

      if (targetLang === "morse") {
        const MORSE_MAP: Record<string, string> = {
          A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
          I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
          Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
          Y: "-.--", Z: "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
          "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
          " ": " / "
        };
        const morse = cleanText
          .toUpperCase()
          .split("")
          .map((ch) => MORSE_MAP[ch] || ch)
          .join(" ");
        return res.json({
          translated: morse,
          provider: "Telegrafo Morse Rustico Engine",
          targetLang
        });
      }

      const langPrompts: Record<string, string> = {
        nap: "Traduci il seguente testo in Dialetto Napoletano stretto, verace, popolarissimo, comico e colorito. Restituisci SOLO la traduzione in napoletano senza introduzioni o spiegazioni.",
        tlh: "Traduci il seguente testo in Klingon (Star Trek) o in un dialetto alieno guerriero sci-fi. Restituisci SOLO la traduzione in Klingon.",
        la: "Traduci il seguente testo in Latino solenne ed ecclesiastico. Restituisci SOLO la traduzione in latino senza altri commenti.",
        cat: "Riscrivi il testo simulando il linguaggio di un gatto filosofo e cospiratore, intervallando le parole con miagolii ('Miao', 'Mrrrp', 'Purrr') e osservazioni snob. Restituisci solo il testo tradotto.",
        emoji: "Traduci e decodifica l'intero significato del testo usando una sequenza ricca ed espressiva di emoji e pittogrammi dell'assurdo. Restituisci SOLO le emoji.",
        bizzarro: "Riscrivi il testo nello stile aulico, grottesco e iper-satirico dell'Alter Ego della rivista 'Cattivo Gusto'. Massima carica di sarcasmo e vocaboli forbiti.",
        elvish: "Traduci il testo nello stile dell'Alto Elfico Quenya (Tolkien) con sonorità poetiche e mistiche. Restituisci solo la traduzione.",
        eo: "Traduci il testo in Esperanto fluido ed elegante. Restituisci solo la traduzione."
      };

      const systemInstruction = langPrompts[targetLang] || "Traduci il testo nella lingua o stile richiesto con cura e tono espressivo.";

      // TIER 1: Groq AI LPU Engine
      const groqKey = process.env.GROQ_API_KEY;
      if (groqKey && groqKey.trim().length > 0) {
        try {
          const groq = new Groq({ apiKey: groqKey.trim() });
          const completion = await groq.chat.completions.create({
            messages: [
              { role: "system", content: systemInstruction },
              { role: "user", content: cleanText }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 400
          });
          const result = completion.choices[0]?.message?.content?.trim();
          if (result) {
            return res.json({
              translated: result,
              provider: "Groq AI LPU Engine (llama-3.3-70b)",
              targetLang
            });
          }
        } catch (groqErr) {
          console.warn("[Groq Translate Warning]:", groqErr);
        }
      }

      // TIER 2: Gemini AI Engine
      const geminiKey = process.env.GEMINI_API_KEY;
      if (geminiKey && geminiKey.trim().length > 0) {
        try {
          const ai = new GoogleGenAI({ apiKey: geminiKey.trim() });
          const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: cleanText,
            config: { systemInstruction, temperature: 0.7 }
          });
          if (response.text) {
            return res.json({
              translated: response.text.trim(),
              provider: "Gemini 2.5 Flash Engine",
              targetLang
            });
          }
        } catch (geminiErr) {
          console.warn("[Gemini Translate Warning]:", geminiErr);
        }
      }

      // TIER 3: Google Translate Free Web API (fallback for real languages)
      if (["la", "eo"].includes(targetLang)) {
        try {
          const gUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(cleanText)}`;
          const gRes = await fetch(gUrl);
          if (gRes.ok) {
            const gData = await gRes.json();
            if (gData && gData[0]) {
              const translatedStr = gData[0].map((item: any) => item[0]).join("");
              return res.json({
                translated: translatedStr,
                provider: `Google Translate Web API (${targetLang.toUpperCase()})`,
                targetLang
              });
            }
          }
        } catch (gErr) {
          console.warn("[Google Translate API Warning]:", gErr);
        }
      }

      // TIER 4: Satirical fallback if AI services are down
      const fallbacks: Record<string, string> = {
        nap: `Uaglio', chest e' 'a traduzione: "${cleanText}" sta a dicere ca 'o gatto tene sulo famme e o tostapane e' addiventato pazzo!`,
        tlh: `nuqneH! Qapla'! [Klingon]: ${cleanText.toUpperCase()} -- Qo'noS jIH!`,
        la: `[Latino Ecclesiastico]: Absurditas magna est: "${cleanText}" -- Amen et requiescat.`,
        cat: `Mrrrp... Miao! ${cleanText} ...Purrrr! 🐾`,
        emoji: `🎭 🐈‍⬛ 🍞 ⚡ 🍕 🌀 🛸 ✨`,
        bizzarro: `[Bizzarro Redazionale]: Egregio lettore, la frase "${cleanText}" denota una profonda vacuità ontologica che la Redazione approva.`,
        elvish: `[Quenya]: Elen síla lúmenn' omentielvo: ${cleanText} -- Namárië.`
      };

      return res.json({
        translated: fallbacks[targetLang] || `[Tradotto sotto il cofano]: ${cleanText}`,
        provider: "Motore Redazionale Locale Sotto il Cofano",
        targetLang
      });
    } catch (err: any) {
      console.error("Translate error:", err);
      res.status(500).json({ error: "Errore durante la traduzione sotto il cofano." });
    }
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

