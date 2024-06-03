/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        medium: "#606c38",
        dark: "#283618",
        light: "#fefae0",
        major: "#dda15e",
        minor: "#bc6c25",
        danger: "#81a28b",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        serif: ["Georgia", "Times New Roman", "serif"],
        titles: ["Orbitron", "serif"],
      },
      fontSize: {
        base: "16px",
      },
    },
  },
  plugins: [],
};
