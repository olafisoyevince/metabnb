/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#A02279",
      white: "#FFFFFF",
      faintGray: "rgba(67, 67, 67, 1)",
      lightGray: "rgba(163, 163, 163, 1)",
      black: "#000000",
    },
  },
  plugins: [],
};
