/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        apercu: ['Apercu Pro', 'sans-serif'],
        'cera-pro': ['"Cera Pro"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',  // Slower spin
        'spin-fast': 'spin 0.5s linear infinite', // Faster spin
      },
      backgroundImage: {
        'custom-image': "url('./assets/BG.png')", // Replace with your image path
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

