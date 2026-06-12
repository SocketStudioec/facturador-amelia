/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marca Amelia — azul real #4154F1 (token 'teal' conservado por compatibilidad)
        teal: {
          DEFAULT: '#4154F1',
          50:  '#EEF1FE',
          100: '#DCE2FD',
          200: '#BBC6FB',
          300: '#93A4F8',
          400: '#6B80F5',
          500: '#4154F1',
          600: '#2A3AEB',
          700: '#2230C4',
          800: '#1E2A9E',
          900: '#1B2486',
        },
        // Tinta / superficies oscuras — índigo profundo Amelia
        navy: {
          DEFAULT: '#1B2559',
          50:  '#EEF0F7',
          100: '#D7DBEC',
          800: '#232F6B',
          900: '#1B2559',
          950: '#111738',
        },
        // Acento cian — del degradado de Begroup
        coral: {
          DEFAULT: '#16C0E6',
          soft: '#5BD6F0',
        },
        ink: {
          DEFAULT: '#161B36',
          soft: '#3A416B',
          muted: '#6B729A',
        },
        surface: {
          DEFAULT: '#F6F8FE',
          warm: '#F1F4FD',
          card: '#FFFFFF',
          line: '#E3E7F4',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,37,64,0.04), 0 8px 24px -12px rgba(10,37,64,0.12)',
        card: '0 1px 3px rgba(10,37,64,0.06), 0 20px 48px -24px rgba(10,37,64,0.18)',
        float: '0 24px 60px -24px rgba(10,37,64,0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
