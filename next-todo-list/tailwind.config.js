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
      admin: "#ffaa17",
      collaborator: "#27e64d",
      guest: "#444757",
      cardBackground: "#2b2d36",
      cardBackgroundHover: "#444757",
      dark: "#1b1b21",
      gray: "#d8dcec",
      background: "#0c0c0f",
      danger: "#ff193c"
    },
    fontFamily: {
      notoStans: ["var(--font-noto-sans)"],
    },
    extend: {},
  },
  plugins: [],
}
