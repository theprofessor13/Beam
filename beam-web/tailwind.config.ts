import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#10152B',
          2: '#1B2140',
        },
        paper: {
          DEFAULT: '#F6F7FB',
          2: '#FFFFFF',
        },
        cobalt: {
          DEFAULT: '#3654FF',
          dark: '#2540DB',
          10: 'rgba(54,84,255,0.10)',
        },
        mint: {
          DEFAULT: '#17D9A3',
          10: 'rgba(23,217,163,0.14)',
        },
        coral: '#FF5C6C',
        slate: {
          DEFAULT: '#6B7190',
          2: '#9AA1C4',
        },
        line: '#E4E7F0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        xl2: '22px',
        xl3: '28px',
      },
    },
  },
  plugins: [],
} satisfies Config;
