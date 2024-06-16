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
        "primary_dark-20": "#191717",
        "secondary": "#1AACAC",
        "neutral": "#A9A9A9",
        "error": "#EE4E4E"
      },
      backgroundImage: {
        gradientCard: "linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% )"
      },
      boxShadow: {
        error: "0px 0px 1px 1px",
        white: "0px 0px 1px 1px",
        insetAllSide: '0 0 10px 0 rgba(0,0,0,0.45) inset',
        bootstrapLarge: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        insetTop: '0 20px 10px -20px rgba(0,0,0,0.45) inset',
        insetBotRight: '0 -20px 10px -20px rgba(0,0,0,0.45) inset, -20px 0 10px -20px rgba(0,0,0,0.45) inset',
        materialDesign: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
      },
      minHeight: {
        screen: '100dvh'
      },
      width: {
        screen: '100dvw'
      },
      height: {
        home: 'calc(100dvh - 160px)',
        screen: '100dvh'
      },
      keyframes: {
        translateRight: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        },
        translateToTry: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        },
        translateBottom: {
          '0%': { transform: 'translateY(32px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
        bgScale: {
          '0%': { backgroundSize: '100%'},
          '100%': { backgroundSize: '125%' },
        }
      },
      animation: {
        translateBottom: 'translateBottom 0.4s  ease-in-out',
        translateRight: 'translateRight 1s ease-in-out',
        bgScale: 'bgScale 1.5s  ease-in-out',
        translateToTry: 'translateToTry 0.4s ease-in-out',
      },
      backgroundSize: {
        '125%': '125%'
      },
      screen: {
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
    },
    },
    },
  darkMode: 'selector',
  plugins: [],
}

