/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
        abc: ["Comic Neue","sans-serif"],
        def: ["Nabla","monospace"],
        ghi: ["Londrina Solid","monospace"],
    },
  },
  plugins: [],
};

