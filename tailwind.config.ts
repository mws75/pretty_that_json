import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      color: {
        sand_dollar: {
          DEFAULT: "#e5ddc8",
        },
        teal: {
          DEFAULT: "#01949A",
        },
        navy_blue: {
          DEFAULT: "#004369",
        },
        red: {
          DEFAULT: "#DB1F48",
        },
        blue: {
          DEFAULT: "#01949A",
        },
        green: {
          DEFAULT: "#0F9D58",
        },
        yellow: {
          DEFAULT: "#FFCB05",
        },
        orange: {
          DEFAULT: "#F97316",
        },
        purple: {
          DEFAULT: "#9333EA",
        },
        pink: {
          DEFAULT: "#EC4899",
        },
        gray: {
          DEFAULT: "#9CA3AF",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        black: {
          DEFAULT: "#000000",
        },
        transparent: {
          DEFAULT: "transparent",
        },
        current: "currentColor",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
