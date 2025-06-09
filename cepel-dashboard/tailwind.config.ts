import { type Config } from "tailwindcss";

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
        resumeGreenDark: "#89CFA0",
        resumeOrange: "#FFE9C7",
        resumeOrangeDark: "#D9B687",
        resumeRed: "#FFD6D6",
        resumeRedDark: "#D19A9A",
        resumeYellow: "#FFFBC4",
        resumeYellowDark: "#D9D38A",
        grayDark: "#A3A3A3",
        resumeBlue: "#C4F3FF",
        ResumeBlueDark: "#8AC5D3"
        
      },
    },
  },
  plugins: [],
};

export default config;
