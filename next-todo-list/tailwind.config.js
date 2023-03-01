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
      primary: "#602bff",
      admin: "#ff9d26",
      color1: "#27e64d",
      color2: "#1962ff",
      color3: "#7a38ff",
      color4: "#ff3651",
      color5: "#ff5297",
      color6: "#f0353b",
      color7: "#f08635",
      color8: "#fff53b",
      color9: "#537199",
      color10: "#eca1ff",
      color11: "#aeffa1",
      color12: "#aeffa1",
      cardBackground: "#2b2d36",
      cardBackgroundHover: "#444757",
      dark: "#1b1b21",
      gray: "#d8dcec",
      background: "#0c0c0f",
    },
    fontFamily: {
      notoStans: ["var(--font-noto-sans)"],
    },
    extend: {},
  },
  plugins: [],
}
