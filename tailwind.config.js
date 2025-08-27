/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'noto-sans': ['Noto Sans TC', 'sans-serif'],
                'noto-serif': ['Noto Serif TC', 'serif'],
                'indie-flower': ['Indie Flower', 'cursive'],
                'nunito': ['Nunito', 'sans-serif'],
                'comfortaa': ['Comfortaa', 'cursive'],
            },
            dropShadow: {
                'bubble': [
                    '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    '4px 4px 8px rgba(0, 0, 0, 0.2)',
                    '6px 6px 12px rgba(0, 0, 0, 0.1)'
                ],
            },
        },
    },
    plugins: [],
}
