/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, natural palette inspired by Sapa rice fields and mountain forests
        cream: "#FFF9F2", // page background
        ink: "#2D2D2D", // primary text
        rice: "#3B6B4A", // deep forest green (primary brand)
        gold: "#C97B5A", // muted terracotta accent
        whatsapp: "#25D366", // WhatsApp brand green
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(45, 45, 45, 0.15)",
        card: "0 8px 24px -10px rgba(45, 45, 45, 0.12)",
        lift: "0 20px 40px -16px rgba(45, 45, 45, 0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        // Subtle shadow pulse: a soft green ring expands gently via
        // box-shadow spread. Nothing is scaled, so the button keeps its
        // fixed size — only the surrounding shadow breathes.
        "whatsapp-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.45)" },
          "70%": { boxShadow: "0 0 0 12px rgba(37, 211, 102, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
      },
      animation: {
        "whatsapp-pulse": "whatsapp-pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
