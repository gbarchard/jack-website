/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  // darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
  ],
}

