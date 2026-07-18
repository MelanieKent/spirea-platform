/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // D2 Brand System — Spirea Platform
        // Source: Spirea Platform Visual Brand System D2, June 2025
        limestone:   '#F0EDE8',   // Primary background
        chalk:       '#F7F5F2',   // Secondary surface
        divider:     '#E0DDD8',   // Borders, hairlines
        'faint-ink': '#9A9A98',   // Labels, captions
        'muted-ink': '#6A6A68',   // Secondary body
        ink:         '#3A3A38',   // Primary body
        'deep-ink':  '#1A1A18',   // Headlines, nav
        teal:        '#1D9E75',   // D2 accent — once per composition
        'teal-dark': '#0F6E56',   // Teal hover/active
        'hero-dark': '#1C1C1A',   // Homepage hero only
        // Status colours (not general-purpose)
        amber:       '#BA7517',   // "Underway" indicator only
        'done-dark': '#2C2C2A',   // "Completed" stage node only
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem', letterSpacing: '0.1em' }],
      },
      borderRadius: {
        'arc':    '0 0 120px 0',  // D2 image arc corner — standard
        'arc-sm': '0 0 80px 0',   // D2 image arc corner — small
      },
      animation: {
        'sp-pulse': 'sp-pulse 2.4s ease-in-out infinite',
      },
      keyframes: {
        'sp-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
};
