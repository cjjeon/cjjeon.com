module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'cool-picture': "url('/background-image.jpg')",
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
