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
        darkText3: "#B6B6B6",
        lightText: "#949494",
        lightGray: "#F5F5F5",
        mediumGray: "#E0E0E0",
        orange2: "#C94629",
        orange4: "#FF785C",
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
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7.5': '1.875rem',
      },
      letterSpacing: {
        tighter: '-0.42px',
        tight: '-0.36px',
      },
      boxShadow: {
        custom: '0 8px 16px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}