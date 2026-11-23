/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#090a0c',
          900: '#111215',
          850: '#16181c',
          800: '#1c1e24',
          700: '#282b33',
          600: '#3b3f4a',
        },
        ivory: {
          50: '#fcfbf9',
          100: '#f6f4ee',
          200: '#ece7dc',
          300: '#ded7c7',
          400: '#c7bfad',
          500: '#a89f8c',
        },
        gold: {
          300: '#dfc39a',
          400: '#cbb085',
          500: '#b89a69',
          600: '#9b7e4f',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.12em',
        'subtle': '0.06em',
      }
    },
  },
  plugins: [],
}
