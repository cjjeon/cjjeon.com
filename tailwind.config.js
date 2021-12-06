module.exports = {
    purge: {
        enabled: true,
        content: [
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
        ],
        options: {
            safelist: ["dark"],
        },
    },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                paris: ["Parisienne", "cursive"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
