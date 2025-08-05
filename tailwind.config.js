/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '15': '3.75rem',    // 60px
                '85': '21.25rem',   // 340px
            },
            gap: {
                '15': '3.75rem',    // 60px
            },
            borderWidth: {
                '3': '3px',
            },
            scale: {
                '120': '1.2',
            },
            margin: {
                '15': '3.75rem',    // 60px
            },
            width: {
                '15': '3.75rem',    // 60px
                '85': '21.25rem',   // 340px
            },
            height: {
                '15': '3.75rem',    // 60px
            },
        },
    },
    plugins: [],
}