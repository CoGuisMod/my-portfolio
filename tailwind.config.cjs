/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        "clr-primary-one": "#282a36",
        "clr-primary-two": "#44475a",
        "clr-primary-three": "#f8f8f2",
        "clr-secondary-one": "#bd93f9",
        "clr-secondary-two": "#8be9fd",
        "clr-thertiary-one": "#50fa7b",
        "clr-thertiary-two": "#f1fa8c",
        "clr-thertiary-three": "#ff5555",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "inner-custom": "inset 0 4rem 1rem 1rem rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
