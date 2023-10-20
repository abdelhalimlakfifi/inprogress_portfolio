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
        },
    },
    plugins: [],
}