/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: 'true',
      padding: '0.9rem',
    },
    fontFamily: {
      'sans': 'Righteous'
    },
    extend: {
      colors: {
        'hoverColor': '#FE53BB',
        'BtnColor':'#C0013A',
        'BgColor':'#10061E',
        'gameBackground': "rgba(201, 201, 201, 0.91) @ 100%"        
        
      },

      letterSpacing: {
        normal: '0.08rem',
        wide: '.025em',
        wider: '.05em',
        widest: '3px',
      },
    },
  },
  plugins: [],
}
