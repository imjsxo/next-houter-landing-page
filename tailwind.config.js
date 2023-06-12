/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        1200: '1200px'
      },
      width: {
        1200: '1200px'
      },
      color: {
        'bgSignUp': '#D1FAE5',
        'fontSignUp': '#047857'
      },
      spacing: {
        'bannerHeight': '46rem'
      }
    },
  },
  plugins: [],
}
