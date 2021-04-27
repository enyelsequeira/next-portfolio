module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Quattrocento', 'serif'],
    },
    extend: {
      colors: {
        light: 'var(--primary)',
        't-base': 'var(--text-base)',
        't-primary': 'var(--text-primary)',
        't-secondary': 'var(--text-secondary)',
        't-ternary': 'var(--tenariary)',
        'light-accent': 'var(--accent)',

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
  plugins: [],
};
