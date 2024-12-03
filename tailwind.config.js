/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    extract,
  },
  theme: {
    fontFamily: {
      serif: 'League Spartan, serif',
    },
    letterSpacing: {
      tightest: '-0.33px',
      tighter: '-0.67px',
      wide: '0.3125rem',
      wider: '-0.125rem',
      widest: '0.75rem',
    },
    screens,
    fontSize,
    extend: {
      screens: {
        sm: '40rem',
        md: '72.5rem',
        lg: '90rem',
      },
      colors: {
        darkGray: ' hsl(0, 0%, 63%)',
        veryDarkGray: 'hsl(0, 0%, 27%)',
      },
      minHeight: {
        screen: '100dvh',
      },
    },
  },
  plugins: [fluid],
}
