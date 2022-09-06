/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Oxygen', 'sans-serif'],
    },
    backgroundImage: {
      'hero-cover': "url('../images/hero_cover.jpg')",
    },
    extend: {
      colors: {
        primary: {
          light: '#dc3545',
          dark: '#dc3545',
        },
        secondary: {
          light: '#dc3545',
          dark: '#dc3545',
        },
        paper: {
          light: '#FFF',
          dark: '#212529',
        },
        content: {
          light: '#000',
          dark: '#FFF',
        },
        attenuated: {
          light: '#dee3e4',
          dark: '#6c757d',
        },
        neutral: {
          light: 'rgba(248,249,250,1)',
          dark: '#343a40',
        },
        black: "#000",
        white: '#FFF',
      },
      animation: {
        'slide-down': 'slide-down 0.7s',
        'typed-blink': 'typed-blink 0.7s infinite',
      },
      keyframes: {
        'slide-down': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        },
        'typed-blink': {
          '0%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        }
      }
    },
  },
  plugins: [],
}
