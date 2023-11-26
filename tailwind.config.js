/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '5': '5',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};