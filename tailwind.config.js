/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3b82f6",
          dark: "#2563eb"
        },
        background: {
          light: "#ffffff",
          dark: "#0a192f" // Changed to dark blue from the original dark color
        },
        text: {
          light: "#333333",
          dark: "#e0e0e0"
        }
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideIn: "slideIn 0.5s ease-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      }
    },
  },
  plugins: []
}