/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E3FFE6",
        secondary: "#FEF9C3",
        hover_secondary: "#F4F2DF",
        orange: "#F4E8E8",
        offOrange: "#FEE2E2",
        blue: "#0EA5E9",
        offBlue: "#EFF6FF",
        hover_offBlue: "#DFE5ED",
        green: "#66D78F",
        offGreen: "#E7F3EA",
        dark: "#0F172A",
        white: "#FFFFFF",
        offWhite: "#F7F7F9",
        red: "#EF4444",
        yellow: "#FBBF24",
        violet: "#F3E8FF",
        bgWhite: "#F8FAFC ",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: false,
};
