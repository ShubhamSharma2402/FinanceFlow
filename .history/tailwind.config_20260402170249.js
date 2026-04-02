// tailwind.config.js

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#6366f1",
        darkbg: "#0f0f14"
      },
      boxShadow: {
        soft: "0px 8px 20px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};