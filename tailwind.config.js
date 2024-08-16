/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        medium: 'Roboto_500Medium',
        regular: 'Roboto_400Regular',
        semibold: 'Roboto_600SemiBold',
      },
    },
  },
  plugins: [],
}
