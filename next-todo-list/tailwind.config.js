/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      color1: "#27e64d",
      color2: "#278de6",
      color3: "#9a63ff",
      color4: "#9a63ff",
      color5: "#ff5297",
      color6: "#f0353b",
      color7: "#f08635",
      color8: "#fff53b",
      color9: "#537199",
      color10: "#eca1ff",
      color11: "#aeffa1",
      color12: "#aeffa1",
    },
    fontFamily: {
      notoStans: ["var(--font-noto-sans)"],
    },
    extend: {},
  },
  plugins: [],
}
