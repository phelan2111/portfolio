/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary_light": "#fbf8f3",
        "primary_dark": "#232323",
        "primary_dark-10": "#2B2B2B",
        "secondary": "#1AACAC",
        "neutral": "#A9A9A9",
        "error": "#EE4E4E"
      },
      boxShadow: {
        error: "0px 0px 1px 1px",
        white: "0px 0px 1px 1px",
        insetAllSide: '0 0 10px 0 rgba(0,0,0,0.45) inset',
        bootstrapLarge: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        insetTop: '0 20px 10px -20px rgba(0,0,0,0.45) inset'
      },
      minHeight: {
        screen: '100dvh'
      },
      keyframes: {
        translateRight: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        }
      },
      animation: {
        translateRight: 'translateRight 1s ease-in-out',
      }
    },
    },
  darkMode: 'selector',
  plugins: [],
}

