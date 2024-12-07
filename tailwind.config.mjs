/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    screens: {
      sm: "512px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        text: {
          base: "#495057",
          accent: "#1D3FED",
          form: "#111630",
          placeholder: "#666F75",
        },
        button: {
          primary: "#5570F1",
          secondary: "#dee2e6",
          "primary-hover": "#667ef2",
        },
        surface: {
          DEFAULT: "#EEF1FE",
          "form-from": "#99a9f7",
          "form-to": "#889bf5",
          border: "#e5e7eb",
          accent: "#FFCC91",
        },
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        sm: "1.025rem",
        base: "1.063rem",
        lg: "1.125rem",
        xl: "1.313rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      letterSpacing: {
        tightest: "-.05em",
        tighter: "-.025em",
        tight: "0",
        normal: ".025em",
        wide: ".05em",
        wider: ".07em",
        widest: ".16em",
      },
      boxShadow: {
        custom1: "0 1px 0 #495057",
        custom2: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.15)",
        custom3: "0 1.2rem 3.2rem rgba(0, 0, 0, 0.03)",
        "secondary-hover": "inset 0 0 0 3px #dee2e6",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
