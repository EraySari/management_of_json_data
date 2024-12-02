/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      colors: {
        nature: "#F5F5F7",
        nature1: "#EEEFF0",
        nature2: "#5A6C57",
        nature3: "#525B44",
      },
    },
  },
  plugins: [],
};
