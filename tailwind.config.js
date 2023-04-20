/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,css}'],
  theme: {
    extend: {
			colors: {
				myOrange: {
					600: '#edbc4a'
				},
			},
		},

  },
  plugins: ['@tailwindcss/forms'],
};
