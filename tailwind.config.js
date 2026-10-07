/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        app: 'url(/assets/bg.jpg)',
      },
      backgroundSize: {
        '50%': '50%',
        '16': '4rem',
      },
      backgroundOpacity: {
        app: '20'
      },
      colors: {
        gray: {
          100: "#E1E1E6",
          300: "#8D8D99",
          600: "#323238",
          800: "#202024",
          900: "#121214"
        },
        // verde da marca (substitui o roxo da referência)
        green: {
          300: "#8FE3B4",
          400: "#5ED492",
          500: "#2FBF71",
          700: "#1F8A50",
        },
        ink: {
          800: "#1C1C1C",
          900: "#141414",
        },
        ignite: {
          100: "#E1E1E6",
          500: "#129E57"
        },
        yellow: {
          500: "#F7DD43",
          700: "#E5CD3D"
        }
      }
    },
  },
  plugins: [],
}
