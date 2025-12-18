/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New palette from Aly Hamad
        brand: {
          white: '#FFFFFF',
          black: '#242424',
          slate: '#5C7C89',
          teal: '#1F4959',
          navy: '#011425',
        },
        primary: {
          50: '#e6f2f5',
          100: '#cce5eb',
          200: '#99cad7',
          300: '#66b0c3',
          400: '#5C7C89',
          500: '#1F4959',
          600: '#1a3d4b',
          700: '#15313c',
          800: '#10252e',
          900: '#011425',
        },
        dark: {
          900: '#011425',
          800: '#0a1f2f',
          700: '#1F4959',
          600: '#2a5a6b',
          500: '#5C7C89',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #011425 0%, #1F4959 50%, #011425 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(31, 73, 89, 0.3)',
        'glow-lg': '0 0 60px rgba(92, 124, 137, 0.4)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
