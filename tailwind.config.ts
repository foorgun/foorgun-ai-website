import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0C0C0C",
        surface: "#141414",
        "surface-2": "#1C1C1C",
        accent: "#C4521A",
        white: "#F5F3EE",
        "white-mid": "rgba(245,243,238,0.6)",
        "white-muted": "rgba(245,243,238,0.25)",
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        // Both serif and sans now use Plus Jakarta Sans
        serif: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "marquee-rev": "marquee-rev 45s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
