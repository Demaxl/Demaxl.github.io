/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{html,js,vue}',
        './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        fontFamily: {
            sans: ['Sora', 'sans-serif']
        },
        extend: {
            colors: {
                neutral: '#404040'
            }
        }
    },
    plugins: [require('flowbite/plugin')]
}
