const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
              sm: '600px',
              md: '728px',
              lg: '984px',
              xl: '1240px',
                '2xl': '1400px',
            }
          },
        extend: {
            colors: {
                'main-color': '#5BC0BE',
                'text-color': '1E1E1E'
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
