module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  media: false,
  theme: {
    screens: {
      sm: "100px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        black: {
          500: "#000000",
        },
        green: {
          brand: "#77FF94",
        },
      },
    },
  },
  plugins: [],
};
