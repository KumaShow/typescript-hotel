/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '1.75rem', // 28px
      '3xl': '2rem', // 32px
      '4xl': '2.5rem', // 40px
      '5xl': '3rem', // 48px
      display: '100px',
    },
    extend: {
      colors: {
        primary: {
          120: '#7B6651',
          100: '#BF9D7D',
          80: '#AE9984',
          60: '#E1D1C2',
          40: '#F1EAE4',
          tint: '#FAF7F5',
        },
        success: {
          120: '#299F65',
          100: '#52DD7E',
          20: '#BCFBBD',
          10: '#E8FEE7',
        },
        info: {
          120: '#1D66AC',
          100: '#3BADEF',
          20: '#B1EFFD',
          10: '#E6FBFE',
        },
        alert: {
          120: '#C22538',
          100: '#DA3E51',
          20: '#F5CCD1',
          10: '#FDECEF',
        },
        background: '#140F0A',
        neutral: {
          80: '#4B4B4B',
          60: '#909090',
          40: '#ECECEC',
          10: '#F9F9F9',
        },
      },
      backgroundColor: ['group-hover'],
    },
  },
  plugins: [],
};
