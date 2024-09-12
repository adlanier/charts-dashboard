// tailwind.config.js
module.exports = {
  darkMode: 'class', // Use class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',    // Optional: Customize your colors
        secondary: '#14171A',
        'dark-background': '#000000', // Black background for dark mode
        'dark-text': '#FFFFFF',       // White text for dark mode
      },
    },
  },
  plugins: [],
}
