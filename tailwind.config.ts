import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1360px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      variants: {
        height:['responsive', 'hover', 'focus', 'group-hover'],
        border:['responsive', 'hover', 'focus', 'group-hover'],
        padding:['responsive', 'hover', 'focus', 'group-hover'],
        opacity:['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['active','group-hover group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
         },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-pale':'#5F5F5F',
        'gray':'#DAD9D6',
        'sticky-color':'rgba(17, 17, 17, 0.70)',
        'drop':'rgba(0, 0, 0, 0.25)'
      }
  
    },
  },
  plugins: [
    plugin(function({ addVariant }:any) {
      addVariant('third', '&:nth-child(3)')
    })
  ]
}
export default config
