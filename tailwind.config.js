const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
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
        128: "32rem",
        192: "48rem",
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({addUtilities}) {
      const newUtilities = {
        ".mask-repeat-none": {
          "mask-repeat": "no-repeat",
        },
        ".mask-position-center": {
          "mask-position": "center",
        },
        ".mask-size-sm": {
          "mask-size": "20rem",
        },
        ".mask-size-md": {
          "mask-size": "24rem",
        },
        ".mask-size-lg": {
          "mask-size": "32rem",
        },
      };

      addUtilities(newUtilities, {variants: ["responsive"]});
    }),
  ],
};
