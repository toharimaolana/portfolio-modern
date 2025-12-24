/** @type {import('tailwindcss').Config} */
export const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poetsen: ['Poetsen One', 'cursive'],
      },
      colors: {
        'bg-base': '#0a0a0f',
        'bg-surface': '#13131a',
        'text-light': '#ede9fe',
        'text-muted': '#a1a1aa',
        'primary': '#7338A0',
        'secondary': '#924DBF',
        'accent-glow': '#C77DFF',
        'border-highlight': '#3f3f46',
      },
      // Custom Background Gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      // Custom Border Width
      borderWidth: {
        '3': '3px',
      },
      
      // Custom Animations
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      
      // Custom Keyframes
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      
      // Custom Backdrop Blur
      backdropBlur: {
        xs: '2px',
      },
      
      // Custom Box Shadows
      boxShadow: {
        'glow': '0 0 20px rgba(199, 125, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(199, 125, 255, 0.4)',
        'glow-xl': '0 0 60px rgba(199, 125, 255, 0.5)',
      },
    },
  },
  // Purge unused CSS untuk production
  safelist: [
    'text-accent-glow',
    'text-secondary',
    'text-primary',
  ],
  plugins: [],
};