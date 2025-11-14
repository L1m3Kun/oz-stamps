/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#C478FF",
          DEFAULT: "#2196F3",
          dark: "#984BFF",
          100: "#F3E8FF",
          200: "#E3C8FF",
          300: "#D3A5FF",
          400: "#C478FF",
          500: "#A46CFF",
          600: "#9256FF",
          700: "#8445FF",
          800: "#7A38FF",
          900: "#984BFF",
        },
        obsidian: "#984BFF",
        gray: {
          100: "#F5F5F5",
          200: "#E0E0E0",
          300: "#C2C2C2",
          400: "#9E9E9E",
          500: "#7E7E7E",
          600: "#626262",
          700: "#515151",
          800: "#3B3B3B",
          900: "#222222",
        },
      },
    },
  },
  plugins: [],
};
