// tailwind.config.js

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#f8fafc",
        },
        surface: {
          DEFAULT: "#f8fafc",
          elevated: "#ffffff",
          muted: "#f1f5f9",
        },
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(15, 23, 42, 0.08)",
        card: "0 4px 24px -4px rgba(15, 23, 42, 0.07), 0 0 0 1px rgba(15, 23, 42, 0.04)",
        "card-hover":
          "0 12px 40px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(99, 102, 241, 0.06)",
        glow: "0 0 0 1px rgba(99, 102, 241, 0.15), 0 20px 50px -20px rgba(99, 102, 241, 0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.2s ease-in-out infinite",
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgb(148 163 184 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.06) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(ellipse 80% 60% at 50% -30%, rgb(99 102 241 / 0.12), transparent)",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, rgb(99 102 241 / 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgb(16 185 129 / 0.06) 0px, transparent 45%), radial-gradient(at 0% 50%, rgb(59 130 246 / 0.06) 0px, transparent 40%)",
      },
      backgroundSize: {
        shimmer: "200% 100%",
      },
    },
  },
  plugins: [],
};
