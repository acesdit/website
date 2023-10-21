/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-inter)'],
        title: ['var(--font-oswald)'],
      },
      colors: {
        primary: '#7D111C', // ACES Red 
        secondary: '#A07C38', // ACES Golden
        beige: '#EFE6D8' // Beige
      }
    },
  },
  plugins: [],
}
