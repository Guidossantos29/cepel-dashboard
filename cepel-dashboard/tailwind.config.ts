import { type Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9FAFB",
        resumeGreen: "#C4FFE1",
        resumeOrange: "#FFE9C7",
        resumeRed: "#FFD6D6",
        resumeYellow: "#FFFBC4",
        resumeBlue: "#C4F3FF"
      },
    },
  },
  plugins: [],
};

export default config;
