import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        ink: {
          950: "#FFFFFF",
          900: "#FAF9FC",
          800: "#F1EDF7",
          700: "#E8E3EF",
          600: "#D7CFDF",
          500: "#B4A8C4",
        },
        mist: {
          400: "#71677E",
          300: "#61576D",
          200: "#443B50",
          100: "#2C2338",
          50: "#1D1429",
        },
        signal: {
          DEFAULT: "#7928CA",
          600: "#6020A6",
          400: "#9252D0",
          300: "#7130B5",
        },
        current2: {
          DEFAULT: "#7130B5",
        },
      },
      fontFamily: {
        display: [
          "Segoe UI Variable Display",
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: [
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "JetBrains Mono",
          "Consolas",
          "Menlo",
          "monospace",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(140,70,220,0.06), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        blink: "blink 1s step-start infinite",
        scan: "scan 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

