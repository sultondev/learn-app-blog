/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{tsx,jsx}"],
  theme: {
    screens: {
      "ex-sm": "320px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      animation: {
        "hide-menu": "hideNavbar 0.3s linear",
        "show-menu": "showNavbar 0.3s linear ",
      },
      keyframes: {
        hideNavbar: {
          "0%": { left: "0", opacity: "1" },
          "100%": { left: "-50%", opacity: "0" },
        },
        showNavbar: {
          "0%": { left: "-50%", opacity: "0" },
          "100%": { left: "0", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
