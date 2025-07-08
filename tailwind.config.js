/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /*==============*\
        Widths section
      \*===============*/
      width:{
        'width-1241':'77.5625rem', /* */
        'width-1440':'90rem',
        'hero-width':'45.5625rem',
        'width-729':'45.5625rem',
        'width-628':'39.25rem',
        'width-1569':'98.0625rem',
        'width-227':'14.1875rem',
        '208':'13rem',
        '40':'2.5rem',
        '21.62':'1.35125rem',
        '8.28':'0.5175rem',
        '284':'17.75rem',
        '1437':'89.8125rem',
        '256':'16rem',
        '92':'5.75rem',
        '168':'10.5rem',
        '24':'1.5rem',
        '25.89':'1.618125rem',
        '374.45':'23.403125rem'
      },
      /*==============*\
      Heights sections
      \*===============*/
      height:{
        'height-cta-parent-height':'39.75rem',
        'height-456-auto':'28.5rem',
        'height-729':'45.5625rem',
        'height-359.34-auto':'22.45875rem',
        'height-232':'14.5rem',
        'height-52':'3.25rem',
        'height-89':'5.5625rem',
        'height-60': '3.75rem',
        '40':'2.5rem',
        '21.62':'1.35125rem',
        '8.28':'0.5175rem',
        '636':'39.75rem',
         '58': '3.625rem',
         '248': '15.5rem',
         '24': '1.5rem',
         '25.55':'1.596875rem',
         '43.34':'2.70875rem'
        
      },
      /*==============*\
      Font Family section
      \*===============*/
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
      },
      /*==============*\
      background Color section
      \*===============*/
      backgroundColor:{
       'test-child-bgColor':'green',
       'test-parent-bgColor':'yellow',
       'sea-blue':'#BFD1EB'
      },
      /*==============*\
      background Image section
      \*===============*/
      backgroundImage:{
 'hero-bg':'url(/images/hero.jpg)',
 'hero-footer-bg':'url(/images/hero-footer.png)',
 'levu-bg':'url(/images/levu0.jpg)'
 
      },
      /*==============*\
      Top section
      \*===============*/
      spacing:{
        'top-90': '5.625rem',
        'left-100': '6.25rem',
        'top-185px': '11.5625rem',
        'top-819': '51.1875rem',
        'top-66': '66px',
        'left-1331': '83.1875rem',
        'cta-parent-left': '-0.0625rem',
        'top-15': '0.9375rem',
        '9.19': '0.574375rem',
        '15.86': '0.9925rem',
        '908': '56.75rem',
         '-1px': '-0.0625rem',
         '-0.12':'-0.0075rem',
         '-1.89':'-0.118125rem',
         '70':'4.375rem',
      },
      /*==============*\
       Gap section
      \*===============*/
      gap:{
      'gap-50':'3.125rem',
      'gap-30':'1.875rem',
      'gap-20':'1.25rem',
      '10':'0.625rem',
      '35':'2.1875rem',
      '88.6':'5.5375rem',
      '14.45':'0.903125'
      },
      colors:{
        'sea-blue':'#BFD1EB',
        'primary':'#3361A3',
        'neutral':'#777777',
        'white':'#FFFFFF',
        'neutral-black':'#333333'
      },
      /*==============*\
       font weight section
      \*===============*/
      fontWeight:{
        'font-weight-700':'700',
        'font-weight-400':'400',
        'font-weight-600':'600'
      },
      lineHeight:{
        'lg-80':'5rem',
        'lg-24':'1.5rem',
        'lg-100%':'1rem',
        
      },
       /*==============*\
       font Size section
      \*===============*/
 fontSize:{
  'font-size-64':'4rem',
  'font-size-20':'1.25rem',
  'font-size-48':'3rem',
  'font-size-16':'16px'
 },
 /*==============*\
       Radius section
\*===============*/
 borderRadius:{
  'max':'225.84px, #FFFFFF',
  'nano-sm':'0.85px'
 }
    },
  },
  plugins: [],
}

