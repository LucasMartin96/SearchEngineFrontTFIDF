/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          background: 'var(--color-background)',
          'background-secondary': 'var(--color-background-secondary)',
          navbar: 'var(--color-navbar)',
        }
      },
      fontFamily: {
        'heading': 'var(--font-heading), sans-serif',
        'body': 'var(--font-body), sans-serif',
      }
    },
  },
  plugins: [],
}