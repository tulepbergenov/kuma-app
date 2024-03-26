import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./_src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-clr-dark": "#141414",
        "app-clr-light": "#F3F3F3",
        "app-clr-primary": "#3b82f6",
        "app-clr-error": "#EF4444",
      },
      fontFamily: {
        "app-fm-inter": ["var(--app-fm-inter)", "system-ui"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("tailwindcss-text-rendering")],
};

export default config;
