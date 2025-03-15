/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
          // Tesla colors
          tesla: "#00BFFF",
          electric: "#0066CC",
          lightning: "#87CEFA",
        },
        violet: {
          300: "#5724ff",
          // Beelzebub colors
          demon: "#800020",
          dark: "#4A0404",
          evil: "#660066",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
        ragnarok: {
          primary: "#D32F2F",
          secondary: "#303F9F",
          dark: "#212121",
          light: "#F5F5F5",
          accent: "#FFC107",
        },
      },
    },
  },
  plugins: [],
};
