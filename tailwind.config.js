module.exports = {
  content: [],
  theme: {
    fontFamily: {
      primary: ["'Poppins'", "sans-serif"],
      cursive: ["'Dancing Script'", "cursive"],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {
      colors: {
        primary: {
          light: "#ff7ce5",
          DEFAULT: "#F3712D",
          dark: "#E25F1A",
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["group", "hover", "focus", "group-hover"],
    },
  },

  plugins: [],
}
