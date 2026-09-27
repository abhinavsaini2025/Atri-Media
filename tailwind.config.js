/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0B0E17',
        surface: '#131728',
        paper: '#F5F6F8',
        panel: '#ECEEF3',
        ink: '#12141C',
        slate: {
          soft: '#8890A6',
        },
        gold: {
          DEFAULT: '#F28C28',
          soft: '#F6AB4B',
          dim: '#D96D10',
        },
        violet: {
          DEFAULT: '#6C63FF',
          soft: '#8B84FF',
          dim: '#4C44D6',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1240px',
      },
      backgroundImage: {
        'stars-grid':
          'radial-gradient(circle at 1px 1px, rgba(242,184,75,0.35) 1px, transparent 0)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        spinSlow: 'spinSlow 40s linear infinite',
      },
    },
  },
  plugins: [],
}
