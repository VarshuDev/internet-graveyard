"use client";

export type AmbientChannelId = 'dialup' | 'crt' | 'storm' | 'keyboard' | 'tape';

export interface ChannelConfig {
  id: AmbientChannelId;
  name: string;
  description: string;
  volume: number; // 0.0 - 1.0
  active: boolean;
  color: string;
}

export interface AmbientPreset {
  id: string;
  name: string;
  description: string;
  channels: Record<AmbientChannelId, number>;
}

export const AMBIENT_PRESETS: AmbientPreset[] = [
  {
    id: 'cyberpunk_storm',
    name: 'Cyberpunk Storm',
    description: 'Cathode tube CRT hum and distant rain punctuated by carrier signal drones.',
    channels: {
      dialup: 0.35,
      crt: 0.5,
      storm: 0.75,
      keyboard: 0.0,
      tape: 0.3
    }
  },
  {
    id: 'midnight_cubicle',
    name: 'Midnight Cubicle 1999',
    description: 'Buckling spring keyboard clicks against analog tape hiss and fluorescent glow.',
    channels: {
      dialup: 0.15,
      crt: 0.6,
      storm: 0.0,
      keyboard: 0.7,
      tape: 0.45
    }
  },
  {
    id: 'ghost_in_the_wire',
    name: 'Ghost in the Wire',
    description: 'Haunting telephone line carriers, modem handshakes, and analog frequency noise.',
    channels: {
      dialup: 0.7,
      crt: 0.3,
      storm: 0.2,
      keyboard: 0.0,
      tape: 0.6
    }
  },
  {
    id: 'pure_crt_drone',
    name: 'Pure CRT Drone',
    description: 'The hypnotic, nostalgic 15kHz flyback transformer hum and 60Hz cathode warmth.',
    channels: {
      dialup: 0.0,
      crt: 0.85,
      storm: 0.0,
      keyboard: 0.0,
      tape: 0.2
    }
  }
];

class AmbientRadioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying: boolean = false;
  private masterVolume: number = 0.6;
  private channelGains: Map<AmbientChannelId, GainNode> = new Map();
  private channelNodes: Map<AmbientChannelId, { stop: () => void }> = new Map();
  private keyboardTimer: number | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();

  public channels: ChannelConfig[] = [
    {
      id: 'crt',
      name: '15kHz CRT Hum',
      description: 'Flyback transformer & 60Hz cathode line warmth',
      volume: 0.6,
      active: true,
      color: 'text-cyan-400'
    },
    {
      id: 'storm',
      name: 'Atmospheric Rain',
      description: 'Resonant filtered noise precipitation & low rumble',
      volume: 0.5,
      active: true,
      color: 'text-blue-400'
    },
    {
      id: 'dialup',
      name: '56k Carrier Drone',
      description: 'Harmonic V.90 telephone modulation telemetry',
      volume: 0.35,
      active: true,
      color: 'text-amber-400'
    },
    {
      id: 'tape',
      name: 'Analog Cassette Hiss',
      description: 'Magnetic tape floor noise with subtle wow & flutter',
      volume: 0.3,
      active: true,
      color: 'text-purple-400'
    },
    {
      id: 'keyboard',
      name: 'Buckling Spring Typing',
      description: 'Mechanical IBM Model M keystroke cadence',
      volume: 0.4,
      active: false,
      color: 'text-emerald-400'
    }
  ];

  private getAudioContext(): AudioContext | null {
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

  public subscribe(cb: (playing: boolean) => void): () => void {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private notify(): void {
    this.listeners.forEach(cb => cb(this.isPlaying));
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getMasterVolume(): number {
    return this.masterVolume;
  }

  public setMasterVolume(vol: number): void {
    this.masterVolume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
  }

  public setChannelVolume(id: AmbientChannelId, vol: number): void {
    const ch = this.channels.find(c => c.id === id);
    if (!ch) return;
    ch.volume = Math.max(0, Math.min(1, vol));
    const gainNode = this.channelGains.get(id);
    if (gainNode && this.ctx) {
      gainNode.gain.setValueAtTime(ch.active ? ch.volume : 0, this.ctx.currentTime);
    }
  }

  public toggleChannel(id: AmbientChannelId): boolean {
    const ch = this.channels.find(c => c.id === id);
    if (!ch) return false;
    ch.active = !ch.active;
    const gainNode = this.channelGains.get(id);
    if (gainNode && this.ctx) {
      gainNode.gain.setValueAtTime(ch.active ? ch.volume : 0, this.ctx.currentTime);
    }
    return ch.active;
  }

  public applyPreset(presetId: string): void {
    const preset = AMBIENT_PRESETS.find(p => p.id === presetId);
    if (!preset) return;

    this.channels.forEach(ch => {
      const targetVol = preset.channels[ch.id] ?? 0;
      ch.volume = targetVol;
      ch.active = targetVol > 0.01;
      const gainNode = this.channelGains.get(ch.id);
      if (gainNode && this.ctx) {
        gainNode.gain.setValueAtTime(ch.active ? ch.volume : 0, this.ctx.currentTime);
      }
    });

    if (!this.isPlaying) {
      this.start();
    }
  }

  public async start(): Promise<void> {
    const ctx = this.getAudioContext();
    if (!ctx) return;
    if (this.isPlaying) return;

    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    this.masterGain = ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.masterVolume, ctx.currentTime);
    this.masterGain.connect(ctx.destination);

    // Initialize individual channels
    this.channels.forEach(ch => {
      const chGain = ctx.createGain();
      chGain.gain.setValueAtTime(ch.active ? ch.volume : 0, ctx.currentTime);
      chGain.connect(this.masterGain!);
      this.channelGains.set(ch.id, chGain);

      // Start synthesizer for this channel
      this.startChannelGenerator(ch.id, chGain);
    });

    this.isPlaying = true;
    this.notify();
  }

  public stop(): void {
    if (!this.isPlaying) return;

    this.channelNodes.forEach(node => {
      try {
        node.stop();
      } catch {}
    });
    this.channelNodes.clear();
    this.channelGains.clear();

    if (this.keyboardTimer !== null) {
      window.clearInterval(this.keyboardTimer);
      this.keyboardTimer = null;
    }

    this.isPlaying = false;
    this.notify();
  }

  public toggle(): void {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }

  // Synthesis generators for each atmospheric element
  private startChannelGenerator(id: AmbientChannelId, targetGain: GainNode): void {
    const ctx = this.ctx;
    if (!ctx) return;

    switch (id) {
      case 'crt': {
        // CRT: Ultra-high flyback whistle (15,734 Hz) + 60Hz cathode hum
        const oscHigh = ctx.createOscillator();
        const oscLow = ctx.createOscillator();
        const highGain = ctx.createGain();
        const lowGain = ctx.createGain();

        oscHigh.type = 'sine';
        oscHigh.frequency.setValueAtTime(15734, ctx.currentTime);
        highGain.gain.setValueAtTime(0.04, ctx.currentTime); // gentle flyback Whistle

        oscLow.type = 'triangle';
        oscLow.frequency.setValueAtTime(60, ctx.currentTime);
        lowGain.gain.setValueAtTime(0.18, ctx.currentTime); // warm tube hum

        oscHigh.connect(highGain);
        oscLow.connect(lowGain);
        highGain.connect(targetGain);
        lowGain.connect(targetGain);

        oscHigh.start();
        oscLow.start();

        this.channelNodes.set(id, {
          stop: () => {
            try {
              oscHigh.stop();
              oscLow.stop();
            } catch {}
          }
        });
        break;
      }

      case 'dialup': {
        // Modulated carrier frequencies (980Hz, 1650Hz, 2100Hz) with subtle tremolo
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const osc3 = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const carrierGain = ctx.createGain();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(980, ctx.currentTime);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1650, ctx.currentTime);

        osc3.type = 'sawtooth';
        osc3.frequency.setValueAtTime(2100, ctx.currentTime);

        // LFO for periodic packet modulation
        lfo.frequency.setValueAtTime(3.2, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);
        lfo.connect(lfoGain);

        carrierGain.gain.setValueAtTime(0.07, ctx.currentTime);
        lfoGain.connect(carrierGain.gain);

        osc1.connect(carrierGain);
        osc2.connect(carrierGain);
        osc3.connect(carrierGain);
        carrierGain.connect(targetGain);

        osc1.start();
        osc2.start();
        osc3.start();
        lfo.start();

        this.channelNodes.set(id, {
          stop: () => {
            try {
              osc1.stop();
              osc2.stop();
              osc3.stop();
              lfo.stop();
            } catch {}
          }
        });
        break;
      }

      case 'storm': {
        // Filtered pink-noise precipitation buffer
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
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, ctx.currentTime);
        filter.Q.setValueAtTime(2.0, ctx.currentTime);

        const stormGain = ctx.createGain();
        stormGain.gain.setValueAtTime(0.25, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(stormGain);
        stormGain.connect(targetGain);

        whiteNoise.start();

        this.channelNodes.set(id, {
          stop: () => {
            try {
              whiteNoise.stop();
            } catch {}
          }
        });
        break;
      }

      case 'tape': {
        // High-pass hiss + subtle tape flutter
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(3200, ctx.currentTime);

        const hissGain = ctx.createGain();
        hissGain.gain.setValueAtTime(0.08, ctx.currentTime);

        noise.connect(filter);
        filter.connect(hissGain);
        hissGain.connect(targetGain);

        noise.start();

        this.channelNodes.set(id, {
          stop: () => {
            try {
              noise.stop();
            } catch {}
          }
        });
        break;
      }

      case 'keyboard': {
        // Keystroke clicks triggered rhythmically
        const triggerClick = () => {
          if (!this.isPlaying || !this.ctx) return;
          const ch = this.channels.find(c => c.id === 'keyboard');
          if (!ch || !ch.active) return;

          try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const freq = 1200 + Math.random() * 600;

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.035);

            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);

            osc.connect(gain);
            gain.connect(targetGain);

            osc.start(this.ctx.currentTime);
            osc.stop(this.ctx.currentTime + 0.035);
          } catch {}
        };

        const scheduleNext = () => {
          triggerClick();
          const delay = 180 + Math.random() * 320;
          this.keyboardTimer = window.setTimeout(scheduleNext, delay);
        };

        scheduleNext();

        this.channelNodes.set(id, {
          stop: () => {
            if (this.keyboardTimer !== null) {
              window.clearTimeout(this.keyboardTimer);
              this.keyboardTimer = null;
            }
          }
        });
        break;
      }
    }
  }
}

export const ambientRadio = new AmbientRadioEngine();
