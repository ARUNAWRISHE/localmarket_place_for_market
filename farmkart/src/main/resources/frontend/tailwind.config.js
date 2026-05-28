/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2d5a27',
        'primary-dark': '#154212',
        'on-primary': '#ffffff',
        secondary: '#fdbc13',
        'on-secondary': '#6b4d00',
        tertiary: '#2b3f00',
        background: '#f9f9f7',
        surface: '#f9f9f7',
        'surface-variant': '#e2e3e1',
        'surface-container': '#eeeeec',
        'surface-container-low': '#f4f4f2',
        'surface-container-high': '#e8e8e6',
        'surface-container-highest': '#e2e3e1',
        'on-surface': '#1a1c1b',
        'on-surface-variant': '#42493e',
        outline: '#72796e',
        'outline-variant': '#c2c9bb',
        error: '#ba1a1a',
        success: '#2f7d32',
        warning: '#b26a00',
        info: '#2962ff',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Literata', 'serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        'margin-mobile': '16px',
        'margin-desktop': '64px',
        gutter: '24px',
      },
      boxShadow: {
        organic: '0 8px 30px rgba(45, 90, 39, 0.08)',
        card: '0 4px 20px rgba(45, 90, 39, 0.05)',
        glass: '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, rgba(45, 90, 39, 0.9), rgba(253, 188, 19, 0.2))',
        'soft-radial': 'radial-gradient(circle at top, rgba(45, 90, 39, 0.12), transparent 55%)',
      },
    },
  },
  plugins: [],
}

