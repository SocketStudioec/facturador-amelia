/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Teal — acción principal
        teal: {
          DEFAULT: '#0FB5A6',
          50:  '#ECFDFA',
          100: '#CFFAF2',
          200: '#9DF2E6',
          300: '#5EE6D6',
          400: '#27CDBC',
          500: '#0FB5A6',
          600: '#0B8F84',
          700: '#0C726B',
          800: '#0E5B56',
          900: '#0F4B47',
        },
        // Navy — tinta / superficies oscuras
        navy: {
          DEFAULT: '#0A2540',
          50:  '#EEF2F7',
          100: '#D6E0EC',
          800: '#0F2E4D',
          900: '#0A2540',
          950: '#061829',
        },
        // Acento cálido — usado con moderación
        coral: {
          DEFAULT: '#FF6B5C',
          soft: '#FF8A7E',
        },
        ink: {
          DEFAULT: '#0B1F33',
          soft: '#33485C',
          muted: '#6B7E8F',
        },
        surface: {
          DEFAULT: '#F6F9FB',
          warm: '#F2F7F6',
          card: '#FFFFFF',
          line: '#E3EAF0',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
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
