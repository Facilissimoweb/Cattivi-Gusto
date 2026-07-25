// Helper for cross-platform SpeechSynthesis normalization (especially Apple iOS/macOS Safari)

export function initSpeechVoices() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    // Pre-trigger voice loading for Safari
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }
}

export function createNormalizedUtterance(text: string): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Enforce standard Italian language tag
  utterance.lang = 'it-IT';
  
  // STRICT NORMALIZATION: Keep pitch at 1.0 and rate at 1.0.
  // Pitch modulation in Apple WebKit/Safari causes severe robotic distortion on iOS/macOS.
  utterance.pitch = 1.0;
  utterance.rate = 1.0;

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        // Filter all Italian voices
        const italianVoices = voices.filter(v => 
          v.lang === 'it-IT' || v.lang === 'it_IT' || v.lang.toLowerCase().startsWith('it')
        );

        if (italianVoices.length > 0) {
          // Priority 1: Premium / Enhanced / Siri / Natural voices (Apple & Google)
          const premiumVoice = italianVoices.find(v => 
            /premium|enhanced|siri|natural|pro/i.test(v.name)
          );

          // Priority 2: Standard Apple Italian Voices (Alice, Federica, Luca, Paolina) - avoiding 'Compact'
          const preferredAppleVoice = italianVoices.find(v => 
            /alice|federica|luca|paolina/i.test(v.name) && !/compact/i.test(v.name)
          );

          // Priority 3: Any non-compact Italian voice
          const nonCompactVoice = italianVoices.find(v => !/compact/i.test(v.name));

          // Priority 4: Fallback to any Italian voice
          utterance.voice = premiumVoice || preferredAppleVoice || nonCompactVoice || italianVoices[0];
        }
      }
    } catch (e) {
      console.warn("Unable to load TTS voices:", e);
    }
  }

  return utterance;
}

// Module-level references to prevent Garbage Collection during active speech playback
let globalUtteranceQueue: SpeechSynthesisUtterance[] = [];
let keepAliveInterval: any = null;
let isSpeakingGlobal = false;
let currentOnEndCallback: (() => void) | null = null;

export function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      // ignore
    }
  }
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
    keepAliveInterval = null;
  }
  globalUtteranceQueue = [];
  isSpeakingGlobal = false;
  if (currentOnEndCallback) {
    const cb = currentOnEndCallback;
    currentOnEndCallback = null;
    try {
      cb();
    } catch (e) {
      // ignore
    }
  }
}

export function cleanTextForSpeech(text: string): string {
  if (!text) return '';
  return text
    .replace(/https?:\/\/\S+/g, '') // remove URLs
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '') // remove emojis
    .replace(/[*#_~`•]/g, ' ') // remove markdown symbols
    .replace(/\s+/g, ' ') // normalize whitespace
    .trim();
}

export function splitTextIntoChunks(text: string, maxChunkLength = 150): string[] {
  const cleaned = cleanTextForSpeech(text);
  if (!cleaned) return [];

  // Split by sentence ending punctuation
  const rawSentences = cleaned.match(/[^.!?;]+[.!?;]+/g) || [cleaned];
  const chunks: string[] = [];

  for (const sentence of rawSentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;

    if (trimmed.length <= maxChunkLength) {
      chunks.push(trimmed);
    } else {
      // Split long sentences by clauses (commas, colons, dashes) or word bounds
      const subClauses = trimmed.split(/(?<=[,:\-\–])\s+/);
      let currentChunk = '';

      for (const clause of subClauses) {
        if ((currentChunk + ' ' + clause).trim().length <= maxChunkLength) {
          currentChunk = currentChunk ? `${currentChunk} ${clause}` : clause;
        } else {
          if (currentChunk.trim()) chunks.push(currentChunk.trim());
          if (clause.length <= maxChunkLength) {
            currentChunk = clause;
          } else {
            // Word level split for ultra long clauses
            const words = clause.split(' ');
            currentChunk = '';
            for (const word of words) {
              if ((currentChunk + ' ' + word).trim().length > maxChunkLength) {
                if (currentChunk.trim()) chunks.push(currentChunk.trim());
                currentChunk = word;
              } else {
                currentChunk = currentChunk ? `${currentChunk} ${word}` : word;
              }
            }
          }
        }
      }
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
      }
    }
  }

  return chunks;
}

export function speakText(
  text: string,
  callbacks?: {
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (err: any) => void;
  }
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (callbacks?.onError) callbacks.onError('Speech synthesis not supported');
    return () => {};
  }

  // Stop any ongoing speech and reset state
  stopSpeech();

  const chunks = splitTextIntoChunks(text);
  if (chunks.length === 0) {
    if (callbacks?.onEnd) callbacks.onEnd();
    return () => {};
  }

  currentOnEndCallback = callbacks?.onEnd || null;
  isSpeakingGlobal = true;

  if (callbacks?.onStart) {
    try {
      callbacks.onStart();
    } catch (e) {
      // ignore
    }
  }

  // Pre-create and store utterances to prevent Garbage Collection during speech
  globalUtteranceQueue = chunks.map((chunkText) => createNormalizedUtterance(chunkText));

  let currentChunkIndex = 0;

  const playNextChunk = () => {
    if (!isSpeakingGlobal || currentChunkIndex >= globalUtteranceQueue.length) {
      stopSpeech();
      return;
    }

    const currentUtterance = globalUtteranceQueue[currentChunkIndex];

    currentUtterance.onend = () => {
      currentChunkIndex++;
      if (currentChunkIndex < globalUtteranceQueue.length) {
        playNextChunk();
      } else {
        stopSpeech();
      }
    };

    currentUtterance.onerror = (e) => {
      console.warn('Speech chunk error, advancing:', e);
      currentChunkIndex++;
      if (currentChunkIndex < globalUtteranceQueue.length) {
        playNextChunk();
      } else {
        stopSpeech();
      }
    };

    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.speak(currentUtterance);
    } catch (err) {
      console.error('SpeechSynthesis.speak failed:', err);
      stopSpeech();
    }
  };

  // Keep-alive timer for Chrome 15s pause bug
  keepAliveInterval = setInterval(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }
  }, 10000);

  // Short delay after cancel() to ensure browser speech engine resets cleanly
  setTimeout(() => {
    playNextChunk();
  }, 60);

  return () => stopSpeech();
}

