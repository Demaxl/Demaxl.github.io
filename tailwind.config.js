/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{html,js,vue}', './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {}
    },
    plugins: [require('flowbite/plugin')]
}
