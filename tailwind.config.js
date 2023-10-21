/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // backgroundImage:{
            //     'desktop-background': "url('')"
            // }
            fontFamily: {
                jetbrains: ['JetBrains Mono', 'monospace']
            },
            colors: {
                'main-blue':'#1B2440',
                'main-orange':'#F7941D'
            }
        },
    },
    plugins: [],
}