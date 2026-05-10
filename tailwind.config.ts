import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17211d",
        moss: "#566b5f",
        linen: "#f8f4ee",
        clay: "#c87955",
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(23, 33, 29, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
