module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xx: '20px',
        xxl: '51px',
        ggl: '30px',
      },
      fontFamily: {
        libre: ['Libre Franklin']
      },
      colors: {
        blue: 'hsl(223, 87%, 63%)',
        pale: 'hsl(223, 100%, 88%)',
        gary: 'hsl(0, 0%, 59%)',
        dblue: 'hsl(209, 33%, 12%)',
        red: 'hsl(354, 100%, 66%)'
      },
      width: {
        wbtn: '13rem',
        winpt: '28rem',
        mbl: '20rem',
        vvv: '700px',
        vv: '349px',
       
      },
      inset: {
        '33': '331px',
        '63': '63px',
      },
      boxShadow: {
        pll: '1px 1px 5px hsl(223, 100%, 88%)'
      }
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
