export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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
