/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'deep-orange':'#F25C05',
        'orange':'#F27405',
        '50': '#fff9ec',
        '100': '#fff2d4',
        '200': '#ffe2a7',
        '300': '#ffcc70',
        '400': '#ffaa36',
        '500': '#ff900f',
        '600': '#f27405',
        '700': '#c85706',
        '800': '#9e440e',
        '900': '#7f390f',
        '950': '#451b05',
      },
      borderRadius: {
        sm: '16px',
        md: '20px',
        lg: '25px',
      },
    }
  },
  plugins: []
};