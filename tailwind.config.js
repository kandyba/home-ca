/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF603F",
        secondary: "#293464",
        darkText: "#1F1F1F",
        lightText: "#949494",
        lightGray: "#F5F5F5",
        mediumGray: "#E0E0E0",
      },
      fontFamily: {
        sans: ['"Albert Sans"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}