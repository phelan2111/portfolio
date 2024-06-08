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
        "error": "#EE4E4E"
      },
      boxShadow: {
        error: "0px 0px 1px 1px",
        white: "0px 0px 1px 1px"
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

