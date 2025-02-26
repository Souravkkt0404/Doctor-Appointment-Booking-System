const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
    "./layouts/**/*.{js,ts,jsx}", // Ensure layouts are scanned
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#3B81F6",
        text: {
          DEFAULT: "#1F2937",
          light: "#6C7281",
        },
        light: {
          DEFAULT: "#FAFBFC",
          lighter: "#F3F4F6",
        },
      },
    },
  },
  plugins: [],
};
