/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        major: ["Major Mono Display", "mono"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
