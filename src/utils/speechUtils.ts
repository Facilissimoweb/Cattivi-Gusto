// Helper for cross-platform SpeechSynthesis normalization (especially Apple iOS/macOS Safari & Chrome)

export function initSpeechVoices() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    // Pre-trigger voice loading for Safari / Chrome
    try {
      window.speechSynthesis.getVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
          try {
            window.speechSynthesis.getVoices();
          } catch (e) {
            // ignore
          }
        };
      }
    } catch (e) {
      // ignore
    }
  }
}

export function createNormalizedUtterance(text: string): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Enforce standard Italian language tag
  utterance.lang = 'it-IT';
  
  // Pitch and rate normalization for natural speech across browsers
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
let chunkWatchdogTimer: any = null;
let interChunkTimer: any = null;
let isSpeakingGlobal = false;
let currentOnEndCallback: (() => void) | null = null;

export function stopSpeech() {
  if (interChunkTimer) {
    clearTimeout(interChunkTimer);
    interChunkTimer = null;
  }
  if (chunkWatchdogTimer) {
    clearTimeout(chunkWatchdogTimer);
    chunkWatchdogTimer = null;
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      // ignore
    }
    // Clear global window references to allow clean garbage collection on stop
    delete (window as any)._activeSpeechQueue;
    delete (window as any)._activeSpeechUtterance;
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
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .replace(/https?:\/\/\S+/g, '') // remove URLs
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '') // remove emojis
    .replace(/[*#_~`•]/g, ' ') // remove markdown symbols
    .replace(/\s+/g, ' ') // normalize whitespace
    .trim();
}

export function splitTextIntoChunks(text: string, maxChunkLength = 130): string[] {
  const cleaned = cleanTextForSpeech(text);
  if (!cleaned) return [];

  // Split text cleanly by sentence boundaries (. ! ? ; : \n), retaining all text without losing trailing sentences
  const rawSentences = cleaned
    .split(/(?<=[.!?;:])\s+|\n+/)
    .map(s => s.trim())
    .filter(Boolean);

  const chunks: string[] = [];

  for (const sentence of rawSentences) {
    if (sentence.length <= maxChunkLength) {
      chunks.push(sentence);
    } else {
      // Split long sentences by clauses (commas, colons, dashes) or word bounds
      const subClauses = sentence.split(/(?<=[,:\-\–])\s+/);
      let currentChunk = '';

      for (const clause of subClauses) {
        if ((currentChunk ? `${currentChunk} ${clause}` : clause).length <= maxChunkLength) {
          currentChunk = currentChunk ? `${currentChunk} ${clause}` : clause;
        } else {
          if (currentChunk.trim()) chunks.push(currentChunk.trim());
          if (clause.length <= maxChunkLength) {
            currentChunk = clause;
          } else {
            // Word level split for ultra long clauses
            const words = clause.split(/\s+/);
            currentChunk = '';
            for (const word of words) {
              if ((currentChunk ? `${currentChunk} ${word}` : word).length > maxChunkLength) {
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
  (window as any)._activeSpeechQueue = globalUtteranceQueue;

  let currentChunkIndex = 0;

  const playChunk = (index: number) => {
    if (!isSpeakingGlobal || index >= globalUtteranceQueue.length) {
      stopSpeech();
      return;
    }

    currentChunkIndex = index;
    const currentUtterance = globalUtteranceQueue[index];
    (window as any)._activeSpeechUtterance = currentUtterance;

    let hasHandledEnd = false;

    const advanceToNext = () => {
      if (hasHandledEnd) return;
      hasHandledEnd = true;

      if (chunkWatchdogTimer) {
        clearTimeout(chunkWatchdogTimer);
        chunkWatchdogTimer = null;
      }

      if (!isSpeakingGlobal) return;

      const nextIndex = currentChunkIndex + 1;
      if (nextIndex < globalUtteranceQueue.length) {
        // 50ms breather gives browser speech engine time to reset audio context between chunks
        interChunkTimer = setTimeout(() => {
          playChunk(nextIndex);
        }, 50);
      } else {
        stopSpeech();
      }
    };

    currentUtterance.onend = () => {
      advanceToNext();
    };

    currentUtterance.onerror = (e) => {
      console.warn('Speech chunk error, advancing:', e);
      advanceToNext();
    };

    // Watchdog timer: If a chunk doesn't finish within timeout, force advance
    const estimatedDurationMs = Math.max(8000, (currentUtterance.text.length / 10) * 1000 + 4000);
    chunkWatchdogTimer = setTimeout(() => {
      if (isSpeakingGlobal && !hasHandledEnd) {
        console.warn(`Speech chunk ${index} watchdog triggered after timeout. Forcing next chunk.`);
        try {
          window.speechSynthesis.cancel();
        } catch (e) {
          // ignore
        }
        advanceToNext();
      }
    }, estimatedDurationMs);

    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.speak(currentUtterance);
    } catch (err) {
      console.error('SpeechSynthesis.speak failed:', err);
      advanceToNext();
    }
  };

  // Short delay after cancel() to ensure browser speech engine resets cleanly
  interChunkTimer = setTimeout(() => {
    playChunk(0);
  }, 60);

  return () => stopSpeech();
}
