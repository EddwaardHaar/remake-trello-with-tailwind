/** @type {import('tailwindcss').Config} */
module.exports = {

  purge: {
		enabled: false,
		content: [
			"./dist/*.html",
			"./src/**/*.vue",
		]
	},
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
