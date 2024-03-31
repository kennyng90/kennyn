/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,svelte,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      fontSize: {
        base: "18px",
        lg: "22px",
        xl: "26px",
        "2xl": "30px",
        "3xl": "32px",
        "4xl": "38px",
        "5xl": "40px",
        "6xl": "50px",
      },
      animation: {
        type: "type 1.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "95%": { width: "20ch" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
