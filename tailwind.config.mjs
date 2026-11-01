/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        graveyard: {
          950: "#040507",
          900: "#07080b",
          850: "#0b0d13",
          800: "#10121a",
          750: "#151823",
          700: "#1c202e",
          600: "#272c3d",
          500: "#4b5368",
          400: "#7b849b",
          300: "#a9b1c6",
          200: "#d1d6e4",
          100: "#f1f3f9",
        },
        tombstone: {
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(255, 255, 255, 0.20)",
          surface: "rgba(13, 15, 21, 0.85)",
          elevated: "rgba(19, 22, 34, 0.90)",
        },
        status: {
          active: "#10b981",
          atRisk: "#f59e0b",
          abandoned: "#f97316",
          dead: "#ef4444",
          offline: "#6b7280",
          zombie: "#a855f7",
        },
        crt: {
          green: "#22c55e",
          phosphor: "#39ff14",
          amber: "#f59e0b",
          cyan: "#06b6d4",
          dim: "#052e16",
        },
        win95: {
          bg: "#c0c0c0",
          light: "#ffffff",
          dark: "#808080",
          darkest: "#000000",
          navy: "#000080",
          activeTitle: "linear-gradient(90deg, #000080, #1084d0)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      boxShadow: {
        "bevel-outset": "inset 1px 1px 0px rgba(255,255,255,0.25), inset -1px -1px 0px rgba(0,0,0,0.7)",
        "bevel-inset": "inset 1px 1px 0px rgba(0,0,0,0.8), inset -1px -1px 0px rgba(255,255,255,0.15)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        "glass-elevated": "0 16px 40px 0 rgba(0, 0, 0, 0.6)",
        "crt-glow": "0 0 15px rgba(34, 197, 94, 0.45)",
        "amber-glow": "0 0 18px rgba(245, 158, 11, 0.35)",
        "crimson-glow": "0 0 20px rgba(239, 68, 68, 0.35)",
        "zombie-glow": "0 0 20px rgba(168, 85, 247, 0.35)",
        "emerald-glow": "0 0 20px rgba(16, 185, 129, 0.35)",
      },
      backgroundImage: {
        "radial-fog": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.12), rgba(255, 255, 255, 0))",
        "radial-ambient": "radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.08) 0%, transparent 70%)",
        "grave-glow": "radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.12) 0%, transparent 60%)",
        "archive-grid": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "crt-scanlines": "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.04))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scanline": "scanline 8s linear infinite",
        "flicker": "flicker 3s infinite",
        "cursor-blink": "blink 1s step-start infinite",
        "candle-flicker": "flame 2s ease-in-out infinite alternate",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "70%": { opacity: "0.95" },
          "85%": { opacity: "0.75" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        flame: {
          "0%": { transform: "scale(1) rotate(-1deg)", opacity: "0.9" },
          "25%": { transform: "scale(1.05) rotate(1deg)", opacity: "1" },
          "50%": { transform: "scale(0.95) rotate(-0.5deg)", opacity: "0.85" },
          "75%": { transform: "scale(1.03) rotate(0.5deg)", opacity: "0.98" },
          "100%": { transform: "scale(1) rotate(-1deg)", opacity: "0.9" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
