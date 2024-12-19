/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      background: "var(--background)",
      border: "var(--border)",
      card: "var(--card)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      cta: "var(--cta)",
      "cta-active": "var(--cta-active)",
      "cta-text": "var(--cta-text)",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
