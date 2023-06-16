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
        1200: '1200px',
        '56': '56px'
      },
      width: {
        1200: '1200px',
        1440:'1440px',
        600:'600px'
      },
      color: {
        'lightGreen': '#D1FAE5',
        'fontSignUp': '#047857',
        '626687': '#626687',
        'E0E3EB': '#E0E3EB',
        'yellow': '#F59E0B',
        'buttonGreen':'#10B981',
        '888B97':'#888B97',
        '3C4563':'#3C4563',
        '1B1C57' :'#1B1C57',
        'red': '#EF4444',
        'pink': '#FEE2E2',
        'blue': '#1D4ED8',
        'violet': '#DBEAFE',
        'green': '#047857'
      },
      spacing: {
        'bannerHeight': '720px',
        '65': '65%',
        '312': '312px',
        '5': '5%'
      },
      fontSize: {
        '40': '40px',
        '32': '32px'
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
