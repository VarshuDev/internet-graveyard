// Web Audio API Procedural Synthesizer for Defunct Web Relics
// 100% Client-Side, Zero External MP3 Dependencies

export interface AudioRelic {
  id: string;
  name: string;
  entitySlug?: string;
  platform: string;
  year: string;
  description: string;
  culturalImpact: string;
  durationSec: number;
}

export const SOUND_RELICS: AudioRelic[] = [
  {
    id: 'icq-uhoh',
    name: "ICQ 'Uh-Oh!'",
    entitySlug: 'icq',
    platform: 'ICQ Instant Messenger',
    year: '1996',
    description: 'The two-tone chirp that notified 100M+ users of a new incoming message in the late 90s.',
    culturalImpact: 'Voiced by an Mirabilis engineer’s daughter or friend, heard billions of times globally.',
    durationSec: 0.6
  },
  {
    id: 'aol-dialup',
    name: 'AOL 56k Dial-Up Handshake',
    entitySlug: 'aol',
    platform: 'America Online / V.90 Modem',
    year: '1991 — 2001',
    description: 'The iconic DTMF dialing tones followed by the chaotic white-noise frequency handshake of a 56k connection.',
    culturalImpact: 'The gateway ceremony of entering cyberspace for an entire generation.',
    durationSec: 4.8
  },
  {
    id: 'msn-nudge',
    name: 'MSN Messenger Nudge',
    entitySlug: 'msn-messenger',
    platform: 'MSN Messenger / Windows Live',
    year: '2005',
    description: 'The aggressive double-thud buzz that literally rattled the chat window to demand attention.',
    culturalImpact: 'Triggered frantic screen tremors and endless sibling/friend trolling.',
    durationSec: 0.8
  },
  {
    id: 'skype-ring',
    name: 'Classic Skype Incoming Call',
    entitySlug: 'skype',
    platform: 'Skype 1.0 — 3.0',
    year: '2003',
    description: 'The buoyant marimba ringtone that accompanied early international peer-to-peer VoIP calls.',
    culturalImpact: 'Brought long-distance voice calls to zero cost across the globe.',
    durationSec: 2.2
  },
  {
    id: 'aim-door',
    name: 'AIM Buddy In / Buddy Out',
    entitySlug: 'aim',
    platform: 'AOL Instant Messenger',
    year: '1997',
    description: 'The creaking wooden door opening when a crush logged on, and slamming shut when they logged off.',
    culturalImpact: 'The soundtrack to after-school social life for over a decade.',
    durationSec: 1.1
  },
  {
    id: 'win95-startup',
    name: 'Windows 95/98 Ethereal Chime',
    platform: 'Microsoft Windows 95',
    year: '1995',
    description: 'The lush, otherworldly 6-second ambient chord composed by Brian Eno.',
    culturalImpact: 'Brian Eno composed it on a Mac using an exact brief of 3.25 seconds of pure optimism.',
    durationSec: 3.5
  },
  {
    id: 'club-penguin-theme',
    name: 'Club Penguin Dance Tune',
    entitySlug: 'club-penguin',
    platform: 'Club Penguin',
    year: '2005',
    description: 'The energetic 8-bit synthesizer melody of the Night Club and Dance Lounge.',
    culturalImpact: 'Hundreds of millions of penguins did the /dance command to this loop.',
    durationSec: 2.5
  },
  {
    id: 'yahoo-yodel',
    name: "Yahoo! Messenger Notification Ping",
    entitySlug: 'yahoo-messenger',
    platform: 'Yahoo! Messenger',
    year: '1999',
    description: 'The playful rising melodic ping that heralded an incoming buddy chat or file transfer in the late 90s.',
    culturalImpact: 'Filled cybercafes and computer labs across Asia and the Americas during the dot-com boom.',
    durationSec: 1.2
  },
  {
    id: 'mac-startup',
    name: 'Apple iMac G3 PowerPC Chime',
    platform: 'Apple Macintosh / Mac OS 8 & 9',
    year: '1998',
    description: 'The triumphant, crystal-clear F# major chord composed by Jim Reekes for translucent Bondi Blue iMacs.',
    culturalImpact: 'Signaled Steve Jobs’ iconic return to Apple and the dawn of friendly personal computing.',
    durationSec: 3.2
  },
  {
    id: 'ps1-startup',
    name: 'PlayStation 1 Atmospheric Swell',
    entitySlug: 'playstation-home',
    platform: 'Sony PlayStation (PSX)',
    year: '1994',
    description: 'The mystical deep sub-bass cosmic drone composed by Takafumi Fujisawa that greeted 3D CD-ROM gamers.',
    culturalImpact: 'Heard by over 102 million console owners upon inserting legendary black-bottom CD discs.',
    durationSec: 3.8
  }
];

class RelicAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentStopFn: (() => void) | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public stop(): void {
    if (this.currentStopFn) {
      this.currentStopFn();
      this.currentStopFn = null;
    }
    this.isPlaying = false;
  }

  public playRelic(relicId: string, onEnd?: () => void): boolean {
    if (typeof window === 'undefined') return false;
    this.stop();

    const ctx = this.getContext();
    this.isPlaying = true;

    const finish = () => {
      this.isPlaying = false;
      this.currentStopFn = null;
      onEnd?.();
    };

    try {
      switch (relicId) {
        case 'icq-uhoh':
          this.playICQUhOh(ctx, finish);
          break;
        case 'aol-dialup':
          this.playAOLDialup(ctx, finish);
          break;
        case 'msn-nudge':
          this.playMSNNudge(ctx, finish);
          break;
        case 'skype-ring':
          this.playSkypeRing(ctx, finish);
          break;
        case 'aim-door':
          this.playAIMDoor(ctx, finish);
          break;
        case 'win95-startup':
          this.playWin95(ctx, finish);
          break;
        case 'club-penguin-theme':
          this.playClubPenguin(ctx, finish);
          break;
        case 'yahoo-yodel':
          this.playYahooYodel(ctx, finish);
          break;
        case 'mac-startup':
          this.playMacStartup(ctx, finish);
          break;
        case 'ps1-startup':
          this.playPS1Startup(ctx, finish);
          break;
        default:
          finish();
          return false;
      }
      return true;
    } catch (e) {
      console.error('Audio synthesizer error:', e);
      finish();
      return false;
    }
  }

  // 1. ICQ "Uh-Oh!"
  private playICQUhOh(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    // First syllable "Uh"
    osc1.frequency.setValueAtTime(580, now);
    osc2.frequency.setValueAtTime(585, now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.04);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.18);

    // Second syllable "Oh!" (higher pitch)
    osc1.frequency.setValueAtTime(860, now + 0.22);
    osc1.frequency.exponentialRampToValueAtTime(940, now + 0.45);
    osc2.frequency.setValueAtTime(865, now + 0.22);
    osc2.frequency.exponentialRampToValueAtTime(945, now + 0.45);

    gain.gain.setValueAtTime(0.01, now + 0.22);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.26);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.6);
    osc2.stop(now + 0.6);

    const timer = setTimeout(onEnd, 600);
    this.currentStopFn = () => {
      try { osc1.stop(); osc2.stop(); } catch {}
      clearTimeout(timer);
    };
  }

  // 2. AOL Dial-up Handshake
  private playAOLDialup(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.25, now);
    masterGain.connect(ctx.destination);

    // Part A: DTMF Touch-tone dialing sequence
    const dtmfFreqs = [
      [697, 1209], [770, 1336], [852, 1477], 
      [941, 1336], [697, 1477], [770, 1209], [852, 1336]
    ];

    dtmfFreqs.forEach((freqs, i) => {
      const toneStart = now + (i * 0.12);
      const o1 = ctx.createOscillator();
      const o2 = ctx.createOscillator();
      const g = ctx.createGain();

      o1.type = 'sine';
      o2.type = 'sine';
      o1.frequency.value = freqs[0];
      o2.frequency.value = freqs[1];

      g.gain.setValueAtTime(0.2, toneStart);
      g.gain.setValueAtTime(0, toneStart + 0.08);

      o1.connect(g);
      o2.connect(g);
      g.connect(masterGain);

      o1.start(toneStart);
      o2.start(toneStart);
      o1.stop(toneStart + 0.08);
      o2.stop(toneStart + 0.08);
    });

    // Part B: Ringback tone at 1.1s
    const ringStart = now + 1.1;
    const r1 = ctx.createOscillator();
    const r2 = ctx.createOscillator();
    const rg = ctx.createGain();
    r1.frequency.value = 440;
    r2.frequency.value = 480;
    rg.gain.setValueAtTime(0.15, ringStart);
    rg.gain.setValueAtTime(0, ringStart + 0.6);
    r1.connect(rg);
    r2.connect(rg);
    rg.connect(masterGain);
    r1.start(ringStart);
    r2.start(ringStart);
    r1.stop(ringStart + 0.6);
    r2.stop(ringStart + 0.6);

    // Part C: The famous Modem Handshake Noise Burst (1.9s to 4.5s)
    const modemStart = now + 1.9;
    const bufferSize = ctx.sampleRate * 2.6;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, modemStart);
    filter.frequency.linearRampToValueAtTime(2400, modemStart + 1.2);
    filter.frequency.linearRampToValueAtTime(1200, modemStart + 2.4);
    filter.Q.value = 4.0;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, modemStart);
    noiseGain.gain.linearRampToValueAtTime(0.2, modemStart + 0.2);
    noiseGain.gain.setValueAtTime(0.18, modemStart + 2.0);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, modemStart + 2.6);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);

    whiteNoise.start(modemStart);
    whiteNoise.stop(modemStart + 2.6);

    // Dual carrier whine
    const carrier = ctx.createOscillator();
    const carrierGain = ctx.createGain();
    carrier.type = 'sawtooth';
    carrier.frequency.setValueAtTime(1200, modemStart);
    carrier.frequency.exponentialRampToValueAtTime(2100, modemStart + 1.0);
    carrierGain.gain.setValueAtTime(0.08, modemStart);
    carrierGain.gain.exponentialRampToValueAtTime(0.001, modemStart + 2.2);

    carrier.connect(carrierGain);
    carrierGain.connect(masterGain);
    carrier.start(modemStart);
    carrier.stop(modemStart + 2.3);

    const timer = setTimeout(onEnd, 4800);
    this.currentStopFn = () => {
      try {
        whiteNoise.stop();
        carrier.stop();
      } catch {}
      clearTimeout(timer);
    };
  }

  // 3. MSN Messenger Nudge
  private playMSNNudge(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    
    // Pulse 1
    const osc1 = ctx.createOscillator();
    const g1 = ctx.createGain();
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(140, now);
    osc1.frequency.exponentialRampToValueAtTime(60, now + 0.15);
    g1.gain.setValueAtTime(0.3, now);
    g1.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc1.connect(g1);
    g1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.15);

    // Pulse 2 (heavier rattle)
    const osc2 = ctx.createOscillator();
    const g2 = ctx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(160, now + 0.18);
    osc2.frequency.exponentialRampToValueAtTime(50, now + 0.45);
    g2.gain.setValueAtTime(0.35, now + 0.18);
    g2.gain.exponentialRampToValueAtTime(0.005, now + 0.45);
    osc2.connect(g2);
    g2.connect(ctx.destination);
    osc2.start(now + 0.18);
    osc2.stop(now + 0.45);

    const timer = setTimeout(onEnd, 600);
    this.currentStopFn = () => {
      try { osc1.stop(); osc2.stop(); } catch {}
      clearTimeout(timer);
    };
  }

  // 4. Skype Classic Call Ring
  private playSkypeRing(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    // Marimba note sequence: G#4 (415), B4 (493), E5 (659), G#5 (830)
    const notes = [415, 493, 659, 830, 659, 830];
    
    notes.forEach((freq, idx) => {
      const startTime = now + (idx * 0.16);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.28, startTime);
      gain.gain.exponentialRampToValueAtTime(0.005, startTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });

    const timer = setTimeout(onEnd, 2200);
    this.currentStopFn = () => {
      clearTimeout(timer);
    };
  }

  // 5. AIM Door Open / Close
  private playAIMDoor(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    
    // Wooden door creak + latch click
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(240, now + 0.35);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.35);
    gain.gain.setValueAtTime(0, now + 0.38);

    // Snap latch
    const snap = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snap.type = 'square';
    snap.frequency.setValueAtTime(800, now + 0.39);
    snap.frequency.exponentialRampToValueAtTime(100, now + 0.45);
    snapGain.gain.setValueAtTime(0.25, now + 0.39);
    snapGain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);
    snap.connect(snapGain);
    snapGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.38);
    snap.start(now + 0.39);
    snap.stop(now + 0.46);

    const timer = setTimeout(onEnd, 800);
    this.currentStopFn = () => {
      try { osc.stop(); snap.stop(); } catch {}
      clearTimeout(timer);
    };
  }

  // 6. Windows 95/98 Startup Chime
  private playWin95(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    // Ambient pad chord: Eb, Bb, Eb, G, Bb, C
    const freqs = [155.56, 233.08, 311.13, 392.00, 466.16, 523.25];

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + (idx * 0.08));

      gain.gain.setValueAtTime(0.01, now + (idx * 0.08));
      gain.gain.linearRampToValueAtTime(0.08, now + 0.6 + (idx * 0.08));
      gain.gain.exponentialRampToValueAtTime(0.001, now + 3.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + (idx * 0.08));
      osc.stop(now + 3.3);
    });

    const timer = setTimeout(onEnd, 3500);
    this.currentStopFn = () => {
      clearTimeout(timer);
    };
  }

  // 7. Club Penguin Dance Tune
  private playClubPenguin(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    // Fast 8-bit upbeat chiptune sequence: C5, E5, G5, A5, G5, E5, C5, D5
    const melody = [523, 659, 784, 880, 784, 659, 523, 587];

    melody.forEach((freq, idx) => {
      const noteTime = now + (idx * 0.15);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.12, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.005, noteTime + 0.13);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.14);
    });

    const timer = setTimeout(onEnd, 2000);
    this.currentStopFn = () => {
      clearTimeout(timer);
    };
  }

  // 8. Yahoo! Messenger Notification Ping
  private playYahooYodel(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    // Rising melodic triad: C5 (523Hz), E5 (659Hz), G5 (784Hz), C6 (1046Hz)
    const notes = [
      { freq: 523.25, time: 0, dur: 0.12 },
      { freq: 659.25, time: 0.12, dur: 0.12 },
      { freq: 783.99, time: 0.24, dur: 0.15 },
      { freq: 1046.50, time: 0.39, dur: 0.6 }
    ];

    const oscillators: OscillatorNode[] = [];

    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.freq, now + n.time);
      // Add slight playful frequency vibrato on highest note
      if (n.freq > 1000) {
        osc.frequency.linearRampToValueAtTime(n.freq * 1.03, now + n.time + 0.15);
        osc.frequency.linearRampToValueAtTime(n.freq * 0.98, now + n.time + 0.3);
        osc.frequency.linearRampToValueAtTime(n.freq, now + n.time + 0.5);
      }

      gain.gain.setValueAtTime(0.01, now + n.time);
      gain.gain.linearRampToValueAtTime(0.2, now + n.time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.time + n.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + n.time);
      osc.stop(now + n.time + n.dur);
      oscillators.push(osc);
    });

    const timer = setTimeout(onEnd, 1200);
    this.currentStopFn = () => {
      oscillators.forEach(o => { try { o.stop(); } catch {} });
      clearTimeout(timer);
    };
  }

  // 9. Apple iMac G3 PowerPC Chime
  private playMacStartup(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    // Resonant F# Major Chord: F#2, C#3, F#3, A#3, C#4, F#4, A#4
    const freqs = [92.50, 138.59, 185.00, 233.08, 277.18, 369.99, 466.16];
    const oscillators: OscillatorNode[] = [];

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx < 2 ? 'triangle' : 'sine';
      // Subtle natural analog detuning
      const detune = (idx % 2 === 0 ? 1 : -1) * (idx * 1.5);
      osc.frequency.setValueAtTime(freq + (detune * 0.1), now);

      const peakGain = idx < 3 ? 0.15 : 0.08;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(peakGain, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0005, now + 3.0);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 3.1);
      oscillators.push(osc);
    });

    const timer = setTimeout(onEnd, 3200);
    this.currentStopFn = () => {
      oscillators.forEach(o => { try { o.stop(); } catch {} });
      clearTimeout(timer);
    };
  }

  // 10. PlayStation 1 (PS1) Atmospheric Swell
  private playPS1Startup(ctx: AudioContext, onEnd: () => void) {
    const now = ctx.currentTime;
    const oscillators: OscillatorNode[] = [];

    // Deep sub-bass swell: 55Hz & 110Hz
    const bassOsc1 = ctx.createOscillator();
    const bassOsc2 = ctx.createOscillator();
    const bassGain = ctx.createGain();

    bassOsc1.type = 'sine';
    bassOsc1.frequency.setValueAtTime(55, now);
    bassOsc2.type = 'triangle';
    bassOsc2.frequency.setValueAtTime(110, now);

    bassGain.gain.setValueAtTime(0.01, now);
    bassGain.gain.linearRampToValueAtTime(0.25, now + 0.8);
    bassGain.gain.exponentialRampToValueAtTime(0.001, now + 3.6);

    bassOsc1.connect(bassGain);
    bassOsc2.connect(bassGain);
    bassGain.connect(ctx.destination);

    bassOsc1.start(now);
    bassOsc2.start(now);
    bassOsc1.stop(now + 3.7);
    bassOsc2.stop(now + 3.7);
    oscillators.push(bassOsc1, bassOsc2);

    // Ethereal crystal pad chord: 440Hz, 554.37Hz, 659.25Hz, 880Hz
    const padFreqs = [440, 554.37, 659.25, 880];
    padFreqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + 0.3);
      osc.frequency.linearRampToValueAtTime(freq * 1.005, now + 2.5);

      gain.gain.setValueAtTime(0.001, now + 0.3);
      gain.gain.linearRampToValueAtTime(0.06, now + 1.2 + (i * 0.1));
      gain.gain.exponentialRampToValueAtTime(0.0005, now + 3.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + 0.3);
      osc.stop(now + 3.7);
      oscillators.push(osc);
    });

    const timer = setTimeout(onEnd, 3800);
    this.currentStopFn = () => {
      oscillators.forEach(o => { try { o.stop(); } catch {} });
      clearTimeout(timer);
    };
  }

  private ambientNodes: { stop: () => void } | null = null;
  private isAmbientOn: boolean = false;

  public playMemorialChime(onEnd?: () => void): void {
    if (typeof window === 'undefined') return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Solfeggio 528Hz crystal singing bowl fundamental + overtone harmonics
      const freqs = [528, 1056, 1584, 2112];
      const gains = [0.22, 0.10, 0.04, 0.015];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq + (idx * 0.3), now + 3.5);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(gains[idx], now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.9);
      });

      if (onEnd) {
        setTimeout(onEnd, 3800);
      }
    } catch {
      if (onEnd) onEnd();
    }
  }

  public playKeyClick(): void {
    if (typeof window === 'undefined') return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'square';
      osc.frequency.setValueAtTime(1800 + Math.random() * 400, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.025);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2200, now);
      filter.Q.setValueAtTime(3.0, now);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch {}
  }

  public playTerminalPowerOn(): void {
    if (typeof window === 'undefined') return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // 1. High-frequency flyback coil whine
      const coilOsc = ctx.createOscillator();
      const coilGain = ctx.createGain();
      coilOsc.type = 'sine';
      coilOsc.frequency.setValueAtTime(12500, now);
      coilGain.gain.setValueAtTime(0.0001, now);
      coilGain.gain.linearRampToValueAtTime(0.012, now + 0.4);
      coilGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      coilOsc.connect(coilGain);
      coilGain.connect(ctx.destination);
      coilOsc.start(now);
      coilOsc.stop(now + 1.3);

      // 2. Deep degauss thud
      const thudOsc = ctx.createOscillator();
      const thudGain = ctx.createGain();
      thudOsc.type = 'triangle';
      thudOsc.frequency.setValueAtTime(80, now + 0.05);
      thudOsc.frequency.exponentialRampToValueAtTime(35, now + 0.6);
      thudGain.gain.setValueAtTime(0.001, now);
      thudGain.gain.linearRampToValueAtTime(0.18, now + 0.08);
      thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
      thudOsc.connect(thudGain);
      thudGain.connect(ctx.destination);
      thudOsc.start(now + 0.05);
      thudOsc.stop(now + 0.75);
    } catch {}
  }

  public startAmbientNecropolis(): void {
    if (typeof window === 'undefined' || this.isAmbientOn) return;
    try {
      const ctx = this.getContext();
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.035, ctx.currentTime + 2.0);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start(ctx.currentTime);
      this.isAmbientOn = true;

      this.ambientNodes = {
        stop: () => {
          try {
            gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.0);
            setTimeout(() => {
              try { whiteNoise.stop(); } catch {}
            }, 1050);
          } catch {}
          this.isAmbientOn = false;
        }
      };
    } catch {}
  }

  public stopAmbientNecropolis(): void {
    if (this.ambientNodes) {
      this.ambientNodes.stop();
      this.ambientNodes = null;
    }
    this.isAmbientOn = false;
  }

  public toggleAmbientNecropolis(): boolean {
    if (this.isAmbientOn) {
      this.stopAmbientNecropolis();
      return false;
    } else {
      this.startAmbientNecropolis();
      return true;
    }
  }

  public isAmbientActive(): boolean {
    return this.isAmbientOn;
  }
}

export const relicAudio = new RelicAudioSynthesizer();
