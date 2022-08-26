/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
    }
  },
  plugins: [],
}
