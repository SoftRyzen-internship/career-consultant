import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './layout/**/*.{ts,tsx,mdx}',
    './sections/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '1.25rem',
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
