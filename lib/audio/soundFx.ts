// Web Audio API Synthesizer Engine for Retro-Futuristic Sound Effects
// Pure in-browser synthesis with zero external audio assets required.

class SoundFxEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const storedMute = localStorage.getItem('graveyard_sound_muted');
      this.isMuted = storedMute === 'true';
    }
  }

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('graveyard_sound_muted', String(this.isMuted));
    }
    return this.isMuted;
  }

  public setMute(muted: boolean): void {
    this.isMuted = muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('graveyard_sound_muted', String(muted));
    }
  }

  // 1. Tactile mechanical key click (used for button hovers and toggles)
  public playClick(freq = 800): void {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playKeyClick(): void {
    this.playClick(750);
  }

  // 2. Candle flame lighting whoosh (warm harmonic noise-like burst)
  public playCandle(): void {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.15);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // fallback
    }
  }

  public playSingingBowl(): void {
    this.playCandle();
  }

  // 3. Cathedral Death Knell Bell (resonant bronze funeral bell synthesis)
  public playBell(): void {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const harmonics = [
        { freq: 220, gainVal: 0.22, decay: 2.2 },   // Fundamental bass chime
        { freq: 440, gainVal: 0.16, decay: 1.8 },   // Octave strike
        { freq: 548, gainVal: 0.09, decay: 1.2 },   // Minor tierce
        { freq: 660, gainVal: 0.07, decay: 0.9 },   // Quint
        { freq: 880, gainVal: 0.04, decay: 0.6 },   // Nominal
      ];

      harmonics.forEach(({ freq, gainVal, decay }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(gainVal, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + decay);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + decay);
      });
    } catch {
      // fallback
    }
  }

  // 4. Dial-Up / Modem handshake burst (nostalgic Web 1.0 packet chirp)
  public playModemBeep(): void {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const frequencies = [980, 1300, 1650, 2100, 1850];
      const duration = 0.05;

      frequencies.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, ctx.currentTime + i * duration);

        gain.gain.setValueAtTime(0.04, ctx.currentTime + i * duration);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (i + 1) * duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + i * duration);
        osc.stop(ctx.currentTime + (i + 1) * duration);
      });
    } catch {
      // fallback
    }
  }

  // 5. Success / Scan telemetry ping
  public playTelemetry(): void {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08); // A5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // fallback
    }
  }

  public playChime(): void {
    this.playTelemetry();
  }
}

export const soundFx = new SoundFxEngine();
