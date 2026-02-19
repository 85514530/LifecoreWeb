/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#34C759", // healthy green
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F0F9F4", // mint green
          foreground: "#1A1A1A",
        },
        background: "#F0F9F4",
        foreground: "#1A1A1A",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1A1A1A",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#f4f4f5",
          foreground: "#71717a",
        },
        accent: {
          DEFAULT: "#34C759",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        border: "#e4e4e7",
        input: "#e4e4e7",
        ring: "#34C759",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
    },
  },
  plugins: [],
}
