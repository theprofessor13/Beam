import type { Config } from 'tailwindcss';

// Theme-dependent colors read CSS variables (defined in src/index.css) so every
// existing utility like bg-paper / text-slate / border-line switches per theme.
// The `<alpha-value>` placeholder keeps opacity modifiers (bg-paper/85) working.
const themed = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: 'class', // applied for both Dim and Lights out
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- fixed brand colors (same in every theme) ---
        ink: {
          DEFAULT: '#10152B',
          2: '#1B2140',
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

        // --- theme-dependent colors ---
        paper: themed('paper'), // page background
        surface: themed('surface'), // cards, panels
        foreground: themed('foreground'), // primary text
        line: themed('line'), // borders, dividers
        accent: themed('accent'), // cobalt text that stays readable on dark
        slate: {
          DEFAULT: themed('slate'), // muted text
          2: '#9AA1C4', // muted text on the always-dark panels (fixed)
        },
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