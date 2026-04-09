/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        brand: {
          bg:        "#0f172a", // slate-900 – huvudbakgrund
          surface:   "#1e293b", // slate-800 – kort/sektioner
          border:    "#334155", // slate-700 – kanter
          text:      "#f8fafc", // slate-50  – rubriker
          muted:     "#94a3b8", // slate-400 – brödtext
          accent:    "#3b82f6", // blue-500  – knappar/länkar
          "accent-hover": "#2563eb", // blue-600
        },
      },
    },
  },
  plugins: [],
}

