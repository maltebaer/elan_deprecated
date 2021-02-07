module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        container: "1fr 5rem",
        content: "1fr 2fr",
      },
      gridTemplateRows: {
        container: "5rem 1fr",
      },
      listStyleType: {
        square: "square",
      },
      spacing: {
        0.25: "0.0625rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
