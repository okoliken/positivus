/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors:{
        pvGreen: "#B9FF66",
        pvGrey:"#F3F3F3",
        pvDark:"#191A23",
        pvLightGrey:"#292A32"
      },
      container:{
        center:true,
        padding:'2rem'
      },
      boxShadow: ({theme}) => ({
        'card-shadow': `0px 5px 0px 0px ${theme('colors.pvDark')}`,
      }),
    },
  },
  plugins: [],
}

