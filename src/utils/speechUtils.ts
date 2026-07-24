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
