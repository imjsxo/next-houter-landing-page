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
        1200: '1200px',
        1440:'1440px',
        600:'600px'
      },
      color: {
        'bgSignUp': '#D1FAE5',
        'fontSignUp': '#047857',
        '626687': '#626687',
        'E0E3EB': '#E0E3EB',
        'F59E0B': '#F59E0B',
        'buttonGreen':'#10B981',
        '888B97':'#888B97'
      },
      spacing: {
        'bannerHeight': '720px'
      },
      fontSize: {
        '40': '40px'
      },
      lineHeight: {
        '50': '50px'
      },
      borderRadius: {
        'border-20': '20px'
      }
    },
  },
  plugins: [],
}
