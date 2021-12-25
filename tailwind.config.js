module.exports = {
  content: [],
  theme: {
    fontFamily: {
      primary: ["'Inter'", "sans-serif"],
      cursive: ["'Dancing Script'", "cursive"],
    },
    extend: {
      colors: {
        primary: {
          light: "#ff7ce5",
          DEFAULT: "#F64E54",
          dark: "#F5363C",
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
