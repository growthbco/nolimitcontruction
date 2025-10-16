/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'lime': '#84cc16',
        'lime-light': '#a3e635',
        'lime-dark': '#65a30d'
      }
    },
  },
  plugins: [],
}
