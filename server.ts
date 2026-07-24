import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoints
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", magazine: "Cattivo Gusto", version: "1.0.0" });
  });

  // AI-powered generator endpoint
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
