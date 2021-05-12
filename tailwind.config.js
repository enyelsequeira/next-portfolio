module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/utils/constant.tsx',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Quattrocento', 'serif'],
    },
    height: {
      'card-md': '500px',
    },
    extend: {
      white: {
        faded: "rgba(255, 255, 255, 0.78)",
      },
      gridTemplateColumns: {
        test: 'repeat(3, minmax(0, 400px));',
      },
      gridTemplateRows: {
        'rowt-': 'repeat(7, 1fr)',
      },
      gridColumnStart: {
        div1: '1',
        div2: '2',
        div3: '2',
        div4: '3',
      },
      gridColumnEnd: {
        div1: '2',
        div2: '3',
        div3: '3',
        div4: '4',
      },
      gridRowStart: {
        div1: '3',
        div2: '5',
        div3: '1',
        div4: '3',
      },
      gridRowEnd: {
        div1: '6',
        div2: '8',
        div3: '4',
        div4: '6',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ul > li > p > a': {
              color: 'var(--accent)',
              textDecoration: 'none',
              '&:hover': {
                color: '#c4d8d8',
              },
            },
            'ul > li > a':{
              color: 'var(--accent)',
              textDecoration: 'none',
              textTransform: "uppercase",
              transition: "500ms",
              '&:hover': {
                color: '#c4d8d8',
              },
            }
          },
        },
      }),
      colors: {
        light: 'var(--primary)',
        't-base': 'var(--text-base)',
        't-primary': 'var(--text-primary)',
        't-secondary': 'var(--text-secondary)',
        't-ternary': 'var(--tenariary)',
        'light-accent': 'var(--accent)',
        'secondary-bg': 'var(--secondary)',
        'faded': 'var(--faded)',

        // dark
        dark: 'var(--dark-primary)',
        'd-t-base': 'var(--dark-text-base)',
        'd-t-primary': 'var(--dark-text-primary)',
        'd-secondary': 'var(--dark-secondary)',
        'd-third': 'var(--dark-ternariary)',
        'd-accent': 'var(--dark-accent)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
