/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', '"Public Sans Fallback"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        primary: ['"Public Sans"', '"Public Sans Fallback"', 'sans-serif'],
      },
      fontSize: {
        'display': '72px',
        'hero': '64px',
        'h1': '48px',
        'h2': '40px',
        'h3': '32px',
        'h4': '24px',
        'h5': '20px',
        'h6': '18px',
        'body': '16px',
        'small': '14px',
        'xs': '12px',
      },
      colors: {
        // Cores principais do Nuxt
        primary: {
          50: '#e6f0f5',
          100: '#cce1eb',
          200: '#99c3d7',
          300: '#66a5c3',
          400: '#3387af',
          500: '#020618', // Cor principal
          600: '#020515',
          700: '#020412',
          800: '#01030f',
          900: '#01020c',
          950: '#000106',
        },
        secondary: {
          50: '#e6fdf4',
          100: '#ccfbe9',
          200: '#99f7d3',
          300: '#66f3bd',
          400: '#33efa7',
          500: '#00DC82', // Cor secundária
          600: '#00b068',
          700: '#00844e',
          800: '#005834',
          900: '#002c1a',
          950: '#00160d',
        },
        // Cores neutras
        black: '#000000',
        white: '#ffffff',
        // Gradientes pré-definidos via background
        'gradient-primary': 'linear-gradient(135deg, #020618 0%, #00DC82 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00DC82 0%, #020618 100%)',
        'gradient-soft': 'linear-gradient(135deg, #3387af 0%, #33efa7 100%)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #020618 0%, #00DC82 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #00DC82 0%, #020618 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00DC82 0%, #66f3bd 100%)',
        'gradient-dark': 'linear-gradient(135deg, #020618 0%, #020515 100%)',
        'gradient-light': 'linear-gradient(135deg, #ccfbe9 0%, #e6fdf4 100%)',
        'gradient-radial-primary': 'radial-gradient(circle, #00DC82 0%, #020618 100%)',
        'gradient-radial-secondary': 'radial-gradient(circle, #020618 0%, #00DC82 100%)',
        'gradient-diagonal': 'linear-gradient(45deg, #020618 0%, #00DC82 50%, #020618 100%)',
        'gradient-vertical': 'linear-gradient(180deg, #020618 0%, #00DC82 100%)',
        'gradient-horizontal': 'linear-gradient(90deg, #020618 0%, #00DC82 100%)',
      },
      textColor: {
        'gradient-primary': 'transparent',
      },
      gradientColorStops: {
        'primary-start': '#020618',
        'primary-end': '#00DC82',
        'secondary-start': '#00DC82',
        'secondary-end': '#020618',
      },
    },
  },
  plugins: [],
}
