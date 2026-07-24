import { GoogleGenAI } from "@google/genai";

export async function handleImageGeneration(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      status: "active",
      provider: "Open-Source Pollinations FLUX Engine + Gemini Imagen Option",
      requiresApiKey: false
    });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { prompt, style = "editorial", width = 1024, height = 768 } = body || {};

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({ error: "Specificare una descrizione per l'immagine da generare." });
  }

  const cleanPrompt = prompt.trim();
  const seed = Math.floor(Math.random() * 9999999);

  // Enhance prompt with satirical magazine aesthetic
  let styleModifier = "Satirical magazine cover illustration, vintage editorial art, high contrast, surrealist, bold colors, 4k detail";
  if (style === "poster") {
    styleModifier = "Pop art propaganda poster, vintage screenprint, bold typography aesthetic, absurdist art, high contrast";
  } else if (style === "surreal") {
    styleModifier = "Surrealist collage, Salvador Dali meets modern pop art, bizarre dreamlike composition, vivid lighting";
  } else if (style === "cat") {
    styleModifier = "Funny conspirator cat overlord artwork, retro magazine illustration, detailed fur, villainous cinematic light";
  }

  const fullPrompt = `${cleanPrompt}. ${styleModifier}`;

  // TIER 1: Check if GEMINI_API_KEY exists for Gemini Imagen
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey && geminiKey.trim().length > 0) {
    try {
      const ai = new GoogleGenAI({ apiKey: geminiKey.trim() });
      const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: fullPrompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: width >= height ? '4:3' : '3:4',
        },
      });

      if (response.generatedImages && response.generatedImages.length > 0) {
        const base64ImageBytes = response.generatedImages[0].image.imageBytes;
        const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
        return res.status(200).json({
          url: imageUrl,
          prompt: fullPrompt,
          provider: "gemini_imagen",
          notice: "Immagine generata con Google Imagen 3 API."
        });
      }
    } catch (gErr: any) {
      console.warn("Gemini Imagen Warning, switching to Open-Source FLUX:", gErr?.message || gErr);
    }
  }

  // TIER 2: Open-Source Pollinations FLUX / Turbo Engine (0 Keys required, 100% free & instant!)
  const encodedPrompt = encodeURIComponent(fullPrompt);
  // Use turbo model for super fast rendering (1-2s) or flux with fallbacks
  const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&nologo=true&seed=${seed}&model=turbo`;

  return res.status(200).json({
    url: pollinationsUrl,
    prompt: fullPrompt,
    provider: "pollinations_turbo",
    notice: "Immagine generata tramite Motore Open-Source Turbo AI (Nessuna API Key richiesta)."
  });
}
