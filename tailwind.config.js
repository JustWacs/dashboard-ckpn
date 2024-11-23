/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': "#833C0C",
        'light-brown': "#FCE4D6",
        'orange': "#C65911",
        'white-accent': "#F2F2F2",
      },
    },
  },
  plugins: [],
};
