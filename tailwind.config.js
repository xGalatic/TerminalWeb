/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                danger: "#ad4a4a",
                command: "#73abad",
                warn: "#B98076",
                lang: "#ada873",
                info: "#519975",
                dark: "#211D1B",
            },
        },
    },
    plugins: [],
};
