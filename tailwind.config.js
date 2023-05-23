/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // fontSize: {
    //   xs: '0.5rem',
    //   '3xs': '0.25rem',
    // },

    fontFamily: {
      Inter: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'logo': "url('/Components/profile/profile pictures/autumn-goodman-vTL_qy03D1I-unsplash.jpg')",
      },
      spacing: {
        '128': '32rem',
        '134': '38rem',
        '144': '44rem',
        '18' : '4.75rem',
        '23' : '5.75rem',
        '27': '6.75rem',
        '150': '50rem'
      },
      colors:{
        'regal-blue': '#24272C',
        'hover': '#F4068F',
        'article' : '#1E1C1E',
        'arrow-up': '#4ECB71',
        'arrow-down': '#FD0202',
        'ranking': '#191616',
        'thumbs': '#322F32',
        'score': 'rgba(255, 238, 89, 0.1)'

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    
  },
},
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
