const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom: {
          bg: "var(--bg)",
          accent: "var(--accent)",
          muted: "var(--muted)",
          mutedDark: "var(--muted-dark)",
          primary: "var(--primary)",
          text: "var(--text)",
          highlight: "var(--highlight)",
          highlightHover: "var(--highlight-hover)",
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.custom.muted"),
            letterSpacing: 0.3,
            h1: {
              color: theme("colors.custom.text"),
            },
            h2: {
              color: theme("colors.custom.text"),
              size: "2xl",
            },
            h3: {
              color: theme("colors.custom.text"),
            },
            a: {
              color: theme("colors.custom.text"),
              "&:hover": {
                color: theme("colors.custom.primary"),
              },
            },
            blockquote: {
              color: theme("colors.custom.text"),
            },
            code: {
              color: "white",
              background: theme("colors.gray.700"),
              padding: 5,
              borderRadius: 4,
              fontWeight: 400,
              fontFamily: "monospace",
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ["inter", "sans-serif"],
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
